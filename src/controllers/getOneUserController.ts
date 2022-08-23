import { Request, Response } from "express"
import { IUser } from "../interfaces/IUser"
import getOneUserService from "../services/getOneUserService"

const getOneUserController = async (req:Request, res:Response) => {
    const id = req.id
    const user = await getOneUserService(id)
    return res.json(user)
}

export default getOneUserController