function login()
{
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    console.log(email.value);
    console.log(senha.value);
    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);

        window.location.href = "index.html";
        console.log(localStorage);
    }
    else{
        alert("Usuário ou senha inválidos");
    }
}