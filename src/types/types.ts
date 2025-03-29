export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  
  export interface AuthResponse {
    token: string;
  }
  
  export interface UsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
  }
  
  export interface UserFormData {
    first_name: string;
    last_name: string;
    email: string;
  }