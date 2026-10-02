import express, { type Request, type Response } from "express";
import { router } from "./routes/routes.js";
const server = express();

server.use(express.json())

server.use(router)


server.get('/', (request: Request, response: Response) => {
  return response.status(200).json({message: 'TRX Bank API'})

})


server.listen(3333, () => console.log('🔥 Server is running! in http://localhost:3333 🚀'))