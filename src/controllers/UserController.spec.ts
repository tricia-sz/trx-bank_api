
// import { UserController } from "../controllers/UserController.js"
// import type { UserService } from "../services/UseService.js"


// describe('UserController', () => {
//   const mockUserService: Partial<UserService> = {

//     createUser: jest.fn()
//   }

//   const userController = new UserController(mockUserService as UserService)

//   it('Deve adicionar um novo usuário', () => {
//     const mockRequest = {
//       body: {
//         name: 'Tricia',
//         email: 'tricia@test.com'
//       }
//     } as Request
//     const mockResponse = mockResponse()
//     userController.createUser(mockRequest, mockResponse)
//     expect(mockResponse.state.status).toBe(201)
//     expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado'})
//   })
// })