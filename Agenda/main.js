const form = document.getElementById('form-agenda');
const nome = [];
const email = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

    function adicionaLinha() {

        const inputNomeCadastrado = document.getElementById('nome-cadastrado');
        const inputEmailCadastrado = document.getElementById('email-cadastrado');

        if (nome.includes(inputNomeCadastrado.value)) {
           
        } else {
            nome.push(inputNomeCadastrado.value);
            email.push(parseFloat(inputEmailCadastrado.value));
        
            let linha = '<tr>';
            linha += `<td>${inputNomeCadastrado.value}</td>`;
            linha += `<td>${inputEmailCadastrado.value}</td>`;
            linha += '</tr>';
        
            linhas += linha;
        }

        inputNomeCadastrado.value = '';
        inputEmailCadastrado.value = '';
    };

    function atualizaTabela() {

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

    };
