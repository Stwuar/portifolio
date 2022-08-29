//Validar formulario

const formContact = document.getElementById("form-contact")
const nombre = document.getElementById("name") 
const email = document.getElementById("email") 
const assunto = document.getElementById("assunto")
const message = document.getElementById("message")
const warningsText = document.getElementById("warnings")

formContact.addEventListener("submit", e => {
    e.preventDefault()
    warningsText.innerHTML = ""

    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombre.value.length < 6){
        warningsText.innerHTML += `nome inválido <br>`
        entrar = true
    }   
    if(!regexEmail.test(email.value)){
        warningsText.innerHTML += `O e-mail não é válido <br>` 
        entrar = true
    }
    if(assunto.value.length <20){
        warningsText.innerHTML += `você só pode escrever 10 letras <br>`
        entrar = true
    }
    if(message.value.length < 30){
        warningsText.innerHTML += `você só pode escrever 30 letras <br>`
        entrar = true
    }

    if(!entrar) {
        formContact.submit()
    }
})
