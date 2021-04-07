// 햄버거 바 아이콘 선택자
const openMeunEl = document.getElementById("btn--open")
// 닫는 아이콘 선택자
const closeMeunEl = document.getElementById("btn--close")
// 사이드 메뉴 선택자
const navMenuEl = document.getElementById("nav_menu")

openMeunEl.addEventListener("click", function(){
    openMeunEl.style.display = 'none'
    closeMeunEl.style.display = 'block'
    navMenuEl.style.transform = 'translate(0)'
})

closeMeunEl.addEventListener("click", function(){
    closeMeunEl.style.display = 'none'
    openMeunEl.style.display = 'block'
    navMenuEl.style.transform = 'translate(-100%)'
})