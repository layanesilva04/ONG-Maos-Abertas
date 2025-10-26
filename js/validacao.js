export function validarFormulario() {
    const form = document.getElementById("form-cadastro");
    if (!form) return; 

    let mensagem = document.getElementById("mensagem");
    if (!mensagem) {
        mensagem = document.createElement("div");
        mensagem.id = "mensagem";
        form.insertAdjacentElement("afterend", mensagem);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const erros = [];
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.replace(/\D/g, '');
        const contato = document.getElementById("contato").value.trim();
        const nascimento = document.getElementById("nascimento").value;

        if (nome === "") erros.push("⚠️ Nome é obrigatório.");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") erros.push("⚠️ Email é obrigatório.");
        else if (!emailRegex.test(email)) erros.push("❌ Email inválido.");

        if (cpf.length !== 11) erros.push("❌ CPF deve conter 11 números.");

        const telNumeros = contato.replace(/\D/g, '');
        if (telNumeros.length < 10 || telNumeros.length > 11) erros.push("❌ Telefone deve ter 10 ou 11 números.");

        if (nascimento === "") erros.push("⚠️ Data de nascimento é obrigatória.");
        else {
            const ano = new Date(nascimento).getFullYear();
            if (ano < 1900 || ano > new Date().getFullYear()) erros.push("❌ Ano de nascimento inválido.");
        }

        if (erros.length > 0) {
            mensagem.innerHTML = erros.map(err => `<p style="color:red">${err}</p>`).join("");
            return;
        }

        mensagem.innerHTML = "<p style='color:green'>✅ Cadastro realizado com sucesso!</p>";
        form.reset();
    });
}
