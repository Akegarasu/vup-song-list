const include = (obj1, obj2) => {
    return obj1?.toString().toLowerCase().includes(obj2.toLowerCase())
}

module.exports = { include };