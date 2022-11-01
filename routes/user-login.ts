import express, {Express} from 'express'
import {createNewUser}  from '../controllers/user-login'


export const createNewUserRoute = (app: Express = express()) => app.route("/api/v1/user/login/create-user").post(createNewUser)
