import './style.scss'

document.addEventListener('DOMContentLoaded', function () {
    const  year = this.getElementById('year')

    year.innerHTML = new Date().getFullYear();
})
