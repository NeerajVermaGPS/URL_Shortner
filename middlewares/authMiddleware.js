const { getUser } = require('../services/auth')

const validateLoggedUser = (req, res, next) => {
    const authenticationCookie = req.cookies.uid
    let user = null

    if(!authenticationCookie) return next();

    user = getUser(authenticationCookie)
    req.user = user
    
    next()
}

const restrictAccessTo = (roles = []) => {
    return (req, res, next) => {
        const {user} = req
        if(!user){
            const returnTo = req.originalUrl; 
            return res.redirect(`/login?returnTo=${encodeURIComponent(returnTo)}`);
        }
        
        if(!roles.includes(user.role)){
            return res.status(401).json({error: [`Sorry! You don't have access to this page!`]})
        }
        next()
    }
}

module.exports = {
    validateLoggedUser,
    restrictAccessTo
}