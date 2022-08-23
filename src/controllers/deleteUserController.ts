import { Request, Response } from "express"
import deleteUserService from "../services/deleteUserService"

const deleteUserController = async (req:Request, res:Response) => {
    const id = req.id
    await deleteUserService(id)
    return res.status(200).json({message: "User deleted with sucess!"})
}

export default deleteUserController