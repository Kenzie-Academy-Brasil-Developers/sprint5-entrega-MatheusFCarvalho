import { Router } from "express";
import  createUserController  from "../controllers/createUserController";
import deleteUserController from "../controllers/deleteUserController";
import getAllUsersController from "../controllers/getAllUsersController";
import getOneUserController from "../controllers/getOneUserController";
import patchUserController from "../controllers/patchUserController";
import createUserMiddle from "../middlewares/createUserMiddle";
import verifyIdMiddle from "../middlewares/verifyIdMiddle";

const userRouter = Router()

userRouter.post('',createUserMiddle , createUserController)
userRouter.get('', getAllUsersController)
userRouter.get('/:id', verifyIdMiddle, getOneUserController)
userRouter.delete('/:id', verifyIdMiddle, deleteUserController)
userRouter.patch('/:id', verifyIdMiddle, patchUserController)

export default userRouter