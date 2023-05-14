   var swiper = new Swiper(".mySwiper", {
    // direction: "vertical",
      slidesPerView: 2,
      spaceBetween: 20,
     mousewheel: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
   //      scrollbar: {
   //     el:'.swiper-scrollbar',
   //     draggable: true,
   //   },
    //   navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev",
    //         },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
    });

     var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
    });


     