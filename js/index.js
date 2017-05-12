console.log("hello, world!");
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-title').removeClass('active');
        $('.accordion .accordion-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});