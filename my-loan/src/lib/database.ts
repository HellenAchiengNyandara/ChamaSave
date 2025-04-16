import moongoose from "mongoose";


const isConnected =false
export const connectToDB=async () => {
    moongoose.set('strictQuery',true)
    if (isConnected){
        console.log("mongo is already connected")
        return
    }
    try{
        await moongoose.connect('mongodb://localhost:27017/myLoan')
        console.log("MongoDB connected")

    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(e){
        console.log("MongoDB connection failed")
    }
    
}