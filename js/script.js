var section_sobre_nos = document.getElementById('section-sobre-nos')
var link_sobre_nos = document.getElementById('link-sobre-nos')

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
