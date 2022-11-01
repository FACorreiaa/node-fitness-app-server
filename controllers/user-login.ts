import express, { Request, Response } from 'express'
import prisma from '../config/prisma'
import { Prisma } from '@prisma/client'

const app = express()
app.use(express.json())

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { email, nickname, password, firstname, lastname, gender } = req.body
    debugger
    console.log('firstname', firstname)
    console.log('req', req)
    let newUser: Prisma.UserCreateInput
    newUser = {
      first_name: firstname,
      last_name: lastname,
      nickname: nickname,
      email: email,
      password: password,
      gender: gender,
      profile: {},
      mealplan: {},
      exercise_plan: {},
      userBioData: {}


    }
    console.log('newUser', newUser)
    const createUser = await prisma.user.create({
      data: newUser
    })
    await prisma.$disconnect()

    res.json({
      success: true,
      payload: createUser,
    })
  } catch (error) {
    console.log('errrrrrr', error)
    res.status(500).json({
      message: "Something went wrong",
    })
    await prisma.$disconnect()
    process.exit(1)
  }
}