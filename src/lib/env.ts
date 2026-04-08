export function getRequiredEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Environment variable ${name} is required but was not found`)
  }
  return value
}

export function getOptionalEnvVar(name: string): string | undefined {
  return process.env[name]
}

export const ENV = {
  supabase: {
    url: getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
    anonKey: getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    serviceRoleKey: getRequiredEnvVar('SUPABASE_SERVICE_ROLE_KEY')
  },
  nodeEnv: getRequiredEnvVar('NODE_ENV'),
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  siteUrl: getOptionalEnvVar('NEXT_PUBLIC_SITE_URL')
}
