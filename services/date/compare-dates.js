export const compareDates = (today = '', newDay = '')=>{
    const tempTodayDate = new Date(today);
    const tempNewDate = new Date(newDay);
    const todayDate = new Date(`${tempTodayDate.getFullYear()}-${tempTodayDate.getMonth() + 1}-${tempTodayDate.getDate()}`);
    const newDate = new Date(`${tempNewDate.getFullYear()}-${tempNewDate.getMonth() + 1}-${tempNewDate.getDate()}`);
    return {
        todayTime: todayDate.getTime(),
        newTime: newDate.getTime()
    }
}