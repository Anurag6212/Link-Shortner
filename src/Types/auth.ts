export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  loginMode: string;
}
