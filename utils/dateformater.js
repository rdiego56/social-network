const dayjs = require("dayjs")

module.exports = (date) => {
    const dateFormated = dayjs(date).format("MMMM D, YYYY")

    return dateFormated
}