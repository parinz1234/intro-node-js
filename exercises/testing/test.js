const { fixId, findUser, deleteUser } = require('./users')
// write some tests
describe('users', () => {
  describe('fixId', () => {
    test('fixId should return integer', () => {
      expect(fixId('200')).toBe(200)
    })
  })
  describe('findUser', () => {
    test('finds user by id if user is there', async () => {
      const user = await findUser(1)
      expect(user.id).toBe(1)
    })
  })
  describe('deleteUser', () => {
    test('delete user with id if user is therer', async () => {
      expect.assertions(2)

      const user = await findUser(1)
      const deletedUser = await deleteUser(user.id)
      expect(deletedUser.id).toBe(1)
      try {
        await findUser(1)
      } catch (e) {
        expect(e).toBeTruthy()
      }
    })
  })
})
