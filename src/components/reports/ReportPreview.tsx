import React, { useState } from 'react';
import { Report } from '../../types/Report';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import Tabs from '../common/Tabs';
import { formatDate } from '../../utils/formatters/dateFormatter';

interface ReportPreviewProps {
  report: Report;
  className?: string;
  onViewDetails?: () => void;
  onViewInsights?: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({
  report,
  className = '',
  onViewDetails,
  onViewInsights,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format date using utility function
  const formattedDate = formatDate(report.report_info.report_date);

  // Count parameters by status
  const totalParameters = report.test_sections.reduce(
    (sum, section) => sum + section.parameters.length, 
    0
  );
  const abnormalCount = report.abnormal_parameters.length;
  const normalCount = totalParameters - abnormalCount;

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-white';
      case 'processing':
        return 'bg-secondary text-white';
      case 'pending':
        return 'bg-warning text-white';
      case 'failed':
        return 'bg-error text-white';
      default:
        return 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300';
    }
  };

  // Get abnormality color
  const getAbnormalityColor = (direction: 'high' | 'low' | null, severity: 'mild' | 'moderate' | 'severe' | null) => {
    if (!direction) return 'text-success';
    
    if (direction === 'high') {
      switch (severity) {
        case 'mild':
          return 'text-warning';
        case 'moderate':
        case 'severe':
          return 'text-error';
        default:
          return 'text-warning';
      }
    } else {
      switch (severity) {
        case 'mild':
          return 'text-secondary';
        case 'moderate':
        case 'severe':
          return 'text-error';
        default:
          return 'text-secondary';
      }
    }
  };

  // Get abnormality icon
  const getAbnormalityIcon = (direction: 'high' | 'low' | null) => {
    if (!direction) return null;
    
    return direction === 'high' ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    );
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className={`${className}`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
                {report.report_info.report_type}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formattedDate} • {report.report_info.lab_name}
              </p>
            </div>
            <span 
              className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(report.processing.status)}`}
            >
              {report.processing.status.charAt(0).toUpperCase() + report.processing.status.slice(1)}
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Patient Information
              </span>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-md p-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Name</p>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">{report.patient_info.name}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">ID</p>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">{report.patient_info.patient_id}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Age</p>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">{report.patient_info.age}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Gender</p>
                  <p className="text-sm font-medium text-neutral-800 dark:text-white">{report.patient_info.gender}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Health Parameters Summary
              </span>
              <button 
                className="text-xs text-primary hover:text-primary-dark"
                onClick={openModal}
              >
                View All
              </button>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-md p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">Normal</span>
                </div>
                <span className="text-sm font-medium text-neutral-800 dark:text-white">{normalCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">Abnormal</span>
                </div>
                <span className="text-sm font-medium text-neutral-800 dark:text-white">{abnormalCount}</span>
              </div>
            </div>
          </div>
          
          {abnormalCount > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Top Abnormal Parameters
                </span>
              </div>
              <div className="space-y-2">
                {report.abnormal_parameters.slice(0, 3).map((param) => (
                  <div 
                    key={param.name} 
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-md p-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-white">{param.name}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{param.section}</p>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${getAbnormalityColor(param.direction, param.severity)}`}>
                        {param.value} {param.unit}
                      </span>
                      <span className="ml-1">
                        {getAbnormalityIcon(param.direction)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={onViewDetails}
              fullWidth
            >
              View Details
            </Button>
            <Button
              variant="primary"
              onClick={onViewInsights}
              fullWidth
            >
              View Insights
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Modal for viewing all parameters */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Report Parameters"
        size="lg"
      >
        <Tabs
          tabs={report.test_sections.map(section => ({
            id: section.section_id,
            label: section.section_name,
            content: (
              <div className="mt-4">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Parameter
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Reference Range
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
                    {section.parameters.map((param) => (
                      <tr key={param.name}>
                        <td className="px-4 py-3 text-sm text-neutral-800 dark:text-white">
                          {param.name}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          <span className={param.is_abnormal ? getAbnormalityColor(param.direction, param.severity) : 'text-neutral-800 dark:text-white'}>
                            {param.value} {param.unit}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                          {param.reference_range}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {param.is_abnormal ? (
                            <div className="flex items-center">
                              <span className={`font-medium ${getAbnormalityColor(param.direction, param.severity)}`}>
                                {param.direction === 'high' ? 'High' : 'Low'}
                              </span>
                              <span className="ml-1">
                                {getAbnormalityIcon(param.direction)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-success font-medium">Normal</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          }))}
        />
        
        <div className="mt-6 flex justify-end">
          <Button
            variant="primary"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ReportPreview;
