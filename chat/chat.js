const loginform = document.getElementById('loginform');
const logininput2 = document.getElementById('logininput2');
const divContainer = document.getElementById('divContainer');
const divContainer2 = document.getElementById('divContainer2');

const user = {id: "", name: "", color:""};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    user.name = logininput2.value;
};

loginform.addEventListener("submit", handleSubmit);

document.getElementById('butao').addEventListener('click', function(event) {
    if (divContainer.style.display === 'none' ) {
        divContainer.style.display = 'block';
        divContainer2.style.display = 'none'; 
       
    } else {
        divContainer.style.display = 'none';
        divContainer2.style.display = 'block';
    }
    event.preventDefault();
});