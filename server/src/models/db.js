import mongoose from "mongoose";

export default async function ConnectDB(){
   try{
        mongoose.connect("mongodb://localhost:27017/movies")
        .then(console.log(`Mongo Running❤`));
   }catch(err){
    console.error(err);
   }
};
