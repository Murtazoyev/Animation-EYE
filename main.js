const eyeL = document.querySelectorAll('.little-eye')
let eyeLS = document.querySelector('.circle')

eyeLS.addEventListener('mousemove', (e) => {
    eyeL.forEach(item => {
        item.style.left = e.pageX + 'px'
        item.style.right = e.pageX + 'px'
        item.style.top = e.pageY + 'px'
        item.style.bottom = e.pageY + 'px'
    });
})


const cursor = document.querySelector('.liz');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
    cursor.classList.remove('active')
})