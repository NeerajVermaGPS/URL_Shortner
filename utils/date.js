const getDateAndTime = () => {
    let today = "Date: " + new Date().toLocaleDateString() + " and Time: " + new Date().toLocaleTimeString();
    return today;
}

const getDate = () => {
    return new Date().toLocaleDateString()
}

const getTime = () => {
    return new Date().toLocaleTimeString()
}

module.exports = {
    getDateAndTime
}