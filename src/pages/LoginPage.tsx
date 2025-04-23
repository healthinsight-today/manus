import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ScreenReaderText from '../components/accessibility/ScreenReaderText';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // In a real app, this would call an authentication API
      // For demo purposes, we'll simulate a successful login with any credentials
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (login) {
        login({
          id: 'user-001',
          name: 'John Doe',
          email: email,
          role: 'user',
          preferences: {
            notifications: true,
            dataSharing: false,
            units: 'metric'
          }
        });
      }
      
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Health Insight Today
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to access your health insights
          </p>
        </div>
        
        <Card>
          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-error-light text-error-dark rounded-md" role="alert">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input w-full"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input w-full"
                  placeholder="••••••••"
                  aria-required="true"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-primary-dark">
                    Forgot your password?
                  </a>
                </div>
              </div>
              
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <ScreenReaderText>Loading</ScreenReaderText>
                      Signing in...
                    </>
                  ) : (
                    'Sign in'
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      // In a real app, this would trigger OAuth flow
                      setIsLoading(true);
                      setTimeout(() => {
                        if (login) {
                          login({
                            id: 'user-002',
                            name: 'John Doe',
                            email: 'john.doe@example.com',
                            role: 'user',
                            preferences: {
                              notifications: true,
                              dataSharing: false,
                              units: 'metric'
                            }
                          });
                        }
                        navigate('/');
                      }, 1000);
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/>
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/>
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/>
                      <path d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z" fill="#34A853"/>
                    </svg>
                    Google
                  </Button>
                </div>
                
                <div>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      // In a real app, this would trigger OAuth flow
                      setIsLoading(true);
                      setTimeout(() => {
                        if (login) {
                          login({
                            id: 'user-003',
                            name: 'John Doe',
                            email: 'john.doe@example.com',
                            role: 'user',
                            preferences: {
                              notifications: true,
                              dataSharing: false,
                              units: 'metric'
                            }
                          });
                        }
                        navigate('/');
                      }, 1000);
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="#3B5998"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-primary hover:text-primary-dark">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </Card>
        
        <div className="text-center text-xs text-neutral-500 dark:text-neutral-400">
          <p>For demo purposes, you can sign in with any email and password</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
