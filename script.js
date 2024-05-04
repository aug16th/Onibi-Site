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



window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
      
        if (window.scrollY === 0) {
          header.style.backgroundColor = "transparent";
        } else {
          header.style.backgroundColor = "black";
        }
      });




  



// current year


$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});

// navbar active

$('#menu-btn').click(function() {
    $('.navbar').toggleClass('active');
});
