$(document).ready(main);

var contador = 1 ;

function main(){
    $('.menu-btn').click(function(){
        // $('.contenedor-menu').toggle();
        if(contador == 1){
            $('.contenedor-menu').animate({
                left:'0'
            });
            contador = 0;
        } else{
            contador = 1;
            $('.contenedor-menu').animate({
                left:'-100%'
            });

        }
    });
};
