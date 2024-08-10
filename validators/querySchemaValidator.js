const querySchemaValidator = {
    id: {
        isString: true,
        isLength: {
            options: {
                min: 8,
                max: 8
            }
        },
        errorMessage: "Invalid URL!"
    }
}

module.exports = querySchemaValidator