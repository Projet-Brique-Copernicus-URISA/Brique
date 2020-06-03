
$( document ).ready(function() {

    $('.button-info').hover(
        function(){
            $(this).animate({
                opacity: '0.7',
                height: '55px',
                width: '55px'
            });
        },
        function(){
            $(this).animate({
                opacity: '1',
                height: '45px',
                width: '45px'
            });
        }
    );

    $('.info-content').hide();

    $('.button-info').click(
        function(){
            $('.info-content').toggle();
        }
    );
});