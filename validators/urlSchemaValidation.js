const urlSchemaValidation = {
    redirectURL: {
        isString: {
            errorMessage: "URL must be a valid string!"
        },
        notEmpty: {
            errorMessage: "URL must not be empty!"
        },
        isURL: {
            errorMessage: "URL must be a valid URL!"
        }
    }
}

module.exports = urlSchemaValidation