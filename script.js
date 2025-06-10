const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// Toggle search bar expansion
btn.addEventListener('click', (e) => {
    if (!search.classList.contains('active')) {
        e.preventDefault() // Prevent form submission when just expanding
        search.classList.add('active')
        input.focus()
    }
})

// Close search bar when clicking outside
document.addEventListener('click', (e) => {
    if (!search.contains(e.target) && search.classList.contains('active')) {
        search.classList.remove('active')
        input.value = ''
    }
})

// Handle escape key to close search
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && search.classList.contains('active')) {
        search.classList.remove('active')
        input.value = ''
    }
})