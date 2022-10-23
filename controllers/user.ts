import express, { Request, Response } from 'express'
import prisma from '../config/prisma'

const app = express()
app.use(express.json())

export const getAllUsers = async (req: Request, res: Response)=> {
  try {
    const users = await prisma.user.findMany()

    res.json(users)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
}