export const tempRange = (temp_min, temp_max) => {
    return temp_min + "℃ - " + temp_max + "℃"
}

export const formatTime = (dateTime, timeZone) => {
    const epochTime = dateTime * 1000 + timeZone * 1000
    const newDateTime = new Date(epochTime)
    return `${newDateTime.toUTCString()}+${timeZone / 3600}`
}

export const getCurrentTime = () => {
    const date = new Date()
    const hour = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`
    const minute = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
    const second = date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds()}`
    return `${hour}:${minute}:${second}`
}
