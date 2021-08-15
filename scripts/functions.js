var transition = {};

var alertSetTime;

transition.hideAndShow = function(tagHide, tagShow) {

    let containerHide = document.getElementById(tagHide);
    let containerShow = document.getElementById(tagShow);

    containerHide.classList.remove("opacity-one");
    containerHide.classList.add("opacity-zero");
    
    setTimeout(function() {

        containerHide.classList.remove("display-block");
        containerShow.classList.remove("display-none");
        
        containerHide.classList.add("display-none");
        containerShow.classList.add("display-block");

        setTimeout(function() {

            containerShow.classList.add("opacity-one");
            containerShow.classList.remove("opacity-zero");

        }, 100);

    }, 1000);

}

transition.hideTag = function(tagID, time) {
    let tag = document.getElementById(tagID);

    tag.classList.remove("opacity-one");
    tag.classList.remove("display-block");

    tag.classList.add("opacity-zero");
    setTimeout(function() {
        tag.classList.add("display-none");
    }, time);
}
transition.showTag = function(tagID, time) {
    let tag = document.getElementById(tagID);

    tag.classList.remove("opacity-zero");
    tag.classList.remove("display-none");

    tag.classList.add("opacity-zero");
    tag.classList.add("display-block");
    setTimeout(function() {
        tag.classList.add("opacity-one");
    }, time); 
}

// IMPRIME O RESULTADO DA ACAO CASO OCORRA UM ERRO OU OBTENHA SUCESSO
function alertMsg(tipo, texto) {

    clearTimeout(alertSetTime);

    let alertMSG = document.getElementById("alert_msg");
    let alertTEXT = document.getElementById("texto_msg");

    alertMSG.classList.remove("unusable-msg");
    alertMSG.classList.remove("error-msg");
    alertMSG.classList.remove("success-msg");

    if(tipo == "error") {
        alertMSG.classList.add("error-msg");
        alertTEXT.innerHTML = texto;
    }
    else if (tipo == "success") {
        alertMSG.classList.add("success-msg");
        alertTEXT.innerHTML = texto;
    }
    else {
        alert("ALGO OCORREU POR FAVOR ATUALIZE A PAGINA");
    }

    alertSetTime = setTimeout(function() {
        alertMSG.classList.remove("error-msg");
        alertMSG.classList.remove("success-msg");
        alertMSG.classList.add("unusable-msg");
        alertTEXT.innerHTML = "";
    }, 5000);

}