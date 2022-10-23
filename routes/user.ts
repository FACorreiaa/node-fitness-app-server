import express, {Express} from 'express'
import {getAllUsers}  from '../controllers/user'
import { PrismaClient } from '@prisma/client'


export const getAllUsersRoute = (app: Express = express()) => app.route("/api/v1/users").get(getAllUsers)
