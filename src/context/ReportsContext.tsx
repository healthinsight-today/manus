import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Report } from '../types/Report';
import { FilterOptions } from '../types/Filter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getReports, getReportById } from '../services/api/reports';

interface ReportsContextProps {
  reports: Report[];
  currentReport: Report | null;
  isLoading: boolean;
  error: string | null;
  filterOptions: FilterOptions;
  setFilterOptions: (options: FilterOptions) => void;
  fetchReports: () => Promise<void>;
  fetchReportById: (id: string) => Promise<void>;
  clearCurrentReport: () => void;
  refreshReports: () => Promise<void>;
}

const ReportsContext = createContext<ReportsContextProps | undefined>(undefined);

interface ReportsProviderProps {
  children: ReactNode;
}

export const ReportsProvider: React.FC<ReportsProviderProps> = ({ children }) => {
  const [reports, setReports] = useLocalStorage<Report[]>('reports', []);
  const [currentReport, setCurrentReport] = useState<Report | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    dateRange: undefined,
    reportTypes: undefined,
    abnormalOnly: false,
    searchTerm: '',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  const fetchReports = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getReports(filterOptions);
      if (response.success && response.data) {
        setReports(response.data);
      } else {
        setError(response.error || 'Failed to fetch reports');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReportById = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getReportById(id);
      if (response.success && response.data) {
        setCurrentReport(response.data);
      } else {
        setError(response.error || `Failed to fetch report with ID: ${id}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const clearCurrentReport = () => {
    setCurrentReport(null);
  };

  const refreshReports = async () => {
    await fetchReports();
  };

  // Initial fetch
  useEffect(() => {
    fetchReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch when filter options change
  useEffect(() => {
    fetchReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOptions]);

  const value = {
    reports,
    currentReport,
    isLoading,
    error,
    filterOptions,
    setFilterOptions,
    fetchReports,
    fetchReportById,
    clearCurrentReport,
    refreshReports
  };

  return <ReportsContext.Provider value={value}>{children}</ReportsContext.Provider>;
};

export const useReports = (): ReportsContextProps => {
  const context = useContext(ReportsContext);
  if (context === undefined) {
    throw new Error('useReports must be used within a ReportsProvider');
  }
  return context;
};
