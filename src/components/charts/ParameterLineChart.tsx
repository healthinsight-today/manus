import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import Card from '../common/Card';
import { formatDate } from '../../utils/formatters/dateFormatter';

interface ParameterLineChartProps {
  data: Array<{
    date: string;
    value: number;
    referenceMin?: number;
    referenceMax?: number;
    isAbnormal?: boolean;
  }>;
  title?: string;
  description?: string;
  parameterName: string;
  unit?: string;
  className?: string;
}

const ParameterLineChart: React.FC<ParameterLineChartProps> = ({
  data,
  title,
  description,
  parameterName,
  unit = '',
  className = '',
}) => {
  // Format data for the chart
  const chartData = data.map(item => ({
    ...item,
    formattedDate: formatDate(item.date),
  }));

  // Get reference range for lines
  const referenceMin = chartData[0]?.referenceMin;
  const referenceMax = chartData[0]?.referenceMax;

  // Calculate domain padding
  const values = chartData.map(item => item.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const padding = (maxValue - minValue) * 0.2;
  
  // Calculate domain with reference ranges if available
  const yDomain = [
    Math.min(minValue, referenceMin !== undefined ? referenceMin : Infinity) - padding,
    Math.max(maxValue, referenceMax !== undefined ? referenceMax : -Infinity) + padding
  ];

  return (
    <Card className={className}>
      <div className="p-6">
        {title && (
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            {description}
          </p>
        )}
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="formattedDate" />
              <YAxis domain={yDomain} />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === parameterName) {
                    return [`${value} ${unit}`, name];
                  }
                  return [value, name];
                }}
              />
              <Legend />
              
              {referenceMin !== undefined && (
                <ReferenceLine 
                  y={referenceMin} 
                  label="Min" 
                  stroke="#10B981" 
                  strokeDasharray="3 3" 
                />
              )}
              
              {referenceMax !== undefined && (
                <ReferenceLine 
                  y={referenceMax} 
                  label="Max" 
                  stroke="#EF4444" 
                  strokeDasharray="3 3" 
                />
              )}
              
              <Line
                type="monotone"
                dataKey="value"
                name={parameterName}
                stroke="#3B82F6"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                dot={{ 
                  stroke: '#3B82F6', 
                  strokeWidth: 2, 
                  r: 4,
                  fill: (dataPoint: any) => dataPoint.isAbnormal ? '#EF4444' : '#FFFFFF'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>* Red dots indicate abnormal values outside the reference range</p>
        </div>
      </div>
    </Card>
  );
};

export default ParameterLineChart;
