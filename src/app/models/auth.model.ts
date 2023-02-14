
export interface Login
{
  message: string,
  body: {
      id: number,
      email: string,
      username: string,
      isAdmin: boolean
  },
  tokens: {
      access_token: string,
      refresh_token: string
  }
}
