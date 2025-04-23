import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Card from '../common/Card';

interface CategoryDistributionChartProps {
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  title?: string;
  description?: string;
  className?: string;
  showLegend?: boolean;
  showLabels?: boolean;
}

const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({
  data,
  title,
  description,
  className = '',
  showLegend = true,
  showLabels = true,
}) => {
  // Default colors if not provided
  const COLORS = ['#3B82F6', '#10B981', '#FBBF24', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6', '#F97316'];
  
  // Format data to ensure colors
  const formattedData = data.map((item, index) => ({
    ...item,
    color: item.color || COLORS[index % COLORS.length],
  }));
  
  // Calculate total for percentage
  const total = formattedData.reduce((sum, item) => sum + item.value, 0);

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
            <PieChart>
              <Pie
                data={formattedData}
                cx="50%"
                cy="50%"
                labelLine={showLabels}
                label={showLabels ? ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%` : undefined}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {formattedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {showLegend && (
                <Legend 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  formatter={(value, entry, index) => {
                    const item = formattedData[index];
                    const percentage = ((item.value / total) * 100).toFixed(1);
                    return `${value} (${percentage}%)`;
                  }}
                />
              )}
              <Tooltip 
                formatter={(value, name, entry) => {
                  const percentage = ((value / total) * 100).toFixed(1);
                  return [`${value} (${percentage}%)`, name];
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {formattedData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 dark:text-neutral-400">No data available</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CategoryDistributionChart;
