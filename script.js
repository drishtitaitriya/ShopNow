const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
function signUp(event){
    event.preventDefault();
    const email=document.querySelector("#userEmail").value;
    if(email==""){
        alert("Please enter your E-mail to sign Up ")
    }else{
        alert(`${email} is registered successfully`);
        document.getElementById("form").reset();
    }
}