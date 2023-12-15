const inptnLogin = document.getElementById('input-senha-login')
const btnmostrarSenha = document.getElementById('checkbox-mostrar-senha')

btnmostrarSenha.addEventListener('click',
    function(){
        if(inptnLogin.type == 'password'){
            inptnLogin.type = 'text'
        }else{
            inptnLogin.type = 'password'
        }
    }
)