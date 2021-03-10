var btn_menu = $("a > i.fa-bars");

btn_menu.click(function() {
    var btn_Hamburger = $("div.hamburger-menu");
    btn_Hamburger.toggle("display");

});

var btn_menu_toogle = $("a > i.fa-times");

btn_menu_toogle.click(function() {
    var btn_Hamburger = $("div.hamburger-menu");
    btn_Hamburger.toggle("display");

});
