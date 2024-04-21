$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop === 0) {
            $('.').addClass('expanded');
        } else {
            $('.').removeClass('expanded');
        }
    });
});

$(document).ready(function() {
    var lastScrollTop = 0;
    var navbar = $('');

    // Hide the navbar by default when the page loads
    navbar.addClass('opacityZero');

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            navbar.removeClass('opacityZero');
        } else {
            if (st <= 0) {
                navbar.addClass('opacityZero');
            }
        }
        lastScrollTop = st;
    });
    
    // Additional code to handle smooth appearance and disappearance of the header
    function toggleHeaderVisibility() {
        if (navbar.hasClass('opacityZero')) {
            navbar.removeClass('opacityZero').addClass('opacityOne');
        } else {
            navbar.removeClass('opacityOne').addClass('opacityZero');
        }
    }

    $(window).scroll(function() {
        toggleHeaderVisibility();
    });
});
