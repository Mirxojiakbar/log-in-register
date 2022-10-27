const logform = document.querySelector('.login-form')
const log = document.querySelector('.logining')

const btn_l = document.querySelector('.login_btn')

const login_name =document.querySelector('.login-name')
const login_password = document.querySelector('.login-password')


const reg = document.querySelector('.reging')
const regform = document.querySelector('.register-form')

const btn_r = document.querySelector('.register_button')

const reg_name = document.querySelector('.reg_name')
const reg_password = document.querySelector('.reg_password')
const reg_email = document.querySelector('.reg_email')






reg.addEventListener('click', ()=>{
    regform.style.display = 'block'
    logform.style.display = 'none'
})
log.addEventListener('click', ()=>{
    logform.style.display = 'block'
    regform.style.display = 'none'
})
btn_l.addEventListener('click', ()=>{
    console.log(login_name.value, login_password.value);

    if (login_name.value == reg_name.value&&login_password.value == reg_password.value){
        alert('LOG-IN SUCSESSFUL')
    }
    else{
        alert('Bunday akkaunt yoq,Yoki qaytatdan tekshirib koring ')
    }
})
btn_r.addEventListener('click', ()=>{
    console.log(reg_name.value,reg_password.value,reg_email.value);
    if(reg_name.value&&reg_password.value == ''){
        alert('Enter something')
    }else{
        alert('Creating SUCSESSFUL')
    }
})



