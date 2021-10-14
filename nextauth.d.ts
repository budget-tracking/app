type NextAuthSessionData<T> = {
  user: T
  expires: Date
} | null

type NextAuthUnauthorizedResponse = {
  error: string
  code: number
}
