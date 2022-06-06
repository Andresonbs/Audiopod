var logado = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log("entrou")
}
if(logado != true){
    alert("Você não está autenticado!");
    window.location.href = "login.html"
}

function logout(){
   localStorage.setItem("acesso", "false");
    window.location.href = "login.html";

}