var section_sobre_nos = document.getElementById('section-sobre-nos')
var link_sobre_nos = document.getElementById('link-sobre-nos')

var ul_nav = document.getElementsByClassName('ul-nav')[0]
var span_dropdown = document.getElementsByClassName('span-dropdown')[0]
var header = document.getElementsByTagName('header')[0]
var nav = document.getElementsByTagName('nav')[0]



// Função para dar enfase aos sections mudando o background color deles
link_sobre_nos.addEventListener('click', function() {
    mudar_cor_section()
})


function mudar_cor_section (){
    if(section_sobre_nos.style.animation == '1.5s ease 0s 1 normal none running mudar-cor-section2' || section_sobre_nos.style.animation == ''){
        section_sobre_nos.style.animation = 'mudar-cor-section 1.5s'
    } else{
        section_sobre_nos.style.animation = '1.5s ease 0s 1 normal none running mudar-cor-section2'
    }       
}

// Função para fazer o dropdown da nav bar Responsiva

span_dropdown.addEventListener('click', () => {
    dropDown()
})

function dropDown() {
    
    if (ul_nav.style.display == "none" || ul_nav.style.display == "") {

        if (window.screen.width <= 530 ) {

            ul_nav.style.display = "flex"
            nav.style.display = "flex"
            nav.style.flexDirection = "row-reverse"
            span_dropdown.style.textAlign = "center"

            header.style.flexDirection = "column"
            header.style.justifyContent = "center"
            header.style.alignItems = "center"
            header.style.height = "auto"

            ul_nav.style.flexDirection = "column"
            ul_nav.style.alignItems = "center"
            ul_nav.style.gap = "5px"
            ul_nav.style.marginLeft = "-34px"
            
        } else{

            ul_nav.style.display = "flex"
            nav.style.display = "flex"
            nav.style.flexDirection = "row-reverse"
            span_dropdown.style.textAlign = "center"

            header.style.flexDirection = "column"
            header.style.justifyContent = "center"
            header.style.alignItems = "center"
            header.style.height = "auto"

        }

    } else {

        if (window.screen.width <= 530 ) {

            ul_nav.style.display = "none"
            header.style.height = " 5.064vw"
            nav.style.display = "block"
            span_dropdown.style.textAlign = "left"
    
            header.style.flexDirection = "row"
            header.style.justifyContent = "space-between"
            header.style.alignItems = "center"

            ul_nav.style.flexDirection = "row"
            ul_nav.style.alignItems = "center"
            ul_nav.style.gap = "5px"
            ul_nav.style.marginLeft = "0px"
            
        } else{

            ul_nav.style.display = "none"
            header.style.height = " 5.064vw"
            nav.style.display = "block"
            span_dropdown.style.textAlign = "left"

            header.style.flexDirection = "row"
            header.style.justifyContent = "space-between"
            header.style.alignItems = "center"
            
        }

    }

}
