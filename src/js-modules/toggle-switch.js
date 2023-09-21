const toggleSwitchElem = document.querySelector('#switch');

const digitsMonthly = document.querySelectorAll('.monthly');
const digitsAnnually = document.querySelectorAll('.annually');

toggleSwitchElem.addEventListener('change', () => {
    if (toggleSwitchElem.checked) {
        digitsAnnually.forEach(item =>  item.style.display = 'block');
        digitsMonthly.forEach(item => item.style.display = 'none');
    } else {
        digitsAnnually.forEach(item => item.style.display = 'none');
        digitsMonthly.forEach(item => item.style.display = 'block');
    }
});