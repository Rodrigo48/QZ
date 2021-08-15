var nome;
var email;
var senha;

document.getElementById("btn").onclick = function() {

    nome = document.getElementById("name").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("password").value;

    if(nome == "" || email == "" || senha == "") {
        alertMsg("error", "Algum campo está em branco, por favor preencha-o.");
    }
    else {
        alertMsg("success", "Cadastro solicitado");
    }

}