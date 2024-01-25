const form = document.querySelector('form');
const nom = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

let erreurExist = {
    nom: false,
    email: false,
    message: false,
};


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    erreurExist.nom = verifieValeur(nom);
    erreurExist.email = verifieValeur(email);
    erreurExist.message = verifieValeur(message);
    
    if (!erreurExist.nom &&  !erreurExist.email && !erreurExist.message) {
            document.querySelector('.success').style.display = "block"
    }else{
        document.querySelector('.success').style.display = "none"
    }
})


function verifieValeur(input){
    const value =  input.value;
    if (!value) {
        input.nextElementSibling.style.display = "block"
        return true;
    }else{
        input.nextElementSibling.style.display = "none";
        return false
    }
}