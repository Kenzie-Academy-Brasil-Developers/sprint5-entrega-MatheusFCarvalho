import { NextFunction, Request, Response } from "express"
import { userRepository } from "../userRepository/userRepository"
import { hash } from 'bcryptjs'

const createUserMiddle = async (req:Request, res:Response, next:NextFunction) =>{      
        const {email, password, name, age} = req.body
        const users = await userRepository.find()
        let isDoubledEmail = false
        users.forEach(user => {
            if(user.email === email) { isDoubledEmail = true }
        });
        if(!password || !name || !email || !age){
            return res.status(400).json({error:"error",message:'Content required not found.'})
        }
        if(isDoubledEmail){
            return res.status(400).json({
                message: 'Email already exists.'
            })
        }
        
        const hashedPassword = await hash(password, 10)
        req.body.password = hashedPassword
        next()
}

export default createUserMiddle