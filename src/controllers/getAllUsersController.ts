import { Request, Response } from "express";
import getAllUsersService from "../services/getAllUsersService";

const getAllUsersController = async (req:Request, res:Response) => {
    const users = await getAllUsersService()
    return res.json(users)
}
export default getAllUsersController