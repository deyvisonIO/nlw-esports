export function convertMinutesToHourString(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const hoursMinutes = minutes % 60;
    const hourString = `${String(hours).padStart(2, '0')}:${String(hoursMinutes).padStart(2, '0')}`;
    
    return hourString; 
}