const { users: usersData, posts: postsData } = require('./data')
const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = usersData.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = postsData.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}

module.exports = {
  getUserById,
  getPostsForUser
}


