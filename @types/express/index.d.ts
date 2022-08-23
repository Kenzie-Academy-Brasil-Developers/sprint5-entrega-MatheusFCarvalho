import * as express from 'express'
import { IUser } from '../../src/interfaces/IUser'

declare global{
    namespace Express{
        interface Request{
                id: string
                user:IUser
        }
    }
}