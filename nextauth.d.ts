type NextAuthSessionData<T> = {
  user: T
  expires: Date
} | null

type NextAuthUnauthorizedResponse = {
  error: any
  code: number
  data?: any
}
