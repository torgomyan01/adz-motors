$(window).on('load', function(){
    getSliderWorking();
    $.getScript('https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js', function(){
        lazyload();
    })
    $('.loadong-site').css('display', 'none');
    $('body').css('overflow','unset');
})
let ArrayWorkingSlider = [
    [
        'ДЕФЕКТОВКА И ДИАГНОСТИКА',
        [
            'car1.jpg',
            'car2.jpg',
            'car3.jpg',
            'car4.jpg',
            'car5.jpg',
            'car6.jpg',
            'car7.jpg',
            'car8.jpg',
        ],
        `Перед тем как начать кузовной ремонт, наши мастера выполняют диагностику и 
        дефектовку повреждений, определяют, какой ремонт необходимо выполнить. 
        Позвоните нам по телефону +7 (495) 545-55-55 и мы выполним правильную оценку вашего Авто! <a href="#">читать далее...</a>`
    ],
    [
        'СЛЕСАРНЫЕ РАБОТЫ',
        [
            'car3.jpg',
            'car2.jpg',
            'car1.jpg',
            'car4.jpg',
            'car5.jpg',
            'car6.jpg',
            'car2.jpg',
            'car8.jpg',
        ],
        `Поставим ваш автомобиль на колеса перед тем как заняться внешним видом! 
        В нашем электромеханическом цехе сосредоточены специализированные мастерские во главе 
        с опытными мастерами АКПП, ДВС, развальные системы и ходовой отдел. <a href="#">читать далее...</a>`
    ],
    [
        'ВЫРАВНИВАНИЕ ГЕОМЕТРИИ',
        [
            'car6.jpg',
            'car2.jpg',
            'car3.jpg',
            'car4.jpg',
            'car5.jpg',
            'car2.jpg',
            'car1.jpg',
            'car8.jpg',
        ],
        `Только высокоточный дорогой стапельный стенд позволяет вернуть заводскую геометрию вашей 
        машины в исходное положение. Обращаясь в АДЗ Моторс, Вы можете быть уверены в точной 
        калибровке Вашего авто! <a href="#">читать далее...</a>`
    ],
    [
        'РИХТОВОЧНЫЕ РАБОТЫ',
        [
            'car8.jpg',
            'car3.jpg',
            'car1.jpg',
            'car4.jpg',
            'car4.jpg',
            'car2.jpg',
            'car2.jpg',
            'car8.jpg',
        ],
        `Металлическое или алюминиевое крыло, которым обернут ваш автомобиль, 
        в умелых руках и с хорошим экспертом может быть реанимировано в исходное положение как ни в 
        чем не бывало! Оно будет выглядеть ничем не хуже новых аналоговых деталей кузова. <a href="#">читать далее...</a>`
    ],
    [
        'ПОДБОР ЦВЕТА НА МЕСТЕ',
        [
            'car3.jpg',
            'car2.jpg',
            'car1.jpg',
            'car4.jpg',
            'car5.jpg',
            'car6.jpg',
            'car2.jpg',
            'car8.jpg',
        ],
        `Быстрый, точный и профессиональный лабораторный стенд выполнит компьютерный подбор цвета Вашего 
        авто - попадание один к одному! У нас вы можете просто заказать краску, лак или абразивы. <a href="#">читать далее...</a>`
    ],
    [
        'ГРУНТОВКА И ПОКРАСКА',
        [
            'car3.jpg',
            'car2.jpg',
            'car1.jpg',
            'car6.jpg',
            'car8.jpg',
            'car4.jpg',
            'car2.jpg',
            'car5.jpg',
        ],
        `Только лучшая барокамера не позволяет мельчайшей пыли проникнуть туда, 
        где ей не место. Система фильтрации, тонкая система циркуляции воздуха при определенной 
        температуре выдают Вам готовое изделие высокого качества. <a href="#">читать далее...</a>`
    ],
    [
        'КАК БУДТО И НИЧЕГО НЕ БЫЛО!',
        [
            'car3.jpg',
            'car2.jpg',
            'car1.jpg',
            'car5.jpg',
            'car1.jpg',
            'car3.jpg',
            'car4.jpg',
            'car8.jpg',
        ],
        `Готово! Умелые руки и новые оригинальные клипсовые системы сделают так, 
        что все легко встанет на свои места в паре с новоиспеченными деталями! 
        Звоните нам +7 (495) 545-55-55 и мы сделаем все, чтобы Ваш автомобиль засиял, как новый! <a href="#">читать далее...</a>`
    ],
]

function getSliderWorking(){
    let transformNumberToWork = -68;
    let arrayNumber = 0;
    let sliderBlock = $('.work-reviewed .work .text-and-image');
    let slTitle = $('.work-reviewed .work .text-and-image .title');
    let slImages = $('.work-reviewed .work .text-and-image .images');
    let slText = $('.work-reviewed .work .text-and-image .text');

    let slSteps = $('.work-reviewed .work .steps .number');
    toClassAdd();
    function toClassAdd(){
        slSteps.removeClass('active');
        $(slSteps[arrayNumber]).addClass('active');
    }

    slTitle.text(ArrayWorkingSlider[arrayNumber][0]);
    slText.html(ArrayWorkingSlider[arrayNumber][2]);
    slImg();
    function slImg(){
        slImages.html(`
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][0] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][1] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][2] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][3] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][4] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][5] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][6] }" alt="">
        <img src="img/work-reviewed/${ ArrayWorkingSlider[arrayNumber][1][7] }" alt="">
    `)
    }


    setInterval(()=>{
        transformNumberToWork += 110;
        arrayNumber++;

        slTitle.text(ArrayWorkingSlider[arrayNumber][0])
        slImg();
        toClassAdd();
        slText.html(ArrayWorkingSlider[arrayNumber][2]);
        
        if($(window).width() >= 425){
            sliderBlock.css('transform', 'translateY('+ transformNumberToWork +'px)');
        }else{
            sliderBlock.css('transform', 'unset');
        }
        if(transformNumberToWork === 592){
            transformNumberToWork = -178;
            arrayNumber = -1;
        }

    },5000)
}

$('.top-bottom .top').on('click', function(){
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 1000,);
})
$('.top-bottom .bottom').on('click', function(){
    var body = $("html, body");
    let b_h = $('body').height();
    body.stop().animate({scrollTop: b_h}, 1000,);
})


$('.close-mobile-menu').on('click', function(){
    $('.mobile-menu').css('transform', 'translateX(100%)');
})
$('.icon-menu-for-close').on('click', function(){
    console.log('da');
    $('.mobile-menu').css('transform', 'translateX(0)');
})


$(window).on('load', function(){
    let offset = $('.menu-site').offset();
    let top = offset.top;
    $(window).on('scroll', function(){
        let windowScrollTop = $(this).scrollTop();
        if(windowScrollTop > top){
            menuFix(true);
        }else{
            menuFix(false);
        }
    })
})



function menuFix(fix){
    if(fix){
        $('.menu-site').addClass('menu-fix');
    }
    if(!fix){
        $('.menu-site').removeClass('menu-fix');
    }
}



$('.video-galery').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  });




  $('.body-img-galery').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 1000,
    centerPadding: '60px',
    centerMode: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });



