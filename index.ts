import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import helmet from "helmet";
import bodyParser from 'body-parser';
import {getAllUsersRoute} from './routes/user'
import {createNewUserRoute} from './routes/user-login'
dotenv.config();

const app: Express = express();

if (!process.env.PORT) {
  process.exit(1);
}


const PORT: number = parseInt(process.env.PORT as string, 10);
const host = process.env.HOST;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


createNewUserRoute(app)
getAllUsersRoute(app)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://${host}:${PORT}`);
});
