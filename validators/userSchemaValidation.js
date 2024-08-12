const userSchemaValidation = {
    username: {
        isString: {
            errorMessage: "Username must be a valid string!"
        },
        notEmpty: {
            errorMessage: "Username must not be empty!"
        }
    },
    email: {
        isEmail: {
            errorMessage: "Email must be a valid mail!"
        },
        notEmpty: {
            errorMessage: "Email must not be empty!"
        }
    },
    password: {
        isString: {
            errorMessage: "Password must be a valid string!"
        },
        notEmpty: {
            errorMessage: "Password must not be empty!"
        },
        isLength: {
            options: {
                min: 7,
                max: 36
            },
            errorMessage: "Password length must be between 7-36!"
        }
    }
}

const userLogInSchemaValidation = {
    username: {
        isString: {
            errorMessage: "Username must be a valid string!"
        },
        notEmpty: {
            errorMessage: "Username must not be empty!"
        }
    },
    password: {
        isString: {
            errorMessage: "Password must be a valid string!"
        },
        notEmpty: {
            errorMessage: "Password must not be empty!"
        },
        isLength: {
            options: {
                min: 7,
                max: 36
            },
            errorMessage: "Password length must be between 7-36!"
        }
    }
}

module.exports = {userSchemaValidation, userLogInSchemaValidation}