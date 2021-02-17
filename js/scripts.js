var $_GET = [];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (a, name, value) {
    $_GET[name] = value;
});
$(function () {
    $('.select-control').change(function () {
        var prev_val = $(this).data('value');
        var jbl = $(this).val();
        change_control($(this), jbl);

        change_control($('.select-control[data-value="' + jbl + '"]'), prev_val);
        $('.select-control[data-value="' + jbl + '"]').data('value', prev_val).attr('data-value', prev_val).val(prev_val);

        $(this).attr('data-value', jbl).data('value', jbl);
    });

    function change_control(control, jbl) {
        switch (jbl) {
            case 'Quantum ONE':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-one-visual.png');
                control.parent().find('.conectividad').html('USB + Cable 3.5mm ');
                control.parent().find('.sonido').html('JBL QuantumSPHERE 360 con seguimiento <br/>de cabeza + DTS Headphone:X v2.0');
                control.parent().find('.cominicacion').html('Micrófono Boom desmontable');
                control.parent().find('.ruido').html('Activa y ajustada para videojuegos');
                control.parent().find('.comodidad').html('Diadema y almohadillas de piel, <br/>totalmente acolchada');
                break;
            case 'Quantum 800':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-800-visual.png');
                control.parent().find('.conectividad').html('2.4 GHz Digital Wireless + Bluetooth 5.0 <br/>+ Cable 3.5mm ');
                control.parent().find('.sonido').html('JBL QuantumSURROUND + <br/>DTS Headphone: X v 2.0');
                control.parent().find('.cominicacion').html('Micrófono Boom abatible');
                control.parent().find('.ruido').html('Activa y ajustada para videojuegos');
                control.parent().find('.comodidad').html('Diadema y almohadillas de piel, <br/>totalmente acolchada');
                break;
            case 'Quantum 600':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-600-visual.png');
                control.parent().find('.conectividad').html('2.4 GHz Digital Wireless + <br/>Cable 3.5mm');
                control.parent().find('.sonido').html('JBL QuantumSURROUND + <br/>DTS Headphone: X v 2.0');
                control.parent().find('.cominicacion').html('Micrófono Boom abatible');
                control.parent().find('.ruido').html('Pasiva');
                control.parent().find('.comodidad').html('Diadema y almohadillas de piel, <br/>totalmente acolchada');
                break;
            case 'Quantum 400':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-400-visual.png');
                control.parent().find('.conectividad').html('USB + Cable 3.5mm');
                control.parent().find('.sonido').html('JBL QuantumSURROUND + <br/>DTS Headphone: X v 2.0 ');
                control.parent().find('.cominicacion').html('Micrófono Boom abatible');
                control.parent().find('.ruido').html('Pasiva');
                control.parent().find('.comodidad').html('Diadema de goma con textura, <br/>parcialmente acolchada');
                break;
            case 'Quantum 300':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-300-visual.png');
                control.parent().find('.conectividad').html('Cable 3.5mm + USB Audio <br/>Adapter');
                control.parent().find('.sonido').html('JBL Quantum Surround');
                control.parent().find('.cominicacion').html('Micrófono Boom abatible');
                control.parent().find('.ruido').html('Pasiva');
                control.parent().find('.comodidad').html('Diadema de goma con textura, <br/>parcialmente acolchada');
                break;
            case 'Quantum 200':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-200-visual.png');
                control.parent().find('.conectividad').html('Cable 3.5mm + PC Splitter');
                control.parent().find('.sonido').html('Windows Sonic Spatial');
                control.parent().find('.cominicacion').html('Micrófono Boom abatible');
                control.parent().find('.ruido').html('Pasiva');
                control.parent().find('.comodidad').html('Diadema de goma con textura, <br/>parcialmente acolchada');
                break;
            case 'Quantum 100':
                control.parent().find('.image img').attr('src', 'audifonos/tabla/lineup-quantum-100-visual.png');
                control.parent().find('.conectividad').html('Cable 3.5mm');
                control.parent().find('.sonido').html('Windows Sonic Spatial');
                control.parent().find('.cominicacion').html('Micrófono Boom desmontable');
                control.parent().find('.ruido').html('Pasiva');
                control.parent().find('.comodidad').html('Diadema de plástico');
                break;
        }
    }
    $('.selector-table').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.multiple-items').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.data-sheet').hide();
        switch (nextSlide) {
            case 0:
                $('.data-sheet[data-model="JONE"]').show();
                break;
            case 1:
                $('.data-sheet[data-model="J800"]').show();
                break;
            case 2:
                $('.data-sheet[data-model="J600"]').show();
                break;
            case 3:
                $('.data-sheet[data-model="J400"]').show();
                break;
            case 4:
                $('.data-sheet[data-model="J300"]').show();
                break;
            case 5:
                $('.data-sheet[data-model="J200"]').show();
                break;
            case 6:
                $('.data-sheet[data-model="J100"]').show();
                break;
        }
        /*console.log(slick);
         console.log(currentSlide);
         console.log(nextSlide);*/
    });
    $(document).click(function (e) {
        if (!$(e.target).hasClass('abrir-compra') && !$(e.target).closest(".quare_buy").length) {
            var model = $(".quare_buy:visible").data('model');
            $('.quare_features[data-model="' + model + '"]').show();
            $('.quare_buy[data-model="' + model + '"]').hide();
        }
    });
    $('.abrir-compra').click(function () {
        var model = $(this).data('model');
        $('.quare_features[data-model="' + model + '"]').hide();
        $('.quare_buy[data-model="' + model + '"]').show();
    });
    $('.btn-compara').click(function () {
        var model = $(this).data('model');
        $('.select-control').first().val(model).trigger('change');
    });
    /*$('.btn-compara').magnificPopup({
     type: 'inline',
     midClick: true,
     callbacks: {
     open: function () {
     check_scroll_buttons();
     },
     close: function () {
     
     }
     }
     });*/
    $("#right-button").click(function () {
        event.preventDefault();
        $(".compare").animate({
            scrollLeft: "+=300px"
        }, "slow");
    });
    $("#left-button").click(function () {
        event.preventDefault();
        $(".compare").animate({
            scrollLeft: "-=300px"
        }, "slow");
    });
    $(window).resize(function () {
        check_scroll_buttons();
    });
    function check_scroll_buttons() {
        if ($('.compare').prop('scrollWidth') > $('#small-dialog').width()) {
            $('.navigator-buttons').show();
        } else {
            $('.navigator-buttons').hide();
        }
    }
    var $_GET = [];
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (a, name, value) {
        $_GET[name] = value;
    });

    $('form').submit(function () {
        $.ajax({
            crossDomain: true,
            data: {
                'code': 'LQ1cwgiTyiSktfcFJEvQJ0tGQd8H1rf6',
                'privacy': 'Acepto la política de privacidad',
                'email': $('input[name="email"]').val(),
                'url_utms' :window.location.href,
                'source': $_GET['utm_source']?$_GET['utm_source']:'',
                'campaign': $_GET['utm_campaign']?$_GET['utm_campaign']:'',
                'medium': $_GET['utm_medium']?$_GET['utm_medium']:'',
                'content': $_GET['utm_content']?$_GET['utm_content']:''
            },
            url: 'https://sm2.xtrg.net/api/crossorigin/leads/store',
                    type: 'POST',
            dataType: 'jsonp',
                    jsonpCallback: 'result',
            success: function (data) {
                if ($_GET['utm_source'] == 'Facebook' || $_GET['utm_source'] == 'facebook') {
                    fbq('trackCustom', 'EnviarCorreo');
                }
                if ($_GET['utm_source'] == 'Goolge' || $_GET['utm_source'] == 'google') {
                }
                Swal.fire({
                    title: '¡Su información ha sido enviada con éxito! ',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Aceptar'
                }).then(function (result) {

                });
            }
        });
        return false;
    });
    $('.jbl-item').click(function () {
        var model = $(this).data('model');
        $('.data-sheet').hide();
        $('.data-sheet[data-model="' + model + '"]').show();
    });

    $('.btn-go').click(function () {
        if ($_GET['utm_source'] == 'Facebook' || $_GET['utm_source'] == 'facebook') {
            fbq('trackCustom', 'IrATienda');
        } else if ($_GET['utm_source'] == 'Goolge' || $_GET['utm_source'] == 'google') {
            gtag('event', 'conversion', {'send_to': 'AW-620551787/uMDBCLyYzuABEOu886cC'});
        } else {
            fbq('trackCustom', 'IrATiendaOrganico');
        }
        fbq('trackCustom', 'IrATiendaGeneral');
        fbq('trackCustom', 'IrATienda_' + $.trim($(this).text()));
    });
});