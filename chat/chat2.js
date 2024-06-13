const login = document.querySelector(".login")
const loginform = login.querySelector("loginform")
const logininput2 = login.querySelector("logininput2")

const user = {id: "", name: "", color:""}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user)
    user.name = logininput2.value
}

loginform.addEventListener ("submit", handleSubmit )



