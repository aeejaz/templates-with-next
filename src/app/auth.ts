import NextAuth from "next-auth"
import Threads from "next-auth/providers/threads"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Threads],
})