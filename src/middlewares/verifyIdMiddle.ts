import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"

const verifyIdMiddle = async (req:Request, res:Response, next:NextFunction) =>{

    const userRepository = AppDataSource.getRepository(User)
    const id = req.params.id
    const user = await userRepository.findOne({where: {id:id}})
    if (!user) {
        return res.status(404).json({
            message: 'Id not found!'
        })
    }
    req.id = id
    req.user = user
    next()
}

export default verifyIdMiddle