/**
 * Format a date string into a more readable format
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "April 15, 2025")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Format a number with appropriate units
 * @param value - Numeric value
 * @param unit - Unit string (e.g., "mg/dL")
 * @returns Formatted value with unit
 */
export const formatValueWithUnit = (value: string | number, unit?: string): string => {
  return unit ? `${value} ${unit}` : `${value}`;
};

/**
 * Format a parameter value with color coding based on normal range
 * @param value - Parameter value
 * @param referenceRange - Reference range string (e.g., "70 - 100")
 * @returns Object with formatted value and CSS class for styling
 */
export const formatParameterValue = (
  value: string | number, 
  referenceRange?: string
): { formattedValue: string; className: string } => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (!referenceRange) {
    return { formattedValue: `${value}`, className: '' };
  }
  
  // Extract min and max from reference range
  const rangeMatch = referenceRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);
  if (!rangeMatch) {
    return { formattedValue: `${value}`, className: '' };
  }
  
  const min = parseFloat(rangeMatch[1]);
  const max = parseFloat(rangeMatch[2]);
  
  // Determine if value is normal, low, or high
  let className = 'health-parameter-normal';
  if (numericValue < min) {
    className = 'health-parameter-abnormal';
  } else if (numericValue > max) {
    className = 'health-parameter-abnormal';
  }
  
  return { 
    formattedValue: `${value}`, 
    className 
  };
};

/**
 * Format a percentage value
 * @param value - Numeric value (0-100)
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

/**
 * Format a health score (0-100) with appropriate color coding
 * @param score - Health score value
 * @returns Object with formatted score and CSS class for styling
 */
export const formatHealthScore = (score: number): { score: string; className: string } => {
  let className = '';
  
  if (score >= 80) {
    className = 'text-secondary';
  } else if (score >= 60) {
    className = 'text-warning';
  } else {
    className = 'text-error';
  }
  
  return {
    score: score.toFixed(0),
    className
  };
};
