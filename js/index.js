$(document).ready(function(){
    $('#piggy').click(function(){
       $('#piggyresult').show();
       $('#botresult').hide();
       $('#chatresult').hide();
       $('#likeresult').hide();
    });

    $('#bot').click(function(){
        $('#botresult').show();
        $('#piggyresult').hide();
        $('#chatresult').hide();
        $('#likeresult').hide();
     });

     $('#chat').click(function(){
        $('#chatresult').show();
        $('#piggyresult').hide();
        $('#botresult').hide();
        $('#likeresult').hide();
     });

     $('#like').click(function(){
        $('#likeresult').show();
        $('#piggyresult').hide();
        $('#chatresult').hide();
        $('#botresult').hide();
     });

     $('#localmoving').mouseenter(function(){
        $('#icona').addClass('animate__animated animate__bounce')
        $('#icona').css({"color":"white"});
        $('#iconatext').css({"color":"white"});
     })

     $('#localmoving').mouseleave(function(){
        $('#icona').css({"color":"rgb(1, 3, 124)"});
        $('#iconatext').css({"color":"rgb(1, 3, 124)"});
     })

     $('#commercmoving').mouseenter(function(){
        $('#iconb').addClass('animate__animated animate__bounce')
        $('#iconb').css({"color":"white"});
        $('#iconbtext').css({"color":"white"});
     })

     $('#commercmoving').mouseleave(function(){
        $('#iconb').css({"color":"rgb(1, 3, 124)"});
        $('#iconbtext').css({"color":"rgb(1, 3, 124)"});
     })

     $('#moving').mouseenter(function(){
        $('#iconc').addClass('animate__animated animate__bounce')
        $('#iconc').css({"color":"white"});
        $('#iconctext').css({"color":"white"});
     })

     $('#moving').mouseleave(function(){
        $('#iconc').css({"color":"rgb(1, 3, 124)"});
        $('#iconctext').css({"color":"rgb(1, 3, 124)"});
     })
})