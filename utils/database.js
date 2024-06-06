import mongoose from "mongoose";
let isconnected=false;
export const connecttoDB= async() =>{
    mongoose.set("strictQuery",true)
    if(isconnected){
        console.log('MongoDB is Connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"gazebo_bites",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isconnected=true;
        console.log('MongoDB is Connected')
    }catch(error){
        console.log(error);
    }
}