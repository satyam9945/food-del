import mongoose from "mongoose";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected'));
        await mongoose.connect("mongodb+srv://satyamgupta:princegupta123@cluster0.i2gco28.mongodb.net/food-del?appName=Cluster0")
    } catch (error) {
        console.log(error);
    }
}