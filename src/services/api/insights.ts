import { get } from './client';
import { ApiResponse } from '../../types/Api';
import { Insight } from '../../types/Report';
import { mockReport } from './mockData';

// Get insights for a specific report
export const getInsights = async (reportId: string): Promise<ApiResponse<Insight[]>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Use insights from mock report
    return {
      success: true,
      data: mockReport.insights,
      status: 200
    };
  }
  
  // Real API call for production
  return get<Insight[]>(`/insights/${reportId}`);
};

// Get specific insight details
export const getInsightDetails = async (
  reportId: string,
  insightId: string
): Promise<ApiResponse<Insight>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Find specific insight in mock data
    const insight = mockReport.insights.find(i => 
      i.condition.toLowerCase().replace(/\s+/g, '-') === insightId
    );
    
    if (insight) {
      return {
        success: true,
        data: insight,
        status: 200
      };
    } else {
      return {
        success: false,
        error: `Insight with ID ${insightId} not found`,
        status: 404
      };
    }
  }
  
  // Real API call for production
  return get<Insight>(`/insights/${reportId}/${insightId}`);
};

// Get health score calculated from report data
export const getHealthScore = async (reportId: string): Promise<ApiResponse<{
  overall: number;
  categories: Record<string, number>;
}>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // Generate mock health score based on abnormal parameters
    const report = mockReport;
    const abnormalCount = report.abnormal_parameters.length;
    const totalParameters = report.test_sections.reduce(
      (sum, section) => sum + section.parameters.length, 0
    );
    
    // Calculate overall score (0-100)
    const overall = Math.max(0, Math.min(100, 100 - (abnormalCount / totalParameters) * 100));
    
    // Calculate category scores
    const categories: Record<string, number> = {
      'Cardiovascular': 72,
      'Metabolic': 68,
      'Hematology': 85,
      'Liver': 95,
      'Kidney': 92,
      'Thyroid': 98
    };
    
    return {
      success: true,
      data: {
        overall: Math.round(overall),
        categories
      },
      status: 200
    };
  }
  
  // Real API call for production
  return get<{ overall: number; categories: Record<string, number> }>(`/insights/${reportId}/health-score`);
};

// Get trend data for a specific parameter across multiple reports
export const getParameterTrend = async (
  parameterId: string,
  timeframe: 'month' | 'quarter' | 'year' | 'all' = 'year'
): Promise<ApiResponse<{
  parameter: string;
  unit: string;
  reference_min: number | null;
  reference_max: number | null;
  data: Array<{ date: string; value: number }>
}>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 900));
    
    // Find parameter in mock report
    let parameter;
    for (const section of mockReport.test_sections) {
      parameter = section.parameters.find(p => 
        p.name.toLowerCase().replace(/\s+/g, '-') === parameterId ||
        p.code?.toLowerCase() === parameterId
      );
      if (parameter) break;
    }
    
    if (!parameter) {
      return {
        success: false,
        error: `Parameter with ID ${parameterId} not found`,
        status: 404
      };
    }
    
    // Generate mock trend data
    const now = new Date();
    const data = [];
    
    // Number of data points based on timeframe
    let points = 6;
    let monthStep = 1;
    
    switch (timeframe) {
      case 'month':
        points = 4;
        monthStep = 1/4; // Weekly
        break;
      case 'quarter':
        points = 3;
        monthStep = 1; // Monthly
        break;
      case 'year':
        points = 4;
        monthStep = 3; // Quarterly
        break;
      case 'all':
        points = 5;
        monthStep = 3; // Quarterly
        break;
    }
    
    // Generate data points with slight variations
    for (let i = 0; i < points; i++) {
      const date = new Date(now);
      date.setMonth(date.getMonth() - (points - i - 1) * monthStep);
      
      // Base value with random variation
      const variation = (Math.random() * 0.2 - 0.1) * parameter.value;
      const value = parameter.value + variation;
      
      data.push({
        date: date.toISOString().split('T')[0],
        value: Number(value.toFixed(2))
      });
    }
    
    return {
      success: true,
      data: {
        parameter: parameter.name,
        unit: parameter.unit,
        reference_min: parameter.reference_min,
        reference_max: parameter.reference_max,
        data
      },
      status: 200
    };
  }
  
  // Real API call for production
  return get<{
    parameter: string;
    unit: string;
    reference_min: number | null;
    reference_max: number | null;
    data: Array<{ date: string; value: number }>
  }>(`/insights/trends/${parameterId}`, { timeframe });
};
