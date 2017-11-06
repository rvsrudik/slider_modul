



var images_div = $('#images');


function ft_createImageTag(src) {
    var img_elem = document.createElement('img');
    img_elem.src = src;
    return (img_elem);
}

function ft_create_slide_obj(src, title, text, stars, author) {
    var obj = {};

    obj.src = src;
    obj.img = ft_createImageTag(src);
    obj.title = title;
    obj.text = text;
    obj.stars = stars;
    obj.author = author.toUpperCase();

    return (obj);
}

var slidesTab = [];

slidesTab.push(ft_create_slide_obj("img/0.jpg", "Title 0", "Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, Desctiption 0, ", 1, "Cameron Dowman"));
slidesTab.push(ft_create_slide_obj("img/raz.png", "Title 1", "Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, Desctiption 1, ", 9, "Pes Sobaka"));
slidesTab.push(ft_create_slide_obj("img/2.png", "Title 2", "Property sets one or more background images for an element By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.", 2, "Vitya Howard"));
slidesTab.push(ft_create_slide_obj("img/3.png", "Title 3" ,"With all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors. Currently v4.0.0-alpha.6. Code licensed MIT, docs CC BY 3.0.", 8, "Divan Vovan"));
slidesTab.push(ft_create_slide_obj("img/4.png", "Title 4", "Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.", 3, "Cameron Dowman"));
slidesTab.push(ft_create_slide_obj("img/5.png", "Title 5", "W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.", 7, "Pes Sobaka"));
slidesTab.push(ft_create_slide_obj("img/6.png", "Title 6", "Property sets one or more background images for an element By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.", 4, "Vitya Howard"));
slidesTab.push(ft_create_slide_obj("img/7.png", "Title 7" ,"With all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors. Currently v4.0.0-alpha.6. Code licensed MIT, docs CC BY 3.0.", 7, "Divan Vovan"));
slidesTab.push(ft_create_slide_obj("img/8.png", "Title 8", "W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.", 5, "Pes Sobaka"));
slidesTab.push(ft_create_slide_obj("img/9.png", "Title 9", "Property sets one or more background images for an element By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.", 6, "Vitya Howard"));


Carousel.init(slidesTab, 0);



var one_star_width = 24;

var left_arrow = $('#left_arrow');
var right_arrow = $('#right_arrow');

var div_image_zero = $('#image_0');
var div_image_left = $('#image_1');
var div_image_center = $('#image_2');
var div_image_right = $('#image_3');

var zero_img = $('#pic_0');
var left_img = $('#pic_1');
var center_img = $('#pic_2');
var right_img = $('#pic_3');

var title_div = $('#title_slider');
var text_div = $('#text_slider');
var author_div = $('#author_slider');
var stars_div = $('#stars');



var central_image_id = 0;


function ft_redeterm_elements() {
    div_image_zero = $('#image_0');
    div_image_left = $('#image_1');
    div_image_center = $('#image_2');
    div_image_right = $('#image_3');

    zero_img = $('#pic_0');
    left_img = $('#pic_1');
    center_img = $('#pic_2');
    right_img = $('#pic_3');

    image_div_width = div_image_center.width();
    side_image_size = left_img.width();
    center_image_size = center_img.width();
}


function ft_move_horisontal(element, distance_percent, speed)
{
    element.animate({
        left: "+=" + distance_percent + "%"
    }, speed);
}

function ft_change_zero_image(zero_image_id, zero_img_div, image_tab) {

    var slides_count = image_tab.length;
    zero_image_id = VrudLib.fixRange(0, slides_count - 1, zero_image_id);
    console.log("back image id = " + zero_image_id);
    var new_zero_img = slidesTab[zero_image_id].img;
    $(new_zero_img).attr('id', 'pic_0');

    return (new_zero_img);
}

function ft_margin_animation(obj, horisontal, vertical, time)
{
    obj.animate({
        marginTop:   (vertical) + 'px',
        marginLeft:   (horisontal) + 'px',
        queue: false
    }, time);
}

function ft_margin_hide_left(obj, time) {
    var obj_width = $(obj).width();

    ft_margin_animation(obj, (obj_width * -2), "+=0", time);
}

function ft_margin_hide_right(obj, time) {
    var obj_width = $(obj).width();

    ft_margin_animation(obj, (obj_width * 2), "+=0", time);
}


function ft_change_title(slide_id) {
    title_div.empty();
    title_div.append(slidesTab[slide_id].title);

}

function ft_change_description(slide_id) {

    $.when(
        text_div.fadeTo( 300, 0.0 )
    ).then(function () {
        text_div.empty();
        text_div.append(slidesTab[slide_id].text);
    }).then(function () {
        text_div.fadeTo( 400, 1.0 )
    });
}

function ft_change_stars(slide_id) {
    var star_line_width;
    var stars_n = slidesTab[slide_id].stars;
    var stars_div = $('#stars');
    star_line_width = stars_n  * one_star_width;

    stars_div.animate({
        width: star_line_width +'px',
        queue: false
    }, 500);
}

function ft_change_author(slide_id) {
    $.when(
    ).then(function () {
        author_div.empty();
        author_div.append(slidesTab[slide_id].author);
    }).then(function () {
    });
}

function ft_change_slide_contant(slide_id)
{
    ft_change_title(slide_id);
    ft_change_description(slide_id);
    ft_change_stars(slide_id);
    ft_change_author(slide_id);
}

right_arrow.on("click", function () {

    ft_redeterm_elements();   //+

    var tmp = ft_change_zero_image(central_image_id - 2,  div_image_zero, slidesTab);  // -2
    central_image_id = VrudLib.fixRange(0, slidesTab.length - 1, central_image_id - 1); // -1

    zero_img = tmp;

    div_image_zero.empty();

    // changing and animation part

    ft_margin_hide_right(title_div, 200);   //margin right
    ft_change_slide_contant(central_image_id);
    ft_margin_hide_left(title_div, 0); // magrin hidht left

    ft_margin_animation(title_div, "0", "+=0", 300);



    Carousel.slide(1);





    div_image_zero.append(zero_img);

    div_image_zero.removeAttr("id").attr({"id" : "image_1"});
    $(zero_img).removeAttr("id").attr({ "id" : "pic_1"});
    div_image_left.removeAttr("id").attr({ "id" : "image_2" });
    left_img.removeAttr("id").attr({ "id" : "pic_2"});
    div_image_right.removeAttr("id").attr({"id" : "image_0"});
    right_img.removeAttr("id").attr({"id" : "pic_0"});
    div_image_center.removeAttr("id").attr({"id" : "image_3"});
    center_img.removeAttr("id").attr({"id" : "pic_3"});

});


left_arrow.on("click", function () {

    ft_redeterm_elements();

    var tmp2 = ft_change_zero_image(central_image_id + 2, div_image_zero, slidesTab);  // +2
    central_image_id = VrudLib.fixRange(0, slidesTab.length - 1, central_image_id + 1); // -1

    zero_img = tmp2;
    div_image_zero.empty();

    ft_margin_hide_left(title_div, 200);  //margin hight left
    ft_change_slide_contant(central_image_id);
    ft_margin_hide_right(title_div, 0); // margin hight right

    ft_margin_animation(title_div, "0", "+=0", 300);


    Carousel.slide(-1);


    div_image_zero.append(zero_img);

    div_image_zero.removeAttr("id").attr({"id" : "image_3"});
    $(zero_img).removeAttr("id").attr({ "id" : "pic_3"});
    div_image_left.removeAttr("id").attr({ "id" : "image_0" });
    left_img.removeAttr("id").attr({ "id" : "pic_0"});
    div_image_right.removeAttr("id").attr({"id" : "image_2"});
    right_img.removeAttr("id").attr({"id" : "pic_2"});
    div_image_center.removeAttr("id").attr({"id" : "image_1"});
    center_img.removeAttr("id").attr({"id" : "pic_1"});
});

