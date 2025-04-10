function banco() {
    const dados = [];
    localStorage.setItem("dados", JSON.stringify(dados));
    localStorage.setItem("nextId", "1");
}

function logar() {
    const dados = JSON.parse(localStorage.getItem("dados")) || [];
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    let logado = null;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].nome === nome && dados[i].email === email && dados[i].senha === senha) {
            logado = dados[i];
            break;
        }
    }

    if (logado) {
        alert('Login Concluído, Bem-vindo ' + logado.nome + '.');
    } else {
        alert('Usuário não encontrado. Verifique os dados inseridos.');
    }

    event.preventDefault();
}

function cadastrar() {
    const dados = JSON.parse(localStorage.getItem("dados")) || [];

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    let nextId = parseInt(localStorage.getItem("nextId") || "1");
    const cadastro = {
        id: nextId,
        nome: nome,
        email: email,
        senha: senha
    };

    dados.push(cadastro);
    localStorage.setItem("dados", JSON.stringify(dados));
    localStorage.setItem("nextId", String(nextId + 1));

    alert("Parabéns! Seu registro foi adicionado!");
    event.preventDefault();
}

function remover() {
    const dados = JSON.parse(localStorage.getItem("dados")) || [];

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].nome === nome && dados[i].email === email && dados[i].senha === senha) {
            dados.splice(i, 1);
            localStorage.setItem("dados", JSON.stringify(dados));
            alert("Dados removidos.");
            break;
        }
    }

    event.preventDefault();
}

function atualizar() {
    const dados = JSON.parse(localStorage.getItem("dados")) || [];

    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    for (let i = 0; i < dados.length; i++) {
        if (String(dados[i].id) === id) {
            dados[i] = {
                id: dados[i].id,
                nome: nome,
                email: email,
                senha: senha
            };
            localStorage.setItem("dados", JSON.stringify(dados));
            alert("Dados atualizados.");
            break;
        }
    }

    event.preventDefault();
}