import React, { useState } from 'react';
import { Report, Insight } from '../../types/Report';
import InsightCard from './InsightCard';
import Card from '../common/Card';
import Tabs from '../common/Tabs';
import SearchBar from '../common/SearchBar';
import Dropdown from '../common/Dropdown';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import Pagination from '../common/Pagination';

interface InsightsListProps {
  insights: Insight[];
  reports?: Report[];
  isLoading?: boolean;
  error?: string | null;
  className?: string;
  onInsightClick?: (insight: Insight) => void;
}

const InsightsList: React.FC<InsightsListProps> = ({
  insights,
  reports,
  isLoading = false,
  error = null,
  className = '',
  onInsightClick,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [insightsPerPage] = useState<number>(9);

  // Get unique categories
  const categories = ['all', ...new Set(insights.map(insight => insight.category.toLowerCase()))];
  
  // Get unique severities
  const severities = ['all', ...new Set(insights.map(insight => insight.severity.toLowerCase()))];

  // Filter insights
  const filteredInsights = insights.filter(insight => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      insight.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || 
      insight.category.toLowerCase() === selectedCategory;
    
    // Filter by severity
    const matchesSeverity = selectedSeverity === 'all' || 
      insight.severity.toLowerCase() === selectedSeverity;
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  // Calculate pagination
  const indexOfLastInsight = currentPage * insightsPerPage;
  const indexOfFirstInsight = indexOfLastInsight - insightsPerPage;
  const currentInsights = filteredInsights.slice(indexOfFirstInsight, indexOfLastInsight);
  const totalPages = Math.ceil(filteredInsights.length / insightsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  // Handle severity change
  const handleSeverityChange = (value: string) => {
    setSelectedSeverity(value);
    setCurrentPage(1);
  };

  // Find report for an insight
  const findReportForInsight = (insight: Insight): Report | undefined => {
    if (!reports) return undefined;
    return reports.find(report => report.id === insight.report_id);
  };

  // Group insights by category for tab view
  const insightsByCategory: Record<string, Insight[]> = {};
  
  insights.forEach(insight => {
    const category = insight.category.toLowerCase();
    if (!insightsByCategory[category]) {
      insightsByCategory[category] = [];
    }
    insightsByCategory[category].push(insight);
  });

  // Create tabs for categories
  const categoryTabs = [
    {
      id: 'all',
      label: 'All Insights',
      content: (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentInsights.map((insight) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              report={findReportForInsight(insight)}
              onClick={() => onInsightClick && onInsightClick(insight)}
            />
          ))}
        </div>
      ),
    },
    ...Object.entries(insightsByCategory).map(([category, categoryInsights]) => ({
      id: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
      content: (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryInsights
            .filter(insight => {
              // Apply other filters except category
              const matchesSearch = searchTerm === '' || 
                insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                insight.description.toLowerCase().includes(searchTerm.toLowerCase());
              
              const matchesSeverity = selectedSeverity === 'all' || 
                insight.severity.toLowerCase() === selectedSeverity;
              
              return matchesSearch && matchesSeverity;
            })
            .slice(indexOfFirstInsight, indexOfLastInsight)
            .map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                report={findReportForInsight(insight)}
                onClick={() => onInsightClick && onInsightClick(insight)}
              />
            ))}
        </div>
      ),
    })),
  ];

  return (
    <div className={className}>
      <div className="mb-6">
        <Card>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <SearchBar
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Dropdown
                  items={categories.map(category => ({
                    label: category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1),
                    value: category,
                  }))}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="Category"
                />
                <Dropdown
                  items={severities.map(severity => ({
                    label: severity === 'all' ? 'All Severities' : severity.charAt(0).toUpperCase() + severity.slice(1),
                    value: severity,
                  }))}
                  value={selectedSeverity}
                  onChange={handleSeverityChange}
                  placeholder="Severity"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner size="lg" text="Loading insights..." />
        </div>
      ) : error ? (
        <ErrorMessage
          message={error}
          title="Error loading insights"
        />
      ) : filteredInsights.length === 0 ? (
        <Card>
          <div className="p-12 text-center">
            <svg className="w-16 h-16 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">No Insights Found</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {searchTerm || selectedCategory !== 'all' || selectedSeverity !== 'all'
                ? "No insights match your current filters. Try adjusting your search criteria."
                : "There are no insights available for your reports yet."}
            </p>
          </div>
        </Card>
      ) : (
        <>
          <Tabs tabs={categoryTabs} />
          
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          )}
        </>
      )}
    </div>
  );
};

export default InsightsList;
