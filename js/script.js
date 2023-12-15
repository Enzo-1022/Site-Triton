const btnMenu = document.getElementById('btnMenu')
const li_nav_responsiva1 = document.getElementsByClassName('li-nav-responsiva')[0]
const li_nav_responsiva2 = document.getElementsByClassName('li-nav-responsiva')[1]
const li_nav_responsiva3 = document.getElementsByClassName('li-nav-responsiva')[2]
const li_nav_responsiva4 = document.getElementsByClassName('li-nav-responsiva')[3]
const ul_nav = document.getElementsByClassName('ul-nav')[0]
const header = document.getElementsByTagName('header')[0]
const li_menu = document.getElementsByClassName('li-menu')[0]
btnMenu.addEventListener('click',function() {
    if (li_nav_responsiva1.style.display == '' || li_nav_responsiva1.style.display == 'none') {
        header.style.height = '52vw'
        li_nav_responsiva1.style.display = 'block'
        li_nav_responsiva2.style.display = 'block'
        li_nav_responsiva3.style.display = 'block'
        li_nav_responsiva4.style.display = 'block'
        header.style.flexDirection = 'column'
        ul_nav.style.flexDirection = 'column'
        li_menu.style.marginRight = '0px'
        li_menu.style.borderBottom = '1px solid var(--cor-dourada)'
        li_menu.style.width = '50% '
    } else {
        li_nav_responsiva1.style.display = 'none'
        li_nav_responsiva2.style.display = 'none'
        li_nav_responsiva3.style.display = 'none'
        li_nav_responsiva4.style.display = 'none'
        header.style.flexDirection = 'row'
        ul_nav.style.flexDirection = 'row'
        li_menu.style.marginRight = '-193'
        li_menu.style.borderBottom = 'none'
        li_menu.style.width = ''
        header.style.height = '10vw'
    }
})