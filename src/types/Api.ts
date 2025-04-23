export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface UploadResponse {
  report_id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  message: string;
}

export interface UploadProgressEvent {
  loaded: number;
  total: number;
  percentage: number;
}

export interface ApiError {
  status: number;
  message: string;
  details?: string;
}
