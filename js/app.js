const toggleBtn = document.getElementById("toggle-btn");
const date = document.getElementById('date');
const currentYear = new Date().getFullYear();

const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(
        `Please double check your class names, there is no ${selector} class`
        )
}
    
const links = getElement('.nav-links');

function toggleShowLinks() {
    links.classList.toggle('show-links');
}

toggleBtn.addEventListener('click', toggleShowLinks);


const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear