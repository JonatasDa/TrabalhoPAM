function val() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;


    if (email === "") {
        window.alert("Por favor, insira um email");
        return false;
    }
    if (senha === "") {
        window.alert("Por favor, insira uma senha");
        return false;
    }

    window.alert("Login realizado com sucesso!");
    return true; // uso dos returns para não aparecer todos os alertas, tente removelos que não funcionara corretamente
}