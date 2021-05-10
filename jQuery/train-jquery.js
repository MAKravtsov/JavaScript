// Загрузка документа сразу в head (1ый способ)
/*
$(document).ready(function() {
    $('h1').css({'color':'red'});
})
*/

// Загрузка документа сразу в head (2ой способ)
$(function() {
    // Селектор по тегу
    /*
    $('h1').css({'color':'red'});
    */

    // Селектор по классу
    $('h1.first').css({'color':'red'});

    // Селектор по id
    $("#name").css({'color':'blue'})

    // Получить data-
    let firstId = $('.first').data('second');
    console.log(firstId);

    // Селектор по атрибуту
    $('h2[title="H2"]').css({'color':'green'})
    // Начинается на ...
    $('h2[title|=""]').css({'color':'green'})
    // Заканчивается на ...
    $('h2[title$="test"]').css({'color':'brown'})
    // Содержит ...
    $('h2[title*="H"]').css({'color':'yellow'})
    // Не равен ...
    $('h2[title!="H2-test"]').css({'color':'purple'})

    // Селектор по всему
    /*
    $('*').css({'color':'red'});
    */

    // Несколько элементов (тегов, классов и тд)
    $('h1,h2').css({'color':'green'});

    // Выбор конкретного элемента (как в css)
    $('ul li:first').css({'color':'yellow'});
    $('ul li:odd').css({'color':'blue'});
    $('ul li:nth-child(3)').css({'color':'purple'});

    // :contains(содержат текст), :empty, :parent(имеют родителя), :has(содержат элемент)
    $('h2:contains("Go")').css({'color':'red'});
    $('ul li:has(\'span\')').css({'color':'blue'});
    $('table tr td:parent').css({'background':'blue'});
    $('table tr td:empty').css({'background':'red'});

    // *********** СОБЫТИЯ ************
    // *********** СОБЫТИЯ ************

    $('button').dblclick(function() {
        $('*').css({'background':'white'});
    })
    $('button').mouseenter('click', function() {
        $('*').css({'background':'yellow'});
    })
    $('button').mouseleave('click', function() {
        $('*').css({'background':'white'});
    })

    // события через on() - рекомендуется
    $('button').on('click', function() {
        $('*').css({'background':'black'});
    })

    // работа с формами
    // задаем наименование кнопки как в текстовом поле
    // keyup - любое изменение текстового поля
    $('input[name="text"]').keyup(function() {
        // this - этот объект
        // val()
        let val = $(this).val();
        $('input[name="submit"]').val(val);
    })
    $('form').submit(function() {
        alert('submit');
    })
    // attr
    let atr = $('input[name="text"]').attr('value');
    console.log(atr);

    // спрятать, показать, задержка
    // fadeIn, fadeOut = hide, show (разница в анимации, также в том, что при fade элемент какбы остается)
    /*
    $('form').hide(1000).delay(2000);
    $('form').show(1000);
    */
    $('form').fadeOut(1000).delay(2000);
    $('form').fadeIn(1000);

    // Анимация
    $('div').animate({'width':'50px'}, 2000);

    // resize, dcroll
    $(window).resize(function() {
        let w = $(this).width();
        let h = $(this).height();
        console.log(w, h)
    })
    $(window).scroll(function() {
        console.log('scroll')
    });

    // addClass, removeClass, toggleClass(при повторном действии удаляет класс, при первом добавляет)
    // hover - наведение
    $('p.first').addClass('red');
    $('p.first').hover(function() {
        $(this).addClass('blue');
        $(this).on('click', function() {
            $(this).removeClass('blue');
        })
    })
    $('p.second').click(function() {
        $(this).toggleClass('blue');
    })

    // remove(), empty()
    $('p.first').empty(); // очищает содержимое
    $('p.second').remove(); // полностью удаляет элемент


    // text(), html()
    let text = $('p.second').text(); // Получить текст
    $('p.first').text('Новый текст'); // Задать текст
    let html = $('ul').html(); // Получить html
    console.log(html);

    // append(), prepand(), after(), before()
    $('ul').append('<li>Новая li</li>') // добавляет в конец
    $('ul').prepend('<li>Новая li</li>') // добавляет в начало
    $('ul li:last-child').after('<li>Hello</li>') // добавляет после элемента

    // wrap(), unwrap() - обернуть или убрать обертку (<div>(обертка div)<form></form><div>)
    $('form').wrap('<div class="redBckGr"></div>')

})