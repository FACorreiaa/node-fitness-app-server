import express, { Request, Response } from 'express'
import prisma from '../config/prisma'
import { Prisma } from '@prisma/client'

const app = express()
app.use(express.json())

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { email, nickname, password, first_name, last_name, gender } = req.body
    debugger
    let newUser: Prisma.UserCreateInput
    newUser = {
      first_name,
      last_name,
      nickname,
      email,
      password,
      gender
    }
    const createUser = await prisma.user.create({
      data: newUser
    })
    await prisma.$disconnect()

    res.json({
      success: true,
      payload: createUser,
    })
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
    await prisma.$disconnect()
    process.exit(1)
  }
}