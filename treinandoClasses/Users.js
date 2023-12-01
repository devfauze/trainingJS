//Cria uma classe Users e metodo para login
class Users {
    Fullname
    Email
    Password

    constructor(fullname, email, password){
        this.Fullname = fullname
        this.Email = email
        this.Password = password
    }

    FazerLogin(email, password){
        if(this.email === email && this.password === password){
            console.log("Login realizado com sucesso")
        } else {
            console.log("Email ou senha incorretos!")
        }
    }
}

const fauze = new Users("Fauze", "fauze@gmail.com", "1234")
fauze.FazerLogin
