const { getUser } = require('../services/auth')

const validateLoggedUser = (req, res, next) => {
    const userCookie = req.cookies.uid
    if(!userCookie) {
        const returnTo = req.originalUrl; 
        return res.redirect(`/login?returnTo=${encodeURIComponent(returnTo)}`);
    }
    const user = getUser(userCookie)
    if(!user){
        const returnTo = req.originalUrl; 
        return res.redirect(`/login?returnTo=${encodeURIComponent(returnTo)}`);
    }
    
    req.user = user
    
    next()
}

module.exports = {
    validateLoggedUser
}