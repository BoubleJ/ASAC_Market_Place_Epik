import { type NextRequest } from 'next/server'

export default function isAuthentication(req: NextRequest) {
  return req.cookies.has('AUTH_TOKEN') ? true : false
}
