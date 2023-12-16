import type, {NextAuthOptions}    from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import prisma from "@/lib/prismadb"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const  authoptions :NextAuthOptions = {
          adapter:PrismaAdapter(prisma),

          providers:[
           

            CredentialsProvider({
                  name:"credential",
                  credentials:{
                    email:{label:'Email',type:"email",placeholder:"Email"},
                    password:{label:'Password',type:"password",placeholder:"Password"},
                  },
                  async authorize(credentials){
                     
                    if(!credentials?.email || !credentials.password){
                        return null
                    }

                    const user = await prisma.user.findUnique({
                        where:{
                            email:credentials?.email as string 
                        }
                    })

                    if(!user || !user.hashedPassword){
                        return null
                    }

                    const passwordCheck = await bcrypt.compare(user?.hashedPassword, credentials?.password) 
                    if(!passwordCheck){
                        return null
                    }

                    return user
                  }
            })
          ],
          callbacks:{
            session:async({session, token, user})=>{
                if(session?.user){
                  // console.log(session);
                  
                  session.user.email = token.email
                }
                return session;
              },
              jwt: async({user, token})=>{
                if(user){
                  token.id = user.id
      
                }
                // console.log(token);
                return token;
               
                
              }
      
          },
          pages:{
            signIn:"/sign"
          },


          session:{
            strategy:"jwt",
            maxAge: 30 * 24 * 60 * 60,
            updateAge: 24 * 60 * 60,
          },
          secret: process.env.NEXTAUTH_SECRET,
          debug: process.env.NODE_ENV === "development"

} 