// 헤더 선택자
const headerEl = document.getElementById('header')
// 로고 이미지 선택자
const logoEl = document.getElementById('logo')

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        headerEl.style.height = '300px'
        logoEl.style.height = '160px'
        logoEl.style.width = '160px'
    } else {
        headerEl.style.height = '400px'
        logoEl.style.height = '300px'
        logoEl.style.width = '300px'
    }
})