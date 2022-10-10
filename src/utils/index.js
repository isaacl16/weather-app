export const tempRange = (temp_min, temp_max) => {
    return temp_min + "℃ - " + temp_max + "℃"
}

export const formatTime = (dateTime, timeZone) => {
    const epochTime = dateTime * 1000 + timeZone * 1000
    const time = new Date(epochTime)
    return time.toUTCString()
}
