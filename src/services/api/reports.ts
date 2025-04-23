import { get, post } from './client';
import { Report } from '../../types/Report';
import { ApiResponse, PaginatedResponse, UploadResponse } from '../../types/Api';
import { FilterOptions } from '../../types/Filter';
import { mockReports, mockReport } from './mockData';

// Get all reports with optional filtering
export const getReports = async (
  filterOptions?: FilterOptions
): Promise<ApiResponse<Report[]>> => {
  // In a real app, we would pass filterOptions to the API
  // For mock implementation, we'll filter locally
  
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let filteredReports = [...mockReports];
    
    if (filterOptions) {
      // Apply filters
      if (filterOptions.dateRange) {
        const { startDate, endDate } = filterOptions.dateRange;
        filteredReports = filteredReports.filter(report => {
          const reportDate = new Date(report.report_info.report_date);
          return reportDate >= new Date(startDate) && reportDate <= new Date(endDate);
        });
      }
      
      if (filterOptions.reportTypes && filterOptions.reportTypes.length > 0) {
        filteredReports = filteredReports.filter(report => 
          filterOptions.reportTypes?.includes(report.report_info.report_type)
        );
      }
      
      if (filterOptions.abnormalOnly) {
        filteredReports = filteredReports.filter(report => 
          report.abnormal_parameters.length > 0
        );
      }
      
      if (filterOptions.searchTerm) {
        const searchTerm = filterOptions.searchTerm.toLowerCase();
        filteredReports = filteredReports.filter(report => 
          report.patient_info.name.toLowerCase().includes(searchTerm) ||
          report.report_info.lab_name.toLowerCase().includes(searchTerm) ||
          report.report_info.report_type.toLowerCase().includes(searchTerm)
        );
      }
      
      // Apply sorting
      if (filterOptions.sortBy) {
        filteredReports.sort((a, b) => {
          switch (filterOptions.sortBy) {
            case 'date':
              return new Date(a.report_info.report_date).getTime() - new Date(b.report_info.report_date).getTime();
            case 'name':
              return a.patient_info.name.localeCompare(b.patient_info.name);
            case 'abnormalities':
              return a.abnormal_parameters.length - b.abnormal_parameters.length;
            default:
              return 0;
          }
        });
        
        // Apply sort order
        if (filterOptions.sortOrder === 'desc') {
          filteredReports.reverse();
        }
      }
    }
    
    return {
      success: true,
      data: filteredReports,
      status: 200
    };
  }
  
  // Real API call for production
  return get<Report[]>('/reports', filterOptions as Record<string, string | number | boolean | undefined>);
};

// Get paginated reports
export const getPaginatedReports = async (
  page: number = 1,
  limit: number = 10,
  filterOptions?: FilterOptions
): Promise<ApiResponse<PaginatedResponse<Report>>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let filteredReports = [...mockReports];
    
    // Apply filters (same as getReports)
    if (filterOptions) {
      // Filter logic (same as above)
      // ...
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedReports = filteredReports.slice(startIndex, endIndex);
    
    return {
      success: true,
      data: {
        items: paginatedReports,
        total: filteredReports.length,
        page,
        limit,
        totalPages: Math.ceil(filteredReports.length / limit)
      },
      status: 200
    };
  }
  
  // Real API call for production
  return get<PaginatedResponse<Report>>('/reports/paginated', {
    page,
    limit,
    ...filterOptions
  });
};

// Get a single report by ID
export const getReportById = async (id: string): Promise<ApiResponse<Report>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Find report in mock data
    const report = mockReports.find(r => r.id === id);
    
    if (report) {
      return {
        success: true,
        data: report,
        status: 200
      };
    } else {
      // If not found in the array, return the single mock report
      // This ensures we always have data for demo purposes
      return {
        success: true,
        data: { ...mockReport, id },
        status: 200
      };
    }
  }
  
  // Real API call for production
  return get<Report>(`/reports/${id}`);
};

// Upload a new report
export const uploadReport = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<ApiResponse<UploadResponse>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (onProgress) onProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 300);
    
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    return {
      success: true,
      data: {
        report_id: `report-${Date.now()}`,
        status: 'processing',
        message: 'Report uploaded successfully and is being processed'
      },
      status: 202
    };
  }
  
  // Real API call for production
  const formData = new FormData();
  formData.append('file', file);
  
  // Custom implementation for tracking upload progress
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', '/reports/upload');
    
    if (onProgress) {
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          onProgress(progress);
        }
      });
    }
    
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        resolve({
          success: true,
          data,
          status: xhr.status
        });
      } else {
        resolve({
          success: false,
          error: 'Upload failed',
          status: xhr.status
        });
      }
    };
    
    xhr.onerror = () => {
      resolve({
        success: false,
        error: 'Network error',
        status: 0
      });
    };
    
    xhr.send(formData);
  });
};

// Check report processing status
export const checkReportStatus = async (reportId: string): Promise<ApiResponse<{ status: string; progress?: number }>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Randomly determine status for demo purposes
    const statuses = ['pending', 'processing', 'completed', 'failed'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    return {
      success: true,
      data: {
        status: randomStatus,
        progress: randomStatus === 'processing' ? Math.floor(Math.random() * 100) : undefined
      },
      status: 200
    };
  }
  
  // Real API call for production
  return get<{ status: string; progress?: number }>(`/reports/${reportId}/status`);
};

// Delete a report
export const deleteReport = async (id: string): Promise<ApiResponse<void>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      status: 204
    };
  }
  
  // Real API call for production
  return get<void>(`/reports/${id}`);
};
