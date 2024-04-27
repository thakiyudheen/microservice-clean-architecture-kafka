import mongoose from 'mongoose'
import dotenv from "dotenv";

export default async()=>{
    try{
        
        if (!process.env.MONGO_URI) {
            throw new Error("MongoDB connection string not provided in environment variables");
        }
       mongoose.connect(process.env.MONGO_URI)
       console.log(
      `  ___--=--------___
        /. \___\____   _, \_      /-\
       /. .  _______     __/=====@
       \----/  |  / \______/      \-/
   _/         _/ o \
  / |    o   /  ___ \
 / /    o\\ |  / O \ /|      __-_
|o|     o\\\   |  \ \ /__--o/o___-_
| |      \\\-_  \____  ----  o___-
|o|       \_ \     /\______-o\_-
| \       _\ \  _/ / |
\o \_   _/      __/ /
 \   \-/   _       /|_
  \_      / |   - \  |\
    \____/  \ | /  \   |\
            | o |   | \ |
            | | |    \ | \
           / | /      \ \ \
         /|  \o|\--\  /  o |\--\
         \----------' \---------'

         MongoDB connected successfully!
`
        
       )
    }catch(err:any){
    
        console.error(err.message);
        process.exit(1)
    }
}
