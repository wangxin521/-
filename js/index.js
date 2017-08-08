/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(event){
        $(this).css('color','#fff');
    }).mouseout(function(){
        $(this).css('color','#a4b094');
    })
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');
       }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
       }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({
            'color':'#fff',
            'background':'orange'
        })
    }).mouseout(function(){
        $(this).css({
            'color':'#757575',
            'background':'#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({
               'background':'#fff',
               'color':'#000',
               'border':'1px solid #ccc',
               'border-left':'none'
           })
       }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function(){
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })
    // 小米明星效果  左右换页
    $('.starL').click(function () {
        $('.starOver').addClass('hide');
        $('.starBi').removeClass('hide')
    })
    $('.starR').click(function () {
        $('.starBi').addClass('hide');
        $('.starOver').removeClass('hide')
    })
    // 橙色框隐藏显示
    $('.Right li').mouseover(function () {
        $(this).find('.slideDiv').stop(false).slideDown('fast');
    }).mouseout(function () {
        $(this).find('.slideDiv').stop(true).slideUp('fast');
    })
    // 搭配 周边 配件 tab转换
    $('.collX1 span').mouseover(function(){$('.tableA .Right').
    eq($(this).index()).removeClass('hide').siblings().addClass('hide');})
    $('.collX2 span').mouseover(function(){$('.tableB .Right').
    eq($(this).index()).removeClass('hide').siblings().addClass('hide');})
    $('.collX3 span').mouseover(function(){$('.tableC .Right').
    eq($(this).index()).removeClass('hide').siblings().addClass('hide');})
    // 视频效果
    $('.videoLi li').mouseover(function () {
        $(this).find('i').css('color','rgb(255,103,0)');
    }).mouseout(function () {
        $(this).find('i').css('color','#fff')
    })
    /*---------------为你推荐----------------*/
    var i=0
    $('.staR').click(function () {
        $(this).css('color','#b0b4bc')
        i++;
        if(i > 3){
            i=3
        }
        $(this).parent().find('ul').css('marginLeft',(-1226 * i) +'px');
    }).mouseover(function () {
        if (i=3){
            $(this).css('color','#e0e0e0')
        }else{
            $(this).css('color','#ff6700')
        }
    }).mouseout(function () {
        $(this).css('color','#b0b4bc')
    })
    $('.staL').click(function () {
        $(this).css('color','#b0b4bc')
        i--;
        if(i < 0){
            i=0
        }
        $(this).parent().find('ul').css('marginLeft',(-1226 * i) +'px');
    }).mouseover(function () {
        if (i=0){
            $(this).css('color','#e0e0e0')
        }else{
            $(this).css('color','#ff6700')
        }
    }).mouseout(function () {
        $(this).css('color','#b0b4bc')
    })

// 内容轮播
    //   左右尖括号显示隐藏
    $('.thouList li').mouseover(function () {
        $(this).find('.p2').show();
    }).mouseout(function () {
        $('.p2').hide();
    })
    // p小圆点点
    $('.thouList .round p').click(function () {
        $(this).parents('.cont').find('.thouBox').css('marginLeft',(-296 * $(this).index()) +'px')
        $(this).addClass('wx').siblings().removeClass('wx');
    })
    // 左右尖括号手动轮播
    var i=0;
    $('.cont .r2').click(function () {
        console.log($('.cont r2'))
        i++;
        if(i > 3){
            i = 3;
        }
        $(this).parents('.cont').find('.thouBox').css('marginLeft',(-296 * i)+'px')
        $(this).parent().children('.round').children('p').eq(i).addClass('wx').siblings().removeClass('wx');
    })
    $('.cont .r1').click(function () {
        i --;
        if (i < 0){
            i = 0;
        }
        $(this).parents('.cont').find('.thouBox').css('marginLeft',(-296 * i)+'px')
        $(this).parent().children('.round').children('p').eq(i).addClass('wx').siblings().removeClass('wx');
    })
})