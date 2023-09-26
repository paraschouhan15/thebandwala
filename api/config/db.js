import mongoose from 'mongoose'

const connectDB=async()=>{
try{
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected to mogodb Database ${conn.connection.host}`.bgYellow.white)

}catch(error){
console.log(`Error in mongodb${error}`.bgRed.white)
}
}

export default connectDB;