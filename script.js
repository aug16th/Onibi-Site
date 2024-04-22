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


$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var header = $('header');

        // Define the background color when scrolled away from the top
        var scrolledBackgroundColor = 'black'; 

        // Define the background color when at the top
        var topBackgroundColor = 'transparent';

        // Check if the user has scrolled away from the top of the page
        if (scrollTop === 0) {
            header.css('backgroundColor', topBackgroundColor); // Set background color to transparent if at the top
        } else {
            header.css('backgroundColor', scrolledBackgroundColor); // Set background color when scrolled away from the top
        }
    });
});





$(document).ready(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
                observer.unobserve(entry.target); // Stop observing after the first intersection
            } else {
                $(entry.target).removeClass('show');
            }
        });
    }, { once: true }); // Ensure the observer runs only once
  
    $('.hidden').each(function() {
        observer.observe(this);
    });
  });


  $(document).ready(function() {
    var headerLogo = $('.logo');

    // Function to adjust logo size for larger screens
    function adjustLogoSize() {
        headerLogo.addClass('adjusted'); // Add the 'adjusted' class to the logo for larger screens
        $(window).off('scroll', adjustLogoSize); // Remove the scroll event listener
    }

    // Function to adjust logo size for smaller screens
    function adjustLogoSizeMobile() {
        headerLogo.addClass('adjusted-mobile'); // Add the 'adjusted-mobile' class to the logo for smaller screens
        $(window).off('scroll', adjustLogoSizeMobile); // Remove the scroll event listener
    }

    // Listen for the scroll event
    $(window).scroll(function() {
        if ($(window).width() <= 768) {
            adjustLogoSizeMobile(); // Apply logo size adjustment for smaller screens
        } else {
            adjustLogoSize(); // Apply logo size adjustment for larger screens
        }
    });
});

  



// current year


$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});