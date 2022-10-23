import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {getAllUsersRoute} from './routes/user'
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const host = process.env.HOST;

getAllUsersRoute(app)
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://${host}:${port}`);
});
