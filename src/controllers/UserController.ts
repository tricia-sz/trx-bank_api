import type { Request, Response } from "express";
import { UserService } from "../services/UseService.js";

const userService = new UserService();

export class UserController {
  createUser = (request: Request, response: Response) => {
    const { name, email } = request.body;

    const user = userService.createUser(name, email);

    return response.status(201).json(user);
  };

  getAllUsers = (_request: Request, response: Response) => {
    const users = userService.getAllUsers();

    return response.status(200).json(users);
  };
}