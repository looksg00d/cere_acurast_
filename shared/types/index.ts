export interface ConversionResult {
    success: boolean;
    originalUrl?: string;
    processedUrl?: string;
    error?: string;
    id?: string;
  }
  
  export interface FileMetadata {
    originalName: string;
    contentType: string;
  }