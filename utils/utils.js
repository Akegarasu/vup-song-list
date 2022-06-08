import { config } from "../config/constants";

const include = (obj1, obj2) => {
    return obj1?.toString().toLowerCase().includes(obj2.toLowerCase())
}

const getCursor = () => {
    return config.Cursor ? 'url("./assets/cursor/pointer.png"), pointer' : ''
}

module.exports = { include, getCursor };