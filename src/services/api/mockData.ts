import { Report } from '../../types/Report';

// Mock report data for development
export const mockReport: Report = {
  id: "report-1",
  report_info: {
    report_id: "BT-2023-10-15-001",
    report_type: "Complete Blood Panel",
    report_date: "2023-10-15T09:30:00Z",
    lab_name: "HealthLabs Inc.",
    processing_timestamp: "2023-10-15T14:45:00Z"
  },
  patient_info: {
    name: "John Doe",
    patient_id: "P-10042",
    age: 42,
    gender: "Male",
    height: 175,
    weight: 78,
    blood_group: "O+"
  },
  test_sections: [
    {
      section_id: "cbc",
      section_name: "Complete Blood Count",
      parameters: [
        {
          name: "Hemoglobin",
          code: "HGB",
          value: 13.2,
          unit: "g/dL",
          reference_range: "13.5-17.5",
          reference_min: 13.5,
          reference_max: 17.5,
          is_abnormal: true,
          direction: "low",
          severity: "mild"
        },
        {
          name: "Red Blood Cells",
          code: "RBC",
          value: 4.8,
          unit: "million/µL",
          reference_range: "4.5-5.9",
          reference_min: 4.5,
          reference_max: 5.9,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "White Blood Cells",
          code: "WBC",
          value: 7.2,
          unit: "thousand/µL",
          reference_range: "4.5-11.0",
          reference_min: 4.5,
          reference_max: 11.0,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "Platelets",
          code: "PLT",
          value: 140,
          unit: "thousand/µL",
          reference_range: "150-450",
          reference_min: 150,
          reference_max: 450,
          is_abnormal: true,
          direction: "low",
          severity: "mild"
        },
        {
          name: "Hematocrit",
          code: "HCT",
          value: 39,
          unit: "%",
          reference_range: "41-50",
          reference_min: 41,
          reference_max: 50,
          is_abnormal: true,
          direction: "low",
          severity: "mild"
        }
      ]
    },
    {
      section_id: "lipids",
      section_name: "Lipid Panel",
      parameters: [
        {
          name: "Total Cholesterol",
          code: "CHOL",
          value: 210,
          unit: "mg/dL",
          reference_range: "<200",
          reference_min: null,
          reference_max: 200,
          is_abnormal: true,
          direction: "high",
          severity: "mild"
        },
        {
          name: "LDL Cholesterol",
          code: "LDL",
          value: 145,
          unit: "mg/dL",
          reference_range: "<130",
          reference_min: null,
          reference_max: 130,
          is_abnormal: true,
          direction: "high",
          severity: "moderate"
        },
        {
          name: "HDL Cholesterol",
          code: "HDL",
          value: 42,
          unit: "mg/dL",
          reference_range: ">40",
          reference_min: 40,
          reference_max: null,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "Triglycerides",
          code: "TRIG",
          value: 180,
          unit: "mg/dL",
          reference_range: "<150",
          reference_min: null,
          reference_max: 150,
          is_abnormal: true,
          direction: "high",
          severity: "moderate"
        }
      ]
    },
    {
      section_id: "glucose",
      section_name: "Glucose Metabolism",
      parameters: [
        {
          name: "Fasting Glucose",
          code: "GLU",
          value: 105,
          unit: "mg/dL",
          reference_range: "70-99",
          reference_min: 70,
          reference_max: 99,
          is_abnormal: true,
          direction: "high",
          severity: "mild"
        },
        {
          name: "HbA1c",
          code: "A1C",
          value: 5.8,
          unit: "%",
          reference_range: "<5.7",
          reference_min: null,
          reference_max: 5.7,
          is_abnormal: true,
          direction: "high",
          severity: "mild"
        }
      ]
    },
    {
      section_id: "thyroid",
      section_name: "Thyroid Function",
      parameters: [
        {
          name: "TSH",
          code: "TSH",
          value: 2.5,
          unit: "mIU/L",
          reference_range: "0.4-4.0",
          reference_min: 0.4,
          reference_max: 4.0,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "Free T4",
          code: "FT4",
          value: 1.2,
          unit: "ng/dL",
          reference_range: "0.8-1.8",
          reference_min: 0.8,
          reference_max: 1.8,
          is_abnormal: false,
          direction: null,
          severity: null
        }
      ]
    },
    {
      section_id: "liver",
      section_name: "Liver Function",
      parameters: [
        {
          name: "ALT",
          code: "ALT",
          value: 45,
          unit: "U/L",
          reference_range: "7-56",
          reference_min: 7,
          reference_max: 56,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "AST",
          code: "AST",
          value: 32,
          unit: "U/L",
          reference_range: "10-40",
          reference_min: 10,
          reference_max: 40,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "Alkaline Phosphatase",
          code: "ALP",
          value: 75,
          unit: "U/L",
          reference_range: "44-147",
          reference_min: 44,
          reference_max: 147,
          is_abnormal: false,
          direction: null,
          severity: null
        }
      ]
    },
    {
      section_id: "kidney",
      section_name: "Kidney Function",
      parameters: [
        {
          name: "Creatinine",
          code: "CREA",
          value: 0.9,
          unit: "mg/dL",
          reference_range: "0.6-1.2",
          reference_min: 0.6,
          reference_max: 1.2,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "BUN",
          code: "BUN",
          value: 18,
          unit: "mg/dL",
          reference_range: "7-20",
          reference_min: 7,
          reference_max: 20,
          is_abnormal: false,
          direction: null,
          severity: null
        },
        {
          name: "eGFR",
          code: "eGFR",
          value: 85,
          unit: "mL/min/1.73m²",
          reference_range: ">60",
          reference_min: 60,
          reference_max: null,
          is_abnormal: false,
          direction: null,
          severity: null
        }
      ]
    }
  ],
  abnormal_parameters: [
    {
      name: "Hemoglobin",
      section: "Complete Blood Count",
      value: 13.2,
      unit: "g/dL",
      reference_range: "13.5-17.5",
      reference_min: 13.5,
      reference_max: 17.5,
      is_abnormal: true,
      direction: "low",
      severity: "mild",
      percent_deviation: -2.2,
      potential_causes: [
        "Iron deficiency",
        "Chronic disease",
        "Recent blood loss",
        "Poor nutrition"
      ]
    },
    {
      name: "Platelets",
      section: "Complete Blood Count",
      value: 140,
      unit: "thousand/µL",
      reference_range: "150-450",
      reference_min: 150,
      reference_max: 450,
      is_abnormal: true,
      direction: "low",
      severity: "mild",
      percent_deviation: -6.7,
      potential_causes: [
        "Medication side effect",
        "Viral infection",
        "Immune disorder",
        "Bone marrow condition"
      ]
    },
    {
      name: "Hematocrit",
      section: "Complete Blood Count",
      value: 39,
      unit: "%",
      reference_range: "41-50",
      reference_min: 41,
      reference_max: 50,
      is_abnormal: true,
      direction: "low",
      severity: "mild",
      percent_deviation: -4.9,
      potential_causes: [
        "Dehydration",
        "Anemia",
        "Recent blood loss",
        "Nutritional deficiency"
      ]
    },
    {
      name: "Total Cholesterol",
      section: "Lipid Panel",
      value: 210,
      unit: "mg/dL",
      reference_range: "<200",
      reference_min: null,
      reference_max: 200,
      is_abnormal: true,
      direction: "high",
      severity: "mild",
      percent_deviation: 5.0,
      potential_causes: [
        "Diet high in saturated fats",
        "Sedentary lifestyle",
        "Genetic factors",
        "Age-related changes"
      ]
    },
    {
      name: "LDL Cholesterol",
      section: "Lipid Panel",
      value: 145,
      unit: "mg/dL",
      reference_range: "<130",
      reference_min: null,
      reference_max: 130,
      is_abnormal: true,
      direction: "high",
      severity: "moderate",
      percent_deviation: 11.5,
      potential_causes: [
        "Diet high in saturated fats",
        "Sedentary lifestyle",
        "Genetic factors",
        "Metabolic syndrome"
      ]
    },
    {
      name: "Triglycerides",
      section: "Lipid Panel",
      value: 180,
      unit: "mg/dL",
      reference_range: "<150",
      reference_min: null,
      reference_max: 150,
      is_abnormal: true,
      direction: "high",
      severity: "moderate",
      percent_deviation: 20.0,
      potential_causes: [
        "Diet high in carbohydrates and sugars",
        "Alcohol consumption",
        "Obesity",
        "Diabetes or insulin resistance"
      ]
    },
    {
      name: "Fasting Glucose",
      section: "Glucose Metabolism",
      value: 105,
      unit: "mg/dL",
      reference_range: "70-99",
      reference_min: 70,
      reference_max: 99,
      is_abnormal: true,
      direction: "high",
      severity: "mild",
      percent_deviation: 6.1,
      potential_causes: [
        "Prediabetes",
        "Insulin resistance",
        "Metabolic syndrome",
        "Stress or illness"
      ]
    },
    {
      name: "HbA1c",
      section: "Glucose Metabolism",
      value: 5.8,
      unit: "%",
      reference_range: "<5.7",
      reference_min: null,
      reference_max: 5.7,
      is_abnormal: true,
      direction: "high",
      severity: "mild",
      percent_deviation: 1.8,
      potential_causes: [
        "Prediabetes",
        "Insulin resistance",
        "Metabolic syndrome",
        "Poor diet and lifestyle"
      ]
    }
  ],
  insights: [
    {
      condition: "Prediabetes",
      parameters: ["Fasting Glucose", "HbA1c"],
      description: "Your glucose levels are slightly elevated, indicating prediabetes. This is a condition where blood sugar levels are higher than normal but not high enough to be classified as diabetes. Without intervention, prediabetes can progress to type 2 diabetes.",
      severity: "moderate",
      recommendations: [
        {
          type: "dietary",
          text: "Reduce intake of refined carbohydrates and added sugars. Focus on whole grains, lean proteins, and high-fiber foods.",
          priority: "high"
        },
        {
          type: "lifestyle",
          text: "Aim for at least 150 minutes of moderate-intensity exercise per week, such as brisk walking.",
          priority: "high"
        },
        {
          type: "medical",
          text: "Consider follow-up testing in 3-6 months to monitor glucose levels.",
          priority: "medium"
        }
      ]
    },
    {
      condition: "Dyslipidemia",
      parameters: ["Total Cholesterol", "LDL Cholesterol", "Triglycerides"],
      description: "Your lipid panel shows elevated levels of total cholesterol, LDL (bad) cholesterol, and triglycerides. This pattern is known as dyslipidemia and increases your risk of cardiovascular disease.",
      severity: "moderate",
      recommendations: [
        {
          type: "dietary",
          text: "Reduce saturated fat intake by limiting red meat, full-fat dairy, and fried foods. Increase consumption of omega-3 rich foods like fatty fish.",
          priority: "high"
        },
        {
          type: "lifestyle",
          text: "Regular aerobic exercise can help improve cholesterol levels. Aim for 30 minutes daily.",
          priority: "high"
        },
        {
          type: "medical",
          text: "If levels don't improve with lifestyle changes within 3 months, medication may be considered.",
          priority: "medium"
        }
      ]
    },
    {
      condition: "Mild Anemia",
      parameters: ["Hemoglobin", "Hematocrit"],
      description: "Your hemoglobin and hematocrit levels are slightly below the reference range, suggesting mild anemia. This condition occurs when you don't have enough healthy red blood cells to carry adequate oxygen to your tissues.",
      severity: "mild",
      recommendations: [
        {
          type: "dietary",
          text: "Increase consumption of iron-rich foods such as lean red meat, beans, lentils, and leafy greens. Pair with vitamin C sources to enhance absorption.",
          priority: "high"
        },
        {
          type: "medical",
          text: "Consider iron supplementation after consulting with your healthcare provider.",
          priority: "medium"
        },
        {
          type: "medical",
          text: "Follow-up testing in 2-3 months to monitor improvement.",
          priority: "medium"
        }
      ]
    },
    {
      condition: "Mild Thrombocytopenia",
      parameters: ["Platelets"],
      description: "Your platelet count is slightly below the reference range, a condition known as mild thrombocytopenia. Platelets are essential for blood clotting.",
      severity: "mild",
      recommendations: [
        {
          type: "medical",
          text: "Monitor for unusual bruising or bleeding and report to your healthcare provider if noticed.",
          priority: "medium"
        },
        {
          type: "medical",
          text: "Follow-up testing in 1-2 months to check if levels have normalized.",
          priority: "medium"
        },
        {
          type: "lifestyle",
          text: "Avoid blood thinning medications like aspirin unless prescribed by your doctor.",
          priority: "high"
        }
      ]
    }
  ],
  recommended_specialists: [
    {
      specialty: "Endocrinologist",
      reason: "For further evaluation and management of prediabetes",
      urgency: "soon",
      timeframe: "Within 1-2 months"
    },
    {
      specialty: "Cardiologist",
      reason: "For assessment of cardiovascular risk due to dyslipidemia",
      urgency: "routine",
      timeframe: "Within 3 months"
    },
    {
      specialty: "Hematologist",
      reason: "If anemia and low platelet count persist after initial interventions",
      urgency: "routine",
      timeframe: "If no improvement in 3 months"
    }
  ],
  diet_recommendations: {
    foods_to_increase: [
      {
        name: "Leafy greens (spinach, kale)",
        reason: "Rich in iron, folate, and antioxidants to help with anemia",
        frequency: "Daily"
      },
      {
        name: "Fatty fish (salmon, mackerel)",
        reason: "High in omega-3 fatty acids to improve cholesterol profile",
        frequency: "2-3 times per week"
      },
      {
        name: "Beans and lentils",
        reason: "Good source of plant protein, fiber, and iron",
        frequency: "3-4 times per week"
      },
      {
        name: "Nuts and seeds",
        reason: "Contain healthy fats and fiber to help manage cholesterol",
        frequency: "Small handful daily"
      },
      {
        name: "Berries",
        reason: "High in antioxidants and low in sugar",
        frequency: "Daily"
      }
    ],
    foods_to_limit: [
      {
        name: "Refined carbohydrates",
        reason: "Can raise blood sugar and triglyceride levels",
        alternative: "Whole grains like brown rice, quinoa, and oats"
      },
      {
        name: "Red and processed meats",
        reason: "High in saturated fats that can raise LDL cholesterol",
        alternative: "Lean poultry, fish, or plant-based proteins"
      },
      {
        name: "Sugary beverages",
        reason: "Can worsen glucose control and triglyceride levels",
        alternative: "Water, unsweetened tea, or infused water"
      },
      {
        name: "Fried foods",
        reason: "High in trans fats that negatively impact cholesterol",
        alternative: "Baked, grilled, or air-fried options"
      },
      {
        name: "Alcohol",
        reason: "Can raise triglycerides and affect platelet function",
        alternative: "Limit to occasional consumption or non-alcoholic alternatives"
      }
    ]
  },
  processing: {
    status: "completed",
    ocr_confidence: 0.92,
    llm_model: "gpt-4",
    processing_time: 8.5
  },
  file: {
    original_filename: "LabResults_Oct2023.pdf",
    storage_path: "/storage/reports/user-1/LabResults_Oct2023.pdf",
    mime_type: "application/pdf",
    size: 1245678
  },
  created_at: "2023-10-15T15:00:00Z",
  updated_at: "2023-10-15T15:10:00Z"
};

// Create multiple mock reports with variations
export const mockReports: Report[] = [
  mockReport,
  {
    ...mockReport,
    id: "report-2",
    report_info: {
      ...mockReport.report_info,
      report_id: "BT-2023-07-20-002",
      report_date: "2023-07-20T10:15:00Z",
      processing_timestamp: "2023-07-20T15:30:00Z"
    },
    file: {
      ...mockReport.file,
      original_filename: "LabResults_Jul2023.pdf",
      storage_path: "/storage/reports/user-1/LabResults_Jul2023.pdf",
    },
    created_at: "2023-07-20T16:00:00Z",
    updated_at: "2023-07-20T16:10:00Z"
  },
  {
    ...mockReport,
    id: "report-3",
    report_info: {
      ...mockReport.report_info,
      report_id: "BT-2023-04-05-003",
      report_date: "2023-04-05T08:45:00Z",
      processing_timestamp: "2023-04-05T14:00:00Z"
    },
    file: {
      ...mockReport.file,
      original_filename: "LabResults_Apr2023.pdf",
      storage_path: "/storage/reports/user-1/LabResults_Apr2023.pdf",
    },
    created_at: "2023-04-05T14:30:00Z",
    updated_at: "2023-04-05T14:40:00Z"
  },
  {
    ...mockReport,
    id: "report-4",
    report_info: {
      ...mockReport.report_info,
      report_id: "BT-2023-01-10-004",
      report_date: "2023-01-10T09:00:00Z",
      processing_timestamp: "2023-01-10T13:45:00Z"
    },
    file: {
      ...mockReport.file,
      original_filename: "LabResults_Jan2023.pdf",
      storage_path: "/storage/reports/user-1/LabResults_Jan2023.pdf",
    },
    created_at: "2023-01-10T14:15:00Z",
    updated_at: "2023-01-10T14:25:00Z"
  },
  {
    ...mockReport,
    id: "report-5",
    patient_info: {
      ...mockReport.patient_info,
      name: "Jane Smith",
      patient_id: "P-20056",
      age: 35,
      gender: "Female",
      height: 165,
      weight: 62,
      blood_group: "A+"
    },
    report_info: {
      ...mockReport.report_info,
      report_id: "BT-2023-09-28-005",
      report_date: "2023-09-28T11:30:00Z",
      processing_timestamp: "2023-09-28T16:15:00Z"
    },
    file: {
      ...mockReport.file,
      original_filename: "LabResults_Smith_Sep2023.pdf",
      storage_path: "/storage/reports/user-2/LabResults_Smith_Sep2023.pdf",
    },
    created_at: "2023-09-28T16:45:00Z",
    updated_at: "2023-09-28T16:55:00Z"
  }
];
