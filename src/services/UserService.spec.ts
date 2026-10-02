
import UseService = require("./UseService")


describe('UserService', () => {
  const userService =  new UseService.UserService()

  it('Deve adicionar um novo usuário', () => {
    const mockConsole = jest.spyOn(global.console, 'log')
    userService.createUser('Tricia', 'tricia@teste.com');
    expect(mockConsole).toHaveBeenCalled()
  })
})