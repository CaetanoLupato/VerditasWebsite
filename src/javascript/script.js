$(document).ready(function() {
    // Toggle do menu mobile e ícone
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    // Função para definir a seção ativa ao rolar a página
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() + header.outerHeight();
        
        let activeSectionIndex = 0;

        // Aplicar ou remover sombra no cabeçalho ao rolar
        if ($(window).scrollTop() <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Verificar qual seção está visível na viewport
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Parar o loop quando a seção ativa é encontrada
            }
        });

        // Remover a classe 'active' de todos os itens
        navItems.removeClass('active');
        // Adicionar a classe 'active' ao item correspondente
        navItems.eq(activeSectionIndex).addClass('active');
    });

    // Força o disparo do evento de rolagem ao carregar a página
    $(window).trigger('scroll');
});