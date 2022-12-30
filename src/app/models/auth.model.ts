
export interface Login
{
  message: string,
  data: {
      id: number,
      email: string,
      username: string,
      isAdmin: boolean
  },
  tokens: {
      access: string,
      refresh: string
  }
}
