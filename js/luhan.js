/**
 * Created by Administrator on 2016/8/5.
 */


$(function () {
    //firsePage
    $(".person2").animate({"right": "30px"}, 1000, function () {//slogo变大
        $(".slogo").animate({"width":"600px"},800, function () {
            $(".slogo").animate({"width":"500px"},700,function(){
                $(".slogo").animate({"width":"550px"},600)
            })
        })
    });
//音乐一直转

    //$(".music2").rotate();
    //$(".music1").rotate();

    setInterval(function () {
        $(".music1").animate({
            rotate:"360"
        },4000,"linear");
    },1000)
    setInterval(function () {
        $(".music2").animate({
            rotate:"-360"
        },4000,"linear");
    },1000)

//视频
    $(".music1").click(function () {
        $("video").fadeToggle(1000);
    })




    $(document).scroll(function () {
        //nav消失
        $(".luhan-nav").fadeOut(1000);
        if($(document).scrollTop()===0){
            $(".luhan-nav").fadeIn(1000);
        }
        if($(document).scrollTop()>80&&$(document).scrollTop()<95){
            $(".secondPage-img-left").fadeIn(1000, function () {
                $(".secondPage-img-left").animate({
                    "left":"20px"
                },1500);
            })
        }

        if ($(document).scrollTop()>990&&$(document).scrollTop()<1000){
            //thirdPage
            //门店信息左右晃

            $(".third-top img").stop(false,true).animate({"left": "-80px"}, 1000, function () {
                    $(".third-top img").stop(false,true).animate({"left": "50px"}, 800, function () {
                        $(".third-top img").stop(false,true).animate({"left": 0}, 500)
                    })
                })

        }


    });

    //第二页彩色圆点滑过出现白边框
    $(".circle a").mouseenter(function () {
        $(this).css({
            "width":"16px",
            "height":"16px",
            "border":"2px solid white"
        })
    });
    $(".circle a").mouseleave(function () {
        $(this).css({
            "width":"20px",
            "height":"20px",
"border":"0"
        })
    });
//第二页滑过背景图，背景图改变
    $(".product-1").click(function(){
        $(this).children(".p-t-1").stop(false,true).fadeToggle(800, function () {
            $(".p-b-1").stop(false,true).fadeToggle(800);
        });
    })
    $(".product-2").click(function(){
        $(this).children(".p-t-2").stop(false,true).fadeToggle(800, function () {
            $(".p-b-2").stop(false,true).fadeToggle(800);
        });
    })
    $(".product-3").click(function(){
        $(this).children(".p-t-3").stop(false,true).fadeToggle(800, function () {
            $(".p-b-3").stop(false,true).fadeToggle(800);
        });
    })
    $(".product-4").click(function(){
        $(this).children(".p-t-4").stop(false,true).fadeToggle(800, function () {
            $(".p-b-4").stop(false,true).fadeToggle(800);
        });
    })
    //$(".product-1").click(function(){
    //    $(this).children(".p-t-1").fadeOut(1000, function () {
    //        $(".p-b-1").fadeIn(1000);
    //    });
    //})


//鼠标经过门店左右晃
    $(".third-top img").mouseenter(function () {

            $(".third-top img").stop(false,true).animate({"left": "-80px"}, 1000, function () {
                $(".third-top img").stop(false,true).animate({"left": "50px"}, 800, function () {
                    $(".third-top img").stop(false,true).animate({"left": 0}, 500)
                });
            });
    });

//更多门店上移
    $(".third-more img").lazyload().animate({
        "top":"0"
    },10000)


//鼠标移动到门店图片变大
//    $(".pic-1").mouseenter(function(){
//        $(".pic-1 img").stop().animate({
//            "width":"600px",
//        })
//    });
//    $(".pic-2").mouseenter(function(){
//        $(".pic-2 img").stop().animate({
//            "width":"600px",
//        })
//    });
//    $(".pic-3").mouseenter(function(){
//        $(".pic-3 img").stop().animate({
//            "width":"600px",
//        })
//    });
//    $(".pic-4").mouseenter(function(){
//        $(".pic-4 img").stop().animate({
//            "width":"600px",
//        })
//    });
//    $(".pic-1,.pic-2,.pic-3,.pic-4").mouseleave(function(){
//        $(".pic-1 img,.pic-2 img,.pic-3 img,.pic-4 img").stop().animate({
//            "width":"580px"
//        })
//    });
    $(".third-more").click(function(){
        $(".pic").slideDown(1000);
        //门店旋转木马
        var config = [
            {
                width: 400,
                top: 20,
                left: 50,
                opacity: 0.2,
                zIndex: 2
            },//0
            {
                width: 500,
                top: 90,
                left: 0,
                opacity: 0.8,
                zIndex: 3
            },//1
            {
                width: 650,
                top: 150,
                left: 200,
                opacity: 1,
                zIndex: 4
            },//2
            {
                width: 500,
                top: 90,
                left: 600,
                opacity: 0.8,
                zIndex: 3
            },//3
            {
                width: 400,
                top: 20,
                left: 750,
                opacity: 0.2,
                zIndex: 2
            }//4
        ];

        var lis=$(".pic li")
        //左右键头显示
        $(".pic").mouseover(function () {
            $(".arrow-3").animate({
                "opacity": 1
            },500)
        })
        $(".pic").mouseleave(function () {
            $(".arrow-3").animate({
                "opacity": 0
            },500)
        })
//封装图片到各自位置的函数
        function xuanzhuan(){
            for (var i = 0; i < lis.length; i++) {
                $(lis[i]).animate(config[i],1000, function () {
                    flag=true;
                })
            }
        }
        //先调用一次让图片移到各自位置
        xuanzhuan();

var flag=true;
//箭头点击事件
        $("#arrRight").click (function () {
            //点击右箭头 删除第一个 追加到最后
            if(flag){
                flag=false;
                config.push(config.shift());
                xuanzhuan();

            }
        });
        $("#arrLeft").click (function () {
            //点击做箭头 删除最后一个 追加到开始
            if(flag) {
                flag = false;
                config.unshift(config.pop());
                xuanzhuan();
            }
        });
    })






});
