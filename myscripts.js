$(function () {
    var position = $(window).scrollTop();
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            offset = $('#section_1').offset().top,
            distance = scroll - offset;


        if (scroll > position && distance > 0) {

            $('.navbar').css("opacity", "0");
        } else {
            $('.navbar').css("opacity", "1");
        }
        position = scroll;
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            offset_1 = $('#section_1').offset().top,
            distance_1 = scroll - offset_1,
            offset_2 = $('#services').offset().top,
            distance_2 = scroll - offset_2;
        if (distance_1 > 0 && distance_2 < 0) {
            $('#image_3,#image_1').css('opacity', '0');
            $('#image_2').css('opacity', '1');
        }
        else if (distance_2 > 0) {
            $('#image_3,#image_2').css('opacity', '0');
            $('#image_1').css('opacity', '1');
        } else {
            $('#image_1,#image_2').css('opacity', '0');
            $('#image_3').css('opacity', '1');
        }
    });
    $(window).on('scroll', function () {

        var offset = $('#get_know').offset().top,
            scroll = $(window).scrollTop(),
            window_height = $(window).height(),
            distance = scroll + window_height - offset -200;
        if(distance > 0) {
            $('.img-thumbnail').css({
                'transform': 'scale(1)',
                'opacity': '1'
            });
        }
    });
    $(window).on('scroll', function () {

        var offset = $('#services').offset().top,
            scroll = $(window).scrollTop(),
            window_height = $(window).height(),
            distance = scroll + window_height - offset -200;
        if(distance > 0) {
            $('.hide').css({
                'transform': 'scale(1)',
                'opacity': '1'
            });
        }
    });
    $('#gallery_1').click(function () {
        $('*').css('overflow', 'hidden');
        $('#fixed-image-container-1').css('display', 'block');

    });
    $('#gallery_2').click(function () {
        $('#fixed-image-container-2').css('display', 'block');
        $('*').css('overflow', 'hidden');
    });
    $('#gallery_3').click(function () {
        $('#fixed-image-container-3').css('display', 'block');
        $('*').css('overflow', 'hidden');
    });
    $('#close-btn-1').click(function () {
        $('#fixed-image-container-1').css('display', 'none');
        $('*').css('overflow', 'initial');
    });
    $('#close-btn-2').click(function () {
        $('#fixed-image-container-2').css('display', 'none');
        $('*').css('overflow', 'initial');
    });
    $('#close-btn-3').click(function () {
        $('#fixed-image-container-3').css('display', 'none');
        $('*').css('overflow', 'initial');
    });
    $('#enter').click(function () {
        $('#modal-container-1').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $('.modal-1').css('top', '15%');
    });
    $('#close-1').click(function () {
        $('#modal-container-1').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $('.modal-1').css('top', '-10%');
    });
    $('#sign-up').click(function () {
        $('#modal-container-2').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $('.modal-1').css('top', '15%');
    });
    $('#close-2').click(function () {
        $('#modal-container-2').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $('.modal-1').css('top', '-10%');
    });
    //کد های مربوط به ماشین حساب
    var ans,
        ans_1,
        check = 0,
        memory = 0;
    $('#zero').click(function () {
        $('.screen').append('0');
    });
    $('#one').click(function () {
        $('.screen').append('1');
    });
    $('#two').click(function () {
        $('.screen').append('2');
    });
    $('#three').click(function () {
        $('.screen').append('3');
    });
    $('#plus').click(function () {
        $('.screen').append('+');
    });
    $('#mines').click(function () {
        $('.screen').append('-');
    });
    $('#four').click(function () {
        $('.screen').append('4');
    });
    $('#five').click(function () {
        $('.screen').append('5');
    });
    $('#six').click(function () {
        $('.screen').append('6');
    });
    $('#cross').click(function () {
        $('.screen').append('*');
    });
    $('#frac').click(function () {
        $('.screen').append('/');
    });
    $('#seven').click(function () {
        $('.screen').append('7');
    });
    $('#eight').click(function () {
        $('.screen').append('8');
    });
    $('#nine').click(function () {
        $('.screen').append('9');
    });
    $('#dot').click(function () {
        $('.screen').append('.');
    });
    $('#clear').click(function () {
        $('.screen').html('');
    });
    $('#equal').click(function () {

        if (check == 0) {
            ans = eval($('.screen').html());
            $('.screen').html(ans);
        } else if (check == 1) {
            ans_1 = eval($('.screen').html());
            $('.screen').html(Math.pow(ans, ans_1));
            check = 0;
        }
    });
    $('#pi').click(function () {
        $('.screen').append(Math.PI);
    });
    $('#e').click(function () {
        $('.screen').append(Math.E);
    });
    $('#sin').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.sin(ans));
    });
    $('#cos').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.cos(ans));
    });
    $('#tan').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.tan(ans));
    });
    $('#abs').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.abs(ans));
    });
    $('#neg').click(function () {
        ans = eval($('.screen').html());
        if (ans > 0) {
            $('.screen').html(ans * -1);
        } else {
            $('.screen').html(ans);
        }
    });
    $('#radic').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.sqrt(ans));
    });
    $('#sqr').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.pow(ans, 2));
    });
    $('#log').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html(Math.log(ans));
    });
    $('#pow').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html('');
        check = 1;
    });
    $('#neper').click(function () {
        $('.screen').html(Math.E);
    });
    $('#del').click(function () {
        ans = $('.screen').html();
        $('.screen').html(ans.substring(0, ans.length - 1));
    });
    $('#popen').click(function () {
        $('.screen').append('(');
    });
    $('#pclose').click(function () {
        $('.screen').append(')');
    });
    $('#mplus').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html('');
        memory += ans;
    });
    $('#mmine').click(function () {
        ans = eval($('.screen').html());
        $('.screen').html('');
        memory -= ans;
    });
    $('#mc').click(function () {
        $('.screen').html(memory);
    });
    $('#ac').click(function () {
        $('.screen').html('');
        memory = 0;
    });
});
