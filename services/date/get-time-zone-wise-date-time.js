export const getTimeZoneWiseDateTime = (dateTime, timeZone = 'America/New_York') => {
    return new Date(new Date(dateTime).toLocaleString('en-US', { timeZone }))
}