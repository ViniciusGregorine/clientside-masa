import { loginUser } from "../../../model/server/api.js"

const loginButton = document.getElementById('register__button')
loginButton.addEventListener('click', loginHandler)

async function loginHandler(){
    const url = 'http://localhost:5500/view/pages/place/place.html'

    const password = document.getElementById('password_input').value
    const email = document.getElementById('email_input').value

    try{
        const status = await loginUser(email, password)
        if(status === 200){
            document.location.href = url;
        }else{
            document.getElementById('error__message').style.display = "block"
            loginButton.style.marginTop = '10px'
        }   
   }
   catch{
        alert('Ocorreu algum erro')
   }
}