# Health Insight Today - Blood Test Report Analysis

A comprehensive React TypeScript application for analyzing blood test reports, providing insights, and offering personalized health recommendations.

![Health Insight Today Screenshot](./screenshot.png)

## Features

- **Upload and Analyze Blood Test Reports**: Upload your blood test reports and get detailed analysis
- **Comprehensive Dashboard**: View your health status at a glance with key metrics and visualizations
- **Detailed Insights**: Receive personalized insights based on your blood test parameters
- **Health Recommendations**: Get actionable recommendations to improve your health metrics
- **Historical Tracking**: Track your health parameters over time with trend visualizations
- **Responsive Design**: Fully responsive interface that works on mobile, tablet, and desktop
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing

## Technology Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for improved developer experience and code quality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For navigation and routing
- **Recharts**: For data visualization components
- **Context API**: For state management
- **Accessibility**: ARIA attributes and keyboard navigation

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/healthinsighttoday-frontend.git
cd healthinsighttoday-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── accessibility/     # Accessibility components
│   ├── charts/            # Data visualization components
│   ├── common/            # Reusable UI components
│   ├── insights/          # Insight-related components
│   ├── layout/            # Layout components
│   ├── recommendations/   # Recommendation components
│   └── reports/           # Report-related components
├── context/               # React Context providers
├── pages/                 # Page components
├── services/
│   └── api/               # API service modules
├── types/                 # TypeScript interfaces
└── utils/                 # Utility functions
```

## Key Components

### Reports

- **ReportUploader**: Drag-and-drop file upload component with progress indication
- **ReportsList**: Displays a list of reports with filtering and search
- **ReportDetail**: Shows detailed information about a specific report

### Insights

- **InsightsList**: Displays health insights with filtering by category and severity
- **InsightDetail**: Shows detailed information about a specific insight
- **InsightTrends**: Visualizes parameter trends over time

### Recommendations

- **RecommendationsList**: Displays health recommendations with filtering
- **RecommendationDetail**: Shows detailed information about a specific recommendation

### Visualizations

- **ParameterBarChart**: Bar chart comparing values to reference ranges
- **ParameterLineChart**: Line chart for trend visualization
- **HealthScoreGauge**: Gauge chart for overall health scores
- **CategoryDistributionChart**: Pie chart for category distribution

## Data Flow

1. User uploads a blood test report through the `ReportUploader` component
2. The report is processed and stored in the `ReportsContext`
3. Insights and recommendations are generated based on the report data
4. The user can view reports, insights, and recommendations through the respective components
5. Data visualizations are generated based on the report data

## Accessibility Features

- Skip links for keyboard navigation
- ARIA attributes for screen readers
- Keyboard shortcuts for common actions
- Focus management for improved navigation
- Color contrast compliance
- Screen reader announcements for dynamic content

## Keyboard Shortcuts

- `Alt + 1`: Skip to main content
- `Alt + 2`: Skip to navigation
- `Alt + 3`: Skip to search
- `?`: Show keyboard shortcuts
- `g + d`: Go to Dashboard
- `g + r`: Go to Reports
- `g + i`: Go to Insights
- `g + c`: Go to Recommendations
- `g + s`: Go to Settings
- `n + r`: Upload new report
- `Alt + t`: Toggle dark mode
- `Ctrl + /`: Search
- `Esc`: Close dialog/modal

## Mock API Integration

The application includes mock API services that simulate backend functionality:

- `/reports/upload`: Upload a new report
- `/reports`: Get all reports
- `/reports/{id}`: Get a specific report
- `/insights`: Get all insights
- `/insights/{id}`: Get a specific insight
- `/recommendations`: Get all recommendations
- `/recommendations/{id}`: Get a specific recommendation

## Customization

### Theming

The application uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        // Add more custom colors here
      },
    },
  },
  // ...
}
```

## Development

### Available Scripts

- `npm start`: Starts the development server
- `npm test`: Runs tests
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

### Adding New Features

1. Define TypeScript interfaces in the `types` directory
2. Create new components in the appropriate directories
3. Update context providers if needed
4. Add new routes in `AppRouter.tsx`
5. Update API services if needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [React Router](https://reactrouter.com/)
