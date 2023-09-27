// availability.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');

    if (selectedDate) {
        const selectedDateElement = document.getElementById('selected-date');
        selectedDateElement.textContent = selectedDate;
    }
});