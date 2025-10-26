export const paginas = {
index: `
<section>
        <h2>Sobre a organização:</h2>
        <p>A ONG Mãos Abertas atua com o propósito de ajudar pessoas em situação de rua e famílias carentes com roupas e alimentação adequada. A Mãos Abertas atua desde 01/04/2020, com o propósito de ajudar moradores de rua e familias em situação de vulnerabilidade, ajudando com doações de roupas e alimentos sendo composta por voluntários que ajudam nas doações e nas entregas da mesma. Nosso time de voluntarios cresce a cada dia mais, sendo hoje composto por mais de 2 mil voluntarios que ajudam nesta causa. Venha fazer parte você também!</p>
        <picture>
        <source media="(max-width: 600px)" srcset="imagens/voluntarios1pq.jpg">
        <img src="imagens/voluntarios1.1.jpg" alt="Voluntarios da ONG">
        </picture>

        <h2>Como a ong surgiu:</h2>
        <p>A ong Mãos Abertas surgiu no meio da pandemia que ocorreu no ano de 2020. Com a quarentena e a falta de emprego tudo ficou mais difícil para todos. Com muitos comércios fechados muitas famílias começaram a passar dificuldade e pessoas que ja eram dependentes de doações como no caso de pessoas em situação de rua não tinham mais onde pedir suas doações. Com isto tivemos a ideia da organização que juntou voluntários e arrecadou doações de roupas e comidas para distribuir aos mais necessitados, logo após a ong foi crescendo cada dia mais, e até hoje atua ajudando a quem precisa.
        </p>
        <div class="video">
        <video src="imagens/video-voluntarios.mp4" width="800" controls></video>
        </div>
        </section>
       
        <section>
            <h2>Contato:</h2>
            <p>&#9993; Email: contato@MãosAbertas.org</p>
            <p>&#128241; Contato:<a href="tel:+5511999888899">(11)99988-8899</a></p>
        </section>
        `,

projetos: `
<section>
        <h2>Voluntariado:</h2>
        <p>Seja um voluntario e faça parte desta causa, ajude a quem precisa.</p>
        <picture>
        <source media="(max-width: 600px)" srcset="imagens/voluntarios2pq.jpeg">
        <img src="imagens/voluntarios2.jpg" alt="Voluntarios da ONG">
        </picture>
        <p>Para ser um voluntario é simples basta se cadastrar atráves do icone <a href="cadastro.html">Cadastro</a> após se cadastrar você já estará fazendo parte deste projeto!</p>
        </section>
        <section>
        <h2>Seja um doador:</h2>
        <p>Doe roupas, alimentos ou até mesmo uma quantia financeiras. Torne a vida de quem precisa mais feliz!</p>
        <picture>
        <source media="(max-width: 600px)" srcset="imagens/voluntarios5pq.jpg">
        <img src="imagens/voluntarios5.1.jpg" alt="Voluntarios da ONG">
        </picture>
        <p>Para doar basta entrar em contato através de um dos nosso canais de atendimento (Email ou WhatsApp), informando que você quer fazer uma doação e o nosso time irá te passar as informações necessarias para que você possa contribuir da forma que preferir.</p>
        </section>

        <section>
            <h2>Contato:</h2>
            <p>&#9993; Email: contato@MãosAbertas.org</p>
            <p>&#128241; Contato:<a href="tel:+5511999888899">(11)99988-8899</a></p>
        </section>
`,

cadastro: `
    <section>
        <h1>Cadastre-se!</h1>
        <form id="form-cadastro" onsubmit="return false">
            <fieldset>
                <legend>Informações pessoais:</legend>
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required><br><br>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required><br><br>

                <label for="nascimento">Data de Nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="contato">Contato:</label>
                <input type="tel" id="contato" name="contato" required><br><br>

                <label for="endereço">Endereço:</label>
                <input type="text" id="endereço" name="endereço" required><br><br>
                
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" required><br><br>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required><br><br>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required><br>
             </fieldset>
            <button type="submit">Enviar</button>
            </form>
            <div id="mensagem"></div>
        </section>

        <section>
            <h2>Contato:</h2>
            <p>&#9993; Email: contato@MãosAbertas.org</p>
            <p>&#128241; Contato:<a href="tel:+5511999888899">(11)99988-8899</a></p>
        </section>
`
};
function carregarPagina(pagina) {
    main.innerHTML = paginas[pagina] || "<h2>Página não encontrada</h2>";

    if (pagina === "cadastro") {
        setTimeout(() => {
            validarFormulario();
        }, 0);
    }
}