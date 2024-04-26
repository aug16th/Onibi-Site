$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop === 0) {
            $('.logo').addClass('opacityZero');
        } else {
            $('.logo').removeClass('opacityZero');
        }
    });
});


// preloader

$(document).ready(function() {
    // Hide content until loaded
    $('#content').hide();

    // Hide loading screen and show content when page is fully loaded
    $(window).on('load', function() {
        $('#loadingScreen').fadeOut('slow', function() {
            $('#content').fadeIn('slow');
        });
    });
});







// $(document).ready(function() {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             console.log(entry);
//             if (entry.isIntersecting) {
//                 $(entry.target).addClass('show');
//                 observer.unobserve(entry.target); // Stop observing after the first intersection
//             } else {
//                 $(entry.target).removeClass('show');
//             }
//         });
//     }, { once: true }); // Ensure the observer runs only once
  
//     $('.hidden').each(function() {
//         observer.observe(this);
//     });
//   });


//   $(document).ready(function() {
//     var headerLogo = $('.logo');

  



// current year


$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});

// navbar active

$('#menu-btn').click(function() {
    $('.navbar').toggleClass('active');
});
