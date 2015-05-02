$(document).ready(function(){

    $('.hover').hover(function(){
        $(this).css('backgroundColor', '#fb92d5');
        $('.shopLink').css('color', '#efefef');
    }, function(){
        $(this).css('backgroundColor', '#bbf2f3');
        $('.shopLink').css('color', '#15aba1');
    });

    $('.hover2').hover(function(){
        $(this).css('backgroundColor', '#fb92d5');
        $('.shopLink2').css('color', '#efefef');
    }, function(){
        $(this).css('backgroundColor', '#bbf2f3');
        $('.shopLink2').css('color', '#15aba1');
    });

    $('.hover3').hover(function(){
        $(this).css('backgroundColor', '#fb92d5');
        $('.shopLink3').css('color', '#efefef');
    }, function(){
        $(this).css('backgroundColor', '#bbf2f3');
        $('.shopLink3').css('color', '#15aba1');
    });

    $('.hover4').hover(function(){
        $(this).css('backgroundColor', '#fb92d5');
        $('.shopLink4').css('color', '#efefef');
    }, function(){
        $(this).css('backgroundColor', '#bbf2f3');
        $('.shopLink4').css('color', '#15aba1');
    });

    $('.hover5').hover(function(){
        $(this).css('backgroundColor', '#fb92d5');
        $('.shopLink5').css('color', '#efefef');
    }, function(){
        $(this).css('backgroundColor', '#bbf2f3');
        $('.shopLink5').css('color', '#15aba1');
    });

    $('.hover6').hover(function(){
        $(this).css('backgroundColor', '#fb92d5');
        $('.shopLink6').css('color', '#efefef');
    }, function(){
        $(this).css('backgroundColor', '#bbf2f3');
        $('.shopLink6').css('color', '#15aba1');
    });

    $('.catToggle').click(function(e){
        e.preventDefault();

        if($('.hide').is(':visible')){
            $('.hide').slideToggle('slow');  
        }
        else{
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide').slideToggle('slow');
        }    
    });
    $('.clearance').click(function(e){
        e.preventDefault();

        if($('.hide2').is(':visible')){
            $('.hide2').slideToggle('slow');  
        }
        else{
            $('.hide').hide();
            $('.hide3').hide();
            $('.hide2').slideToggle('slow');
        }    
    });
    $('.careToggle').click(function(e){
        e.preventDefault();

        if($('.hide3').is(':visible')){
            $('.hide3').slideToggle('slow');  
        }
        else{
            $('.hide').hide();
            $('.hide2').hide();
            $('.hide3').slideToggle('slow');
        }    
    });
});