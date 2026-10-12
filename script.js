// Live IST Clock function
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;

    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const formatter = new Intl.DateTimeFormat([], options);
    clockElement.textContent = formatter.format(new Date());
}

// Run immediately and update every second
updateClock();
setInterval(updateClock, 1000);