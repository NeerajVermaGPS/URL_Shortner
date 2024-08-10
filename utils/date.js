const getDate = () => {
    let today = "Date: " + new Date().toLocaleDateString() + " and Time: " + new Date().toLocaleTimeString();
    return today;
}

module.exports = {
    getDate
}