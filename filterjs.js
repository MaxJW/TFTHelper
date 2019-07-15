function allItemsDisplay(thsVal, e) {
    var itch = $('table.item-combo-list tr');
    var i = $('img', e);

    $(".item-selection-list>li>img.active").not(i).removeClass("active");
    itch.css('display', 'none');

    if (i.hasClass('active')) {
        i.removeClass('active');
        itch.hide().filter('.thi').show();
    } else {
        i.addClass('active');
        itch.hide().filter('.' + thsVal).show();
        if ($(window).height() <= 800) {
            $('html,body').animate({ scrollTop: $(".item-combo-list").offset().top }, 'slow');
        }
    }

    //Table Colouring
    $("table.item-combo-list tr").css("background-color", "#fff");
    $("table.item-combo-list tr:visible:odd").css("background-color", "rgb(245, 245, 245)");
}

function allClassesDisplay(thsVal, e) {
    var cli = $('ul.champions-selection-list li');
    var i = $('img', e);

    $(".class-selection-list>li>img.active").not(i).removeClass("active");
    cli.css('display', 'none');

    if (i.hasClass('active')) {
        i.removeClass('active');
        cli.show();
    } else {
        i.addClass('active');
        cli.hide().filter('.' + thsVal).show();
    }

    //Table Colouring
    //$("table.item-combo-list tr").css("background-color", "#fff");
    //$("table.item-combo-list tr:visible:odd").css("background-color", "rgb(245, 245, 245)");
}

function allOriginsDisplay(thsVal, e) {
    var cli = $('ul.champions-selection-list li');
    var i = $('img', e);

    $(".origins-selection-list>li>img.active").not(i).removeClass("active");
    cli.css('display', 'none');

    if (i.hasClass('active')) {
        i.removeClass('active');
        cli.show();
    } else {
        i.addClass('active');
        cli.hide().filter('.' + thsVal).show();
    }

    //$("table.item-combo-list tr").css("background-color", "#fff");
    //$("table.item-combo-list tr:visible:odd").css("background-color", "rgb(245, 245, 245)");
}