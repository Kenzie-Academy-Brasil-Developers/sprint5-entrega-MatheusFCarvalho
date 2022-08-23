import { Request, Response } from "express"
import patchUserService from "../services/patchUserService"

const patchUserController = async (req:Request, res:Response) => {
    const id = req.id
    const oldUser = req.user
    const data = req.body
    const response = await patchUserService(id, oldUser, data)
    
    return res.status(200).json(response)
}

export default patchUserController