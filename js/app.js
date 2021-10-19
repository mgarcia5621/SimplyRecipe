const getElement = (selector) => {
    const element =document.querySelector(selector)
    if (element) return element
    throw Error(
        'Please double check your class names.'
    )
}

const links = getElement('.nav-link');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click' ,() => {
    links.classList.toggle('show-links')
})