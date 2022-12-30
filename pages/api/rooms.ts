import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../libs/dbConnect";
import { Room } from "../../models/rooms";
import { userSchema } from "../../models/rooms";



export default async function handler (req:NextApiRequest,res:NextApiResponse){
  const {method} = req;

  await dbConnect();

  switch(method){
    case "GET":
      try{
        const rooms = await Room.find({});
        res.status(200).json({success:true,data:rooms})
      }
      catch(err){
        res.status(400).json({error:err});
      }
      break;
    
    case "POST":
      try{
        const user = req.body;
        const newUser = await new Room(user);
        if(newUser){
          newUser.save();
        }
        res.status(200).json({data:newUser});
      }
      catch(err){

        res.status(400).json({message:err})
      }
      break;

    default:
      res.status(400).json({success:false})
      break;


  }
}