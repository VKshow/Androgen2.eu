$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
    $('body').toggleClass('lock');
});
 

    $(".mobile ul li").on('click', () => {
        $('.mobile div').removeClass('active');
        $('.mobile nav').removeClass('open');
        $('.mobile nav ul').removeClass('show');
        $('body').removeClass('lock');
    }); 

    



    jQuery(function($){
        $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( ".mobile div" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                // div.hide(); // скрываем его
                $('.mobile div').removeClass('active');
                $('.mobile nav').removeClass('open');
                $('.mobile nav ul').removeClass('show');
                $('body').removeClass('lock');
            }
        });
    });

    