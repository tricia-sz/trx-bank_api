import { UserService, type User } from './UseService.js'


describe('UserService', () => {
 const mockDb: User[] = []
 const useService = new UserService(mockDb)

  it('Deve adicionar um novo usuário', () => {
    const mockConsole = jest.spyOn(global.console, 'log')
    useService.createUser('Tricia', 'tricia@teste.com');
    expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
  })
})