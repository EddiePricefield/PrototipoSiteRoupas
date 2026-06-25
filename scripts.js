$(document).ready(function() {

   // Botão para voltar ao Topo da Página
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btnTopo').fadeIn();
        } else {
            $('#btnTopo').fadeOut();
        }
    });

    $('#btnTopo').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });

    // Validar as informações do formulário
    $('#formContato').submit(function(event) {
        let erros = [];
        let nome = $('#nome').val().trim();
        let email = $('#email').val().trim();
        let mensagem = $('#mensagem').val().trim();


        if (nome === '') {
            erros.push("O campo Nome é obrigatório.");
        }
        if (email === '') {
            erros.push("Por favor, insira um E-mail válido.");
        }
        if (mensagem.length < 20) {
            erros.push("A mensagem deve ter no mínimo 20 caracteres.");
        }

        if (erros.length > 0) {
            event.preventDefault();
            alert("Erros encontrados:\n" + erros.join("\n"));
        }
    });

    // Contar o número de caracteres da mensagem
    $('#mensagem').on('input', function() {

        let qtdCaracteres = $(this).val().length;
        $('#contador').text(qtdCaracteres);
        
        if(qtdCaracteres < 20) {
            $('#contador').css('color', 'red');
        } else {
            $('#contador').css('color', 'green');
        }
    });
    

});