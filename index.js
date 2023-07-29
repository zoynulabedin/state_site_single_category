clearLocalStorageExcept('siteMeta');
const updateSiteMeta = () => {
    let data = { ...localStorage };
    let meta = JSON.parse(data.siteMeta);
    document.title = `${(data?.currentState || data?.currentCity) || ''} ${meta.business}`;
    document.querySelector('#title__site').textContent = meta.business;
    document.querySelector('#qoute__title').textContent = `${(data?.currentState || data?.currentCity) || ''} ` + meta.business + " Qoute";
}
function convertString(input) {
    // Replace spaces with hyphens
    let hyphenatedString = input.replace(/\s+/g, '-');

    // Remove special characters using regex
    let cleanedString = hyphenatedString.replace(/[^\w-]/g, '');

    return cleanedString.toLowerCase();
}

const bindLinksWithEvent = () => {
    let refLinks = [...document.querySelectorAll('.box-link')];
    refLinks.forEach(e => e.addEventListener('click', clickHandler))
}
const clickHandler = (e) => {
    e.preventDefault();
    window.location = e.target.href;
}

function clearLocalStorageExcept(keyToKeep) {
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key !== keyToKeep) {
            localStorage.removeItem(key);
        }
    }
}

const setLocalForTitle = (key) => {
    const url = new URL(window.location.href);
    const lastPart = url.pathname.split('/').filter(part => part !== '').pop();
    localStorage.setItem(key, lastPart.replace(/-/g, ' '));

    return lastPart;
}
