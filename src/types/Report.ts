export interface Report {
  id: string;
  report_info: ReportInfo;
  patient_info: PatientInfo;
  test_sections: TestSection[];
  abnormal_parameters: AbnormalParameter[];
  insights: Insight[];
  recommended_specialists: SpecialistRecommendation[];
  diet_recommendations: DietRecommendations;
  processing: ProcessingInfo;
  file: FileInfo;
  created_at: string;
  updated_at: string;
}

export interface ReportInfo {
  report_id: string;
  report_type: string;
  report_date: string;
  lab_name: string;
  processing_timestamp: string;
}

export interface PatientInfo {
  name: string;
  patient_id: string;
  age: number;
  gender: string;
  height?: number;
  weight?: number;
  blood_group?: string;
}

export interface TestSection {
  section_id: string;
  section_name: string;
  parameters: Parameter[];
}

export interface Parameter {
  name: string;
  code?: string;
  value: number;
  unit: string;
  reference_range: string;
  reference_min: number | null;
  reference_max: number | null;
  is_abnormal: boolean;
  direction: 'high' | 'low' | null;
  severity: 'mild' | 'moderate' | 'severe' | null;
}

export interface AbnormalParameter extends Parameter {
  section: string;
  percent_deviation: number;
  potential_causes: string[];
}

export interface Insight {
  condition: string;
  parameters: string[];
  description: string;
  severity: string;
  recommendations: Recommendation[];
}

export interface Recommendation {
  type: 'dietary' | 'lifestyle' | 'medical';
  text: string;
  priority: 'high' | 'medium' | 'low';
}

export interface SpecialistRecommendation {
  specialty: string;
  reason: string;
  urgency: 'urgent' | 'soon' | 'routine';
  timeframe: string;
}

export interface DietRecommendations {
  foods_to_increase: FoodRecommendation[];
  foods_to_limit: FoodLimitation[];
}

export interface FoodRecommendation {
  name: string;
  reason: string;
  frequency: string;
}

export interface FoodLimitation {
  name: string;
  reason: string;
  alternative: string;
}

export interface ProcessingInfo {
  status: 'pending' | 'processing' | 'completed' | 'failed';
  error?: string;
  ocr_confidence?: number;
  llm_model?: string;
  processing_time?: number;
}

export interface FileInfo {
  original_filename: string;
  storage_path: string;
  mime_type: string;
  size: number;
}
