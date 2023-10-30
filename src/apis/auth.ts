import { request } from '@/utils/request'

export const signIn = async (email, password) => {
  return request.post(`/sign-in`, {
    email,
    password
  })
}
