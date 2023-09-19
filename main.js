$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-button').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src='${endereçoNovaImagem}'/>`).appendTo(novoItem); // pega o elemento e insere entre a tag '<li>'
        
        $(`
            <div class='overlay-iamgem-link'>
                <a href='${endereçoNovaImagem}' target='_blank' title='Ver imagem em tamanho real'
                    Ver imagem em tamanho real 
                </a>
            </div>
        `).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereçoNovaImagem').val('');
    })
});
