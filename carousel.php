<?php
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- google fonts   -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin-ext" rel="stylesheet">
    <!-- my stule   -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Carusel</title>
</head>
<body>


<div class="black_square"></div>





<div id="carousel">
    <div id="carousel_container" class="container-fluid">

        <!--                 TOP PART WITH IMAGES AND ARRAYS   -->
        <div id="top_carousel_container" class="row">
            <!--   left arrow     -->
            <div id="left_arrow" class="col-xs-2">
                <div class="left_arrow_img_container">
                    <img src="img/arrow_left.png" id="arrow_left">
                </div>
            </div>

            <!--    allimages    -->
            <div id="images" class="col-xs-8">
                <!--      here 4 images div creating with JS       -->
            </div>
            <!--      right arrow  -->
            <div id="right_arrow" class="col-xs-2">
                <div>
                    <img src="img/arrow_right.png" id="arrow_right">
                </div>
            </div>
        </div>
    </div>
    <!--               END  TOP PART WITH IMAGES AND ARRAYS   -->
    <div id="title_slider" class=""></div>
    <div id="text_slider"></div>
    <div id="stars"></div>
    <div id="author_slider"></div>












</div>




<div class="black_square"></div>

</body>

<script src="javascript/vrud_lib/vrud_library.js"></script>
<script src="javascript/carusel_module.js"></script>
<script src="javascript/carausel.js"></script>



</html>
