import { Report, Insight, Recommendation } from '../../types/Report';

// Sample data for demonstration purposes
export const sampleReports: Report[] = [
  {
    id: 'report-001',
    report_info: {
      report_id: 'LAB-2025-03-15-001',
      report_type: 'Complete Blood Count',
      report_date: '2025-03-15',
      lab_name: 'HealthLabs Inc.',
      doctor_name: 'Dr. Sarah Johnson'
    },
    patient_info: {
      patient_id: 'P12345',
      name: 'John Doe',
      age: 42,
      gender: 'Male',
      blood_group: 'O+',
      height: '180 cm',
      weight: '78 kg'
    },
    test_sections: [
      {
        section_name: 'Complete Blood Count',
        parameters: [
          {
            name: 'Hemoglobin',
            value: '13.5',
            unit: 'g/dL',
            reference_range: '13.5 - 17.5',
            section: 'Complete Blood Count'
          },
          {
            name: 'Red Blood Cells',
            value: '4.8',
            unit: 'million/µL',
            reference_range: '4.5 - 5.9',
            section: 'Complete Blood Count'
          },
          {
            name: 'White Blood Cells',
            value: '11.2',
            unit: 'thousand/µL',
            reference_range: '4.5 - 11.0',
            section: 'Complete Blood Count',
            is_abnormal: true
          },
          {
            name: 'Platelets',
            value: '250',
            unit: 'thousand/µL',
            reference_range: '150 - 450',
            section: 'Complete Blood Count'
          },
          {
            name: 'Hematocrit',
            value: '42',
            unit: '%',
            reference_range: '41 - 50',
            section: 'Complete Blood Count'
          }
        ]
      },
      {
        section_name: 'Lipid Panel',
        parameters: [
          {
            name: 'Total Cholesterol',
            value: '210',
            unit: 'mg/dL',
            reference_range: '125 - 200',
            section: 'Lipid Panel',
            is_abnormal: true
          },
          {
            name: 'HDL Cholesterol',
            value: '45',
            unit: 'mg/dL',
            reference_range: '40 - 60',
            section: 'Lipid Panel'
          },
          {
            name: 'LDL Cholesterol',
            value: '130',
            unit: 'mg/dL',
            reference_range: '0 - 100',
            section: 'Lipid Panel',
            is_abnormal: true
          },
          {
            name: 'Triglycerides',
            value: '175',
            unit: 'mg/dL',
            reference_range: '0 - 150',
            section: 'Lipid Panel',
            is_abnormal: true
          }
        ]
      },
      {
        section_name: 'Metabolic Panel',
        parameters: [
          {
            name: 'Glucose',
            value: '105',
            unit: 'mg/dL',
            reference_range: '70 - 100',
            section: 'Metabolic Panel',
            is_abnormal: true
          },
          {
            name: 'Creatinine',
            value: '0.9',
            unit: 'mg/dL',
            reference_range: '0.6 - 1.2',
            section: 'Metabolic Panel'
          },
          {
            name: 'BUN',
            value: '15',
            unit: 'mg/dL',
            reference_range: '7 - 20',
            section: 'Metabolic Panel'
          },
          {
            name: 'Sodium',
            value: '140',
            unit: 'mmol/L',
            reference_range: '135 - 145',
            section: 'Metabolic Panel'
          },
          {
            name: 'Potassium',
            value: '4.0',
            unit: 'mmol/L',
            reference_range: '3.5 - 5.0',
            section: 'Metabolic Panel'
          }
        ]
      }
    ],
    abnormal_parameters: [
      {
        name: 'White Blood Cells',
        value: '11.2',
        unit: 'thousand/µL',
        reference_range: '4.5 - 11.0',
        section: 'Complete Blood Count',
        is_abnormal: true
      },
      {
        name: 'Total Cholesterol',
        value: '210',
        unit: 'mg/dL',
        reference_range: '125 - 200',
        section: 'Lipid Panel',
        is_abnormal: true
      },
      {
        name: 'LDL Cholesterol',
        value: '130',
        unit: 'mg/dL',
        reference_range: '0 - 100',
        section: 'Lipid Panel',
        is_abnormal: true
      },
      {
        name: 'Triglycerides',
        value: '175',
        unit: 'mg/dL',
        reference_range: '0 - 150',
        section: 'Lipid Panel',
        is_abnormal: true
      },
      {
        name: 'Glucose',
        value: '105',
        unit: 'mg/dL',
        reference_range: '70 - 100',
        section: 'Metabolic Panel',
        is_abnormal: true
      }
    ],
    insights: [
      {
        id: 'insight-001',
        report_id: 'report-001',
        title: 'Elevated Cholesterol Levels',
        description: 'Your total cholesterol and LDL (bad cholesterol) levels are above the recommended range, which may increase your risk of heart disease.',
        category: 'Lipid',
        severity: 'Medium',
        related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Triglycerides'],
        detailed_analysis: 'Your total cholesterol is 210 mg/dL (reference range: 125-200 mg/dL) and your LDL cholesterol is 130 mg/dL (reference range: 0-100 mg/dL). Elevated cholesterol levels can lead to plaque buildup in your arteries, increasing your risk of heart disease and stroke.'
      },
      {
        id: 'insight-002',
        report_id: 'report-001',
        title: 'Slightly Elevated Blood Glucose',
        description: 'Your fasting blood glucose level is slightly above the normal range, which may indicate prediabetes.',
        category: 'Metabolic',
        severity: 'Low',
        related_parameters: ['Glucose'],
        detailed_analysis: 'Your fasting blood glucose is 105 mg/dL (reference range: 70-100 mg/dL). This level falls into what is considered prediabetes range (100-125 mg/dL). Prediabetes means your blood sugar is higher than normal but not high enough to be diagnosed as type 2 diabetes.'
      },
      {
        id: 'insight-003',
        report_id: 'report-001',
        title: 'Elevated White Blood Cell Count',
        description: 'Your white blood cell count is slightly elevated, which may indicate an infection or inflammation in the body.',
        category: 'Hematology',
        severity: 'Low',
        related_parameters: ['White Blood Cells'],
        detailed_analysis: 'Your white blood cell count is 11.2 thousand/µL (reference range: 4.5-11.0 thousand/µL). A slightly elevated white blood cell count may indicate that your body is fighting an infection or experiencing inflammation. If you have other symptoms like fever or pain, consult your healthcare provider.'
      }
    ],
    recommendations: [
      {
        id: 'rec-001',
        report_id: 'report-001',
        title: 'Dietary Changes for Cholesterol Management',
        description: 'Implement dietary changes to help lower your cholesterol levels and improve your lipid profile.',
        short_description: 'Dietary changes to lower cholesterol',
        category: 'Nutrition',
        priority: 'High',
        related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Triglycerides'],
        steps: [
          'Reduce intake of saturated fats found in red meat and full-fat dairy products',
          'Eliminate trans fats found in processed foods',
          'Increase consumption of omega-3 fatty acids found in fish, flaxseeds, and walnuts',
          'Add more soluble fiber to your diet through foods like oats, beans, and fruits',
          'Include foods with plant sterols and stanols like fortified orange juice or yogurt'
        ],
        benefits: [
          'Lower total and LDL cholesterol levels',
          'Reduced risk of heart disease and stroke',
          'Improved overall cardiovascular health',
          'Potential weight management benefits'
        ],
        resources: [
          {
            title: 'American Heart Association Diet Recommendations',
            url: 'https://www.heart.org/en/healthy-living/healthy-eating',
            description: 'Comprehensive guide to heart-healthy eating'
          },
          {
            title: 'DASH Diet Plan',
            url: 'https://www.nhlbi.nih.gov/health-topics/dash-eating-plan',
            description: 'Dietary Approaches to Stop Hypertension (DASH) eating plan'
          }
        ]
      },
      {
        id: 'rec-002',
        report_id: 'report-001',
        title: 'Regular Physical Activity',
        description: 'Incorporate regular physical activity into your routine to help manage cholesterol levels and blood glucose.',
        short_description: 'Exercise plan for better health',
        category: 'Exercise',
        priority: 'Medium',
        related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Glucose'],
        steps: [
          'Aim for at least 150 minutes of moderate-intensity aerobic activity per week',
          'Include muscle-strengthening activities at least 2 days per week',
          'Start with short sessions and gradually increase duration and intensity',
          'Choose activities you enjoy to help maintain consistency',
          'Consider working with a fitness professional to develop a personalized plan'
        ],
        benefits: [
          'Improved cholesterol levels, particularly increased HDL (good) cholesterol',
          'Better blood glucose control',
          'Reduced risk of heart disease and stroke',
          'Weight management',
          'Improved mood and energy levels'
        ],
        resources: [
          {
            title: 'Physical Activity Guidelines for Americans',
            url: 'https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines',
            description: 'Official physical activity recommendations'
          },
          {
            title: 'American Diabetes Association Exercise Guidelines',
            url: 'https://www.diabetes.org/fitness',
            description: 'Exercise recommendations for blood glucose management'
          }
        ]
      },
      {
        id: 'rec-003',
        report_id: 'report-001',
        title: 'Follow-up Testing',
        description: 'Schedule follow-up testing to monitor your cholesterol levels and blood glucose.',
        short_description: 'Schedule follow-up testing',
        category: 'Medical',
        priority: 'Medium',
        related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Glucose'],
        steps: [
          'Schedule a follow-up lipid panel in 3-6 months to monitor cholesterol levels',
          'Schedule a follow-up fasting blood glucose test in 3-6 months',
          'Consider an A1C test to assess your average blood glucose over the past 3 months',
          'Discuss results with your healthcare provider'
        ],
        benefits: [
          'Track progress of lifestyle modifications',
          'Early detection of any worsening conditions',
          'Opportunity to adjust treatment plan if needed',
          'Peace of mind through regular monitoring'
        ]
      }
    ]
  },
  {
    id: 'report-002',
    report_info: {
      report_id: 'LAB-2025-01-10-002',
      report_type: 'Comprehensive Metabolic Panel',
      report_date: '2025-01-10',
      lab_name: 'HealthLabs Inc.',
      doctor_name: 'Dr. Sarah Johnson'
    },
    patient_info: {
      patient_id: 'P12345',
      name: 'John Doe',
      age: 42,
      gender: 'Male',
      blood_group: 'O+',
      height: '180 cm',
      weight: '80 kg'
    },
    test_sections: [
      {
        section_name: 'Metabolic Panel',
        parameters: [
          {
            name: 'Glucose',
            value: '110',
            unit: 'mg/dL',
            reference_range: '70 - 100',
            section: 'Metabolic Panel',
            is_abnormal: true
          },
          {
            name: 'Creatinine',
            value: '0.9',
            unit: 'mg/dL',
            reference_range: '0.6 - 1.2',
            section: 'Metabolic Panel'
          },
          {
            name: 'BUN',
            value: '15',
            unit: 'mg/dL',
            reference_range: '7 - 20',
            section: 'Metabolic Panel'
          },
          {
            name: 'Sodium',
            value: '140',
            unit: 'mmol/L',
            reference_range: '135 - 145',
            section: 'Metabolic Panel'
          },
          {
            name: 'Potassium',
            value: '4.0',
            unit: 'mmol/L',
            reference_range: '3.5 - 5.0',
            section: 'Metabolic Panel'
          }
        ]
      },
      {
        section_name: 'Liver Function',
        parameters: [
          {
            name: 'ALT',
            value: '45',
            unit: 'U/L',
            reference_range: '7 - 40',
            section: 'Liver Function',
            is_abnormal: true
          },
          {
            name: 'AST',
            value: '42',
            unit: 'U/L',
            reference_range: '10 - 40',
            section: 'Liver Function',
            is_abnormal: true
          },
          {
            name: 'Alkaline Phosphatase',
            value: '90',
            unit: 'U/L',
            reference_range: '40 - 130',
            section: 'Liver Function'
          },
          {
            name: 'Total Bilirubin',
            value: '0.8',
            unit: 'mg/dL',
            reference_range: '0.1 - 1.2',
            section: 'Liver Function'
          }
        ]
      }
    ],
    abnormal_parameters: [
      {
        name: 'Glucose',
        value: '110',
        unit: 'mg/dL',
        reference_range: '70 - 100',
        section: 'Metabolic Panel',
        is_abnormal: true
      },
      {
        name: 'ALT',
        value: '45',
        unit: 'U/L',
        reference_range: '7 - 40',
        section: 'Liver Function',
        is_abnormal: true
      },
      {
        name: 'AST',
        value: '42',
        unit: 'U/L',
        reference_range: '10 - 40',
        section: 'Liver Function',
        is_abnormal: true
      }
    ],
    insights: [
      {
        id: 'insight-004',
        report_id: 'report-002',
        title: 'Elevated Liver Enzymes',
        description: 'Your liver enzymes (ALT and AST) are slightly elevated, which may indicate liver stress or inflammation.',
        category: 'Liver',
        severity: 'Medium',
        related_parameters: ['ALT', 'AST'],
        detailed_analysis: 'Your ALT is 45 U/L (reference range: 7-40 U/L) and AST is 42 U/L (reference range: 10-40 U/L). Elevated liver enzymes can be caused by various factors including medication use, alcohol consumption, fatty liver disease, or viral hepatitis. Mild elevations are common and often temporary.'
      },
      {
        id: 'insight-005',
        report_id: 'report-002',
        title: 'Persistent Elevated Blood Glucose',
        description: 'Your fasting blood glucose remains elevated compared to your previous test, suggesting consistent prediabetic levels.',
        category: 'Metabolic',
        severity: 'Medium',
        related_parameters: ['Glucose'],
        detailed_analysis: 'Your fasting blood glucose is 110 mg/dL (reference range: 70-100 mg/dL), which is higher than your previous reading of 105 mg/dL. Consistent readings in this range (100-125 mg/dL) indicate prediabetes, a condition that increases your risk of developing type 2 diabetes.'
      }
    ],
    recommendations: [
      {
        id: 'rec-004',
        report_id: 'report-002',
        title: 'Liver Health Optimization',
        description: 'Implement lifestyle changes to support liver health and reduce liver enzyme levels.',
        short_description: 'Support liver health',
        category: 'Lifestyle',
        priority: 'Medium',
        related_parameters: ['ALT', 'AST'],
        steps: [
          'Limit alcohol consumption or consider abstaining temporarily',
          'Maintain a healthy weight or lose weight if overweight',
          'Avoid unnecessary medications and supplements that may stress the liver',
          'Stay hydrated by drinking plenty of water',
          'Consume a diet rich in fruits, vegetables, and whole grains'
        ],
        benefits: [
          'Reduced liver inflammation',
          'Improved liver function',
          'Prevention of further liver damage',
          'Overall improved metabolic health'
        ],
        resources: [
          {
            title: 'American Liver Foundation Guidelines',
            url: 'https://liverfoundation.org/for-patients/about-the-liver/health-wellness/',
            description: 'Comprehensive guide to liver health'
          }
        ]
      },
      {
        id: 'rec-005',
        report_id: 'report-002',
        title: 'Blood Glucose Management Plan',
        description: 'Implement a comprehensive plan to manage blood glucose levels and reduce your risk of developing type 2 diabetes.',
        short_description: 'Manage blood glucose levels',
        category: 'Nutrition',
        priority: 'High',
        related_parameters: ['Glucose'],
        steps: [
          'Reduce intake of refined carbohydrates and added sugars',
          'Choose complex carbohydrates with lower glycemic index',
          'Include protein and healthy fats with each meal to slow glucose absorption',
          'Eat smaller, more frequent meals throughout the day',
          'Monitor blood glucose levels regularly with a home testing kit'
        ],
        benefits: [
          'Improved blood glucose control',
          'Reduced risk of developing type 2 diabetes',
          'Weight management',
          'Increased energy levels',
          'Better overall metabolic health'
        ],
        resources: [
          {
            title: 'American Diabetes Association Nutrition Guidelines',
            url: 'https://www.diabetes.org/nutrition',
            description: 'Evidence-based nutrition recommendations for diabetes prevention'
          },
          {
            title: 'CDC Prediabetes Information',
            url: 'https://www.cdc.gov/diabetes/basics/prediabetes.html',
            description: 'Information about prediabetes and prevention strategies'
          }
        ]
      }
    ]
  },
  {
    id: 'report-003',
    report_info: {
      report_id: 'LAB-2024-10-05-003',
      report_type: 'Lipid Panel',
      report_date: '2024-10-05',
      lab_name: 'HealthLabs Inc.',
      doctor_name: 'Dr. Sarah Johnson'
    },
    patient_info: {
      patient_id: 'P12345',
      name: 'John Doe',
      age: 41,
      gender: 'Male',
      blood_group: 'O+',
      height: '180 cm',
      weight: '82 kg'
    },
    test_sections: [
      {
        section_name: 'Lipid Panel',
        parameters: [
          {
            name: 'Total Cholesterol',
            value: '220',
            unit: 'mg/dL',
            reference_range: '125 - 200',
            section: 'Lipid Panel',
            is_abnormal: true
          },
          {
            name: 'HDL Cholesterol',
            value: '42',
            unit: 'mg/dL',
            reference_range: '40 - 60',
            section: 'Lipid Panel'
          },
          {
            name: 'LDL Cholesterol',
            value: '145',
            unit: 'mg/dL',
            reference_range: '0 - 100',
            section: 'Lipid Panel',
            is_abnormal: true
          },
          {
            name: 'Triglycerides',
            value: '165',
            unit: 'mg/dL',
            reference_range: '0 - 150',
            section: 'Lipid Panel',
            is_abnormal: true
          }
        ]
      }
    ],
    abnormal_parameters: [
      {
        name: 'Total Cholesterol',
        value: '220',
        unit: 'mg/dL',
        reference_range: '125 - 200',
        section: 'Lipid Panel',
        is_abnormal: true
      },
      {
        name: 'LDL Cholesterol',
        value: '145',
        unit: 'mg/dL',
        reference_range: '0 - 100',
        section: 'Lipid Panel',
        is_abnormal: true
      },
      {
        name: 'Triglycerides',
        value: '165',
        unit: 'mg/dL',
        reference_range: '0 - 150',
        section: 'Lipid Panel',
        is_abnormal: true
      }
    ],
    insights: [
      {
        id: 'insight-006',
        report_id: 'report-003',
        title: 'High Cardiovascular Risk Profile',
        description: 'Your lipid panel shows multiple abnormal values, indicating an increased risk for cardiovascular disease.',
        category: 'Cardiovascular',
        severity: 'High',
        related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Triglycerides'],
        detailed_analysis: 'Your total cholesterol is 220 mg/dL (reference range: 125-200 mg/dL), LDL cholesterol is 145 mg/dL (reference range: 0-100 mg/dL), and triglycerides are 165 mg/dL (reference range: 0-150 mg/dL). This combination of elevated lipids significantly increases your risk of atherosclerosis, heart disease, and stroke.'
      }
    ],
    recommendations: [
      {
        id: 'rec-006',
        report_id: 'report-003',
        title: 'Comprehensive Cardiovascular Risk Reduction',
        description: 'Implement a multi-faceted approach to reduce cardiovascular risk factors and improve your lipid profile.',
        short_description: 'Reduce cardiovascular risk',
        category: 'Medical',
        priority: 'High',
        related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Triglycerides'],
        steps: [
          'Consult with your healthcare provider about medication options if lifestyle changes are insufficient',
          'Adopt a heart-healthy diet low in saturated fats and rich in fruits, vegetables, and whole grains',
          'Engage in regular aerobic exercise for at least 150 minutes per week',
          'Quit smoking if applicable',
          'Limit alcohol consumption',
          'Manage stress through relaxation techniques or mindfulness practices'
        ],
        benefits: [
          'Reduced risk of heart attack and stroke',
          'Improved lipid profile',
          'Better overall cardiovascular health',
          'Potential improvement in other health markers'
        ],
        resources: [
          {
            title: 'American Heart Association Risk Calculator',
            url: 'https://www.heart.org/en/health-topics/cholesterol/cholesterol-tools-and-resources',
            description: 'Tool to assess your 10-year cardiovascular risk'
          },
          {
            title: 'Mediterranean Diet Resources',
            url: 'https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/mediterranean-diet',
            description: 'Information about the heart-healthy Mediterranean diet'
          }
        ]
      }
    ]
  }
];

// Additional insights not directly tied to reports
export const additionalInsights: Insight[] = [
  {
    id: 'insight-007',
    title: 'Metabolic Health Trend Analysis',
    description: 'Analysis of your metabolic health markers over time shows a concerning trend in blood glucose levels.',
    category: 'Metabolic',
    severity: 'Medium',
    related_parameters: ['Glucose', 'Triglycerides'],
    detailed_analysis: 'Your blood glucose levels have shown a gradual increase over your last three tests, from 100 mg/dL to 105 mg/dL to 110 mg/dL. This consistent upward trend, combined with elevated triglycerides, suggests developing insulin resistance, a precursor to type 2 diabetes.'
  },
  {
    id: 'insight-008',
    title: 'Cardiovascular Risk Assessment',
    description: 'Based on your lipid panel results and other risk factors, your 10-year cardiovascular disease risk is moderately elevated.',
    category: 'Cardiovascular',
    severity: 'Medium',
    related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'HDL Cholesterol', 'Triglycerides'],
    detailed_analysis: 'Using the American College of Cardiology/American Heart Association risk calculator, your 10-year risk of atherosclerotic cardiovascular disease is estimated at 8.5%, which is higher than the recommended target of <7.5% for your age group. This assessment considers your lipid values, age, gender, blood pressure, and smoking status.'
  },
  {
    id: 'insight-009',
    title: 'Liver Health Evaluation',
    description: 'Your liver enzyme levels suggest mild non-alcoholic fatty liver disease (NAFLD), which is common with metabolic syndrome.',
    category: 'Liver',
    severity: 'Medium',
    related_parameters: ['ALT', 'AST', 'Glucose', 'Triglycerides'],
    detailed_analysis: 'The combination of elevated liver enzymes (ALT and AST), increased blood glucose, and elevated triglycerides is consistent with non-alcoholic fatty liver disease (NAFLD). This condition is strongly associated with insulin resistance and metabolic syndrome. While your elevations are mild, this condition can progress to more serious liver damage if not addressed.'
  }
];

// Additional recommendations not directly tied to reports
export const additionalRecommendations: Recommendation[] = [
  {
    id: 'rec-007',
    title: 'Metabolic Syndrome Management',
    description: 'Implement a comprehensive approach to address multiple aspects of metabolic syndrome and reduce your risk of complications.',
    short_description: 'Manage metabolic syndrome',
    category: 'Lifestyle',
    priority: 'High',
    related_parameters: ['Glucose', 'Triglycerides', 'HDL Cholesterol', 'Total Cholesterol', 'LDL Cholesterol'],
    steps: [
      'Aim for 5-10% weight loss through a combination of diet and exercise',
      'Adopt a Mediterranean or DASH eating pattern',
      'Engage in both aerobic exercise and strength training regularly',
      'Prioritize sleep quality and aim for 7-8 hours per night',
      'Monitor blood pressure regularly and keep it below 130/80 mmHg',
      'Consider working with a registered dietitian for personalized nutrition guidance'
    ],
    benefits: [
      'Improved insulin sensitivity',
      'Reduced cardiovascular risk',
      'Better liver health',
      'Weight management',
      'Improved energy and quality of life'
    ],
    resources: [
      {
        title: 'National Institutes of Health Metabolic Syndrome Information',
        url: 'https://www.nhlbi.nih.gov/health-topics/metabolic-syndrome',
        description: 'Comprehensive information about metabolic syndrome'
      },
      {
        title: 'American Heart Association Lifestyle Recommendations',
        url: 'https://www.heart.org/en/healthy-living',
        description: 'Evidence-based lifestyle recommendations for heart health'
      }
    ]
  },
  {
    id: 'rec-008',
    title: 'Stress Management for Metabolic Health',
    description: 'Implement stress reduction techniques to improve metabolic health and reduce inflammation.',
    short_description: 'Manage stress for better health',
    category: 'Lifestyle',
    priority: 'Medium',
    related_parameters: ['Glucose', 'White Blood Cells'],
    steps: [
      'Practice mindfulness meditation for at least 10 minutes daily',
      'Incorporate regular physical activity, which helps reduce stress',
      'Ensure adequate sleep of 7-8 hours per night',
      'Consider yoga or tai chi, which combine physical activity with mindfulness',
      'Limit caffeine and alcohol, which can exacerbate stress responses',
      'Establish healthy boundaries in work and personal life'
    ],
    benefits: [
      'Reduced cortisol levels, which can improve insulin sensitivity',
      'Lower inflammation markers',
      'Improved sleep quality',
      'Better emotional well-being',
      'Potential improvement in blood glucose regulation'
    ],
    resources: [
      {
        title: 'American Psychological Association Stress Management Resources',
        url: 'https://www.apa.org/topics/stress',
        description: 'Evidence-based stress management techniques'
      },
      {
        title: 'Mindfulness-Based Stress Reduction Program',
        url: 'https://www.mindfulnesscds.com/',
        description: 'Structured program for stress reduction through mindfulness'
      }
    ]
  },
  {
    id: 'rec-009',
    title: 'Supplement Recommendations',
    description: 'Consider specific supplements that may help address your health concerns, in consultation with your healthcare provider.',
    short_description: 'Beneficial supplements to consider',
    category: 'Supplement',
    priority: 'Low',
    related_parameters: ['Total Cholesterol', 'LDL Cholesterol', 'Triglycerides', 'Glucose'],
    steps: [
      'Discuss these supplement options with your healthcare provider before starting',
      'Consider plant sterols/stanols (2g daily) for cholesterol reduction',
      'Evaluate omega-3 fatty acids (1-2g daily) for triglyceride reduction',
      'Consider berberine (500mg 2-3 times daily) for both glucose and lipid management',
      'Assess vitamin D status and supplement if deficient',
      'Choose high-quality supplements from reputable manufacturers'
    ],
    benefits: [
      'Potential modest reduction in LDL cholesterol with plant sterols/stanols',
      'Possible triglyceride reduction with omega-3 fatty acids',
      'Improved glucose metabolism with certain supplements like berberine',
      'Complementary approach to lifestyle modifications'
    ],
    resources: [
      {
        title: 'National Institutes of Health Office of Dietary Supplements',
        url: 'https://ods.od.nih.gov/',
        description: 'Evidence-based information about dietary supplements'
      },
      {
        title: 'ConsumerLab.com',
        url: 'https://www.consumerlab.com/',
        description: 'Independent testing and quality ratings for supplements (subscription required)'
      }
    ]
  }
];

// Combine all insights and recommendations
export const allInsights: Insight[] = [
  ...sampleReports.flatMap(report => report.insights || []),
  ...additionalInsights
];

export const allRecommendations: Recommendation[] = [
  ...sampleReports.flatMap(report => report.recommendations || []),
  ...additionalRecommendations
];

// Export default sample data
export default {
  reports: sampleReports,
  insights: allInsights,
  recommendations: allRecommendations
};
