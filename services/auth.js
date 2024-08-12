const sessionToUser = new Map()

const setUser = (id, user) => {sessionToUser.set(id, user)}
const getUser = (id) => sessionToUser.get(id)

module.exports = {
    setUser,
    getUser
}