const toggleBtn = document.getElementById("toggle-btn");

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