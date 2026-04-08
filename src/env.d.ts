declare namespace NodeJS {
  interface ProcessEnv {
    // Required
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
    
    // Build-time
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_VERCEL_ENV?: 'production' | 'preview' | 'development';
    
    // Deployment
    NEXT_PUBLIC_SITE_URL?: string;
    NEXT_PUBLIC_VERCEL_URL?: string;
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?: string;
    
    // Analytics
    NEXT_PUBLIC_POSTHOG_KEY?: string;
    NEXT_PUBLIC_POSTHOG_HOST?: string;
    
    // Feature flags
    NEXT_PUBLIC_ENABLE_EXPERIMENTAL_FEATURES?: string;
  }
}
