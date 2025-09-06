// trược menu ẩn khi click vào bar menu
var menu_an = document.querySelector(".menu_an")
var menu__item1 = document.querySelector(".menu__item1 ")
var menu__item2 = document.querySelector(".menu__item2 ")
var menu__item3 = document.querySelector(".menu__item3 ")
var menu__item4 = document.querySelector(".menu__item4 ")
var menu__item5 = document.querySelector(".menu__item5 ")
var menu__item6 = document.querySelector(".menu__item6 ")
var menu__item7 = document.querySelector(".menu__item7 ")
var menu__item8 = document.querySelector(".menu__item8 ")
var menu__item9 = document.querySelector(".menu__item9 ")
var menu__item10 = document.querySelector(".menu__item10 ")
function hien_menu_an() {
    menu_an.classList.toggle("open1");
    menu__item1.classList.toggle("open2");
    setTimeout(() => {
        menu__item2.classList.toggle("open2");
    }, 100)
    setTimeout(() => {
        menu__item3.classList.toggle("open2");
    }, 200)
    setTimeout(() => {
        menu__item4.classList.toggle("open2");
    }, 300)
    setTimeout(() => {
        menu__item5.classList.toggle("open2");
    }, 400)
    setTimeout(() => {
        menu__item6.classList.toggle("open2");
    }, 500)
    setTimeout(() => {
        menu__item7.classList.toggle("open2");
    }, 600)
    setTimeout(() => {
        menu__item8.classList.toggle("open2");
    }, 700)
    setTimeout(() => {
        menu__item9.classList.toggle("open2");
    }, 800)
    setTimeout(() => {
        menu__item10.classList.toggle("open2");
    }, 900)
}
window.addEventListener("resize", () => {
    if (window.innerWidth < 1199.98) {
        menu_an.classList.add("open1");
        menu__item1.classList.add("open2");
        setTimeout(() => {
            menu__item2.classList.add("open2");
        }, 100)
        setTimeout(() => {
            menu__item3.classList.add("open2");
        }, 200)
        setTimeout(() => {
            menu__item4.classList.add("open2");
        }, 300)
        setTimeout(() => {
            menu__item5.classList.add("open2");
        }, 400)
        setTimeout(() => {
            menu__item6.classList.add("open2");
        }, 500)
        setTimeout(() => {
            menu__item7.classList.add("open2");
        }, 600)
        setTimeout(() => {
            menu__item8.classList.add("open2");
        }, 700)
        setTimeout(() => {
            menu__item9.classList.add("open2");
        }, 800)
        setTimeout(() => {
            menu__item10.classList.add("open2");
        }, 900)
    } else {
        hien_menu_an()
    }
})
// trược menu ẩn khi click vào bar menu
var menu__992px_container = document.querySelector(".menu__992px_container")
function hien_menu_an__992px() {
    menu__992px_container.classList.toggle("open");
}
var menu_992px__sanphammoiul = document.querySelector(".menu_992px__sanphammoiul")
function hien_menu_an__992px__sanphammoiul() {
    menu_992px__sanphammoiul.classList.toggle("open");
}
var menu_992px__thoitrangul = document.querySelector(".menu_992px__thoitrangul")
function hien_menu_an__992px__thoitrangul() {
    menu_992px__thoitrangul.classList.toggle("open");
}
var menu_992px__thietbiul = document.querySelector(".menu_992px__thietbiul")
function hien_menu_an__992px__thietbiul() {
    menu_992px__thietbiul.classList.toggle("open");
}
var menu_992px__chamsocul = document.querySelector(".menu_992px__chamsocul")
function hien_menu_an__992px__chamsocul() {
    menu_992px__chamsocul.classList.toggle("open");
}
var menu_992px__dodungcul = document.querySelector(".menu_992px__dodungcul")
function hien_menu_an__992px__dodungul() {
    menu_992px__dodungcul.classList.toggle("open");
}
var menu_992px__dodung2ul = document.querySelector(".menu_992px__dodung2ul")
function hien_menu_an__992px__dodung2ul() {
    menu_992px__dodung2ul.classList.toggle("open");
}
var menu_992px__dogiadungul = document.querySelector(".menu_992px__dogiadungul")
function hien_menu_an__992px__dogiadungul() {
    menu_992px__dogiadungul.classList.toggle("open");
}
var menu_992px__linhkienul = document.querySelector(".menu_992px__linhkienul")
function hien_menu_an__992px__linhkienul() {
    menu_992px__linhkienul.classList.toggle("open");
}
// lăn chuột
var bttop = document.querySelector("#bttop")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { // nếu cuộn xuống hơn 100px
        bttop.classList.add("shown");
    } else {
        bttop.classList.remove("shown");
    }
});  