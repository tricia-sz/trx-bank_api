import type { Request, Response } from "express";
import { UserService } from "../services/UseService.js";

const userService = new UserService();

export class UserController {
  userService: UserService

  constructor(
    userService = new UserService()
  ){
      this.userService = userService
  }



  createUser = (request: Request, response: Response) => {
    const user = request.body

    if(!user.name) {
      return response.status(400).json({message: "Usuario nao encontrado"})
    }

    this.userService.createUser(user.name, user.email) 
      return response.status(201).json({message: "Usuario criado com sucesso"})
    
  };

  getAllUsers = (_request: Request, response: Response) => {
    const users = this.userService.getAllUsers();

    return response.status(200).json(users);
  };
}