var Carousel = (function () {

    var images_block = $('#images');
    var title_div = $('#title_slider');
    var text_div = $('#text_slider');
    var author_div = $('#author_slider');
    var stars_div = $('#stars');
    var one_star_width = 24;


    // Creationg part with images between arrows.
    var init_images = function(images_block, slides_tab, current_slide) {
        // There are 4 <div> block. Every div has <img> tag that contains slide image.
        // First <div> lies behaind central image and comes out during animation;
        // Div images go in order: image_0(hidden), image_1(left), image_2(central), image_3(right);
        // Central image is third element in HTML structure. So first element should be 2 less than central;
        var current_image_id = current_slide - 2;
        var i = 0;

        while (i <= 3)
        {
            current_image_id = VrudLib.fixRange(0, slides_tab.length - 1, current_image_id);

            var img = document.createElement('img');
            img.src = slides_tab[current_image_id].src;
            img.id = "pic_" + i;

            var image_container = VrudLib.createElem('div', "image_" + i, ["slider_images"], "");
            image_container.append(img);

            images_block.append(image_container);

            current_image_id++;
            i++;
        }
    };

    // Fill part with other curernt slide info.
    var init_info = function(slide_obj) {
        var star_line_width;
        var stars_amount = slide_obj.stars;

        title_div.append(slide_obj.title);
        text_div.append(slide_obj.text);
        author_div.append(slide_obj.author);
        star_line_width = stars_amount  * one_star_width;
        stars_div.css("width", star_line_width);
    };


    var init = function (slides_tab, current_slide) {
        current_slide = VrudLib.fixRange(0, slides_tab.length - 1, current_slide);
        init_images(images_block, slides_tab, current_slide);
        init_info(slides_tab[current_slide]);
    };

    var animate_slide_left_1 = function () {
        ft_move_horisontal(div_image_zero, 33.333333, 500);
        ft_move_horisontal(div_image_left, 33.333333, 500);
        ft_move_horisontal(div_image_center, -33.333333, 500);
        ft_move_horisontal(div_image_right, -33.333333, 500);

        right_img.animate({
            height: center_image_size,
            width: center_image_size,
            margin: "0"
        }, 500);

        center_img.animate({
            height: side_image_size,
            width: side_image_size,
            marginBottom: "17px",
            marginTop: "18px"
        }, 500);
    };

    var animate_slide_right_1 = function () {
        ft_move_horisontal(div_image_zero, -33.333333, 500);
        ft_move_horisontal(div_image_left, 33.333333, 500);
        ft_move_horisontal(div_image_center, 33.333333, 500);
        ft_move_horisontal(div_image_right, -33.333333, 500);

        left_img.animate({
            height: center_image_size,
            width: center_image_size,
            margin: "0"
        }, 500);

        center_img.animate({
            height: side_image_size,
            width: side_image_size,
            marginBottom: "17px",
            marginTop: "18px"
        }, 500);
    };



    var animate_slide_left_2 = function () {
        ft_move_horisontal(div_image_zero, 66.66666, 0);
        ft_move_horisontal(div_image_zero, -33.66666, 500);
        ft_move_horisontal(div_image_left, -33.333333, 500);
        ft_move_horisontal(div_image_left, 66.333333, 0);

        ft_move_horisontal(div_image_center, -33.333333, 500);
        ft_move_horisontal(div_image_right, -33.333333, 500);

        right_img.animate({
            height: center_image_size,
            width: center_image_size,
            margin: "0"
        }, 500);

        center_img.animate({
            height: side_image_size,
            width: side_image_size,
            marginBottom: "17px",
            marginTop: "18px"
        }, 500);
    };


    var animate_slide_right_2 = function () {

        ft_move_horisontal(div_image_zero, -66.66666, 0);
        ft_move_horisontal(div_image_left, 33.333333, 500);
        ft_move_horisontal(div_image_center, 33.333333, 500);
        ft_move_horisontal(div_image_right, 33.333333, 500);
        ft_move_horisontal(div_image_right, -66.333333, 0);
        ft_move_horisontal(div_image_zero, 33.66666, 500);

        left_img.animate({
            height: center_image_size,
            width: center_image_size,
            margin: "0"
        }, 500);

        center_img.animate({
            height: side_image_size,
            width: side_image_size,
            marginBottom: "17px",
            marginTop: "18px"
        }, 500);
    };

    var animate_slide_right = function(){
        animate_slide_right_2();
    };

    var animate_slide_left = function(){
        animate_slide_left_2();
    };

    var slide = function (direction) {  //direction can be only "-1"(move left) or "1"(move right)
        if (direction === -1)
        {
            animate_slide_left();
        }
        else if (direction === 1)
        {
            animate_slide_right();
        }
    };

    return {
        init: init,
        slide: slide
    };

})();

