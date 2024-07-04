document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const count = new Date();
        const utcTime = count.toUTCString();
        const dayOfWeek = count.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('currentTimeUTC').textContent = utcTime;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
