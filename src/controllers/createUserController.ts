import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUser, IUserReq } from "../interfaces/IUser";
import  createUserService  from "../services/createUserService";

const createUserController = async (req:Request, res:Response) => {

    const userReq:IUserReq = req.body
    const user:IUser = await createUserService(userReq)

    return res.status(201).json(instanceToPlain(user))
}

export default createUserController