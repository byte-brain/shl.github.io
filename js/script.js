<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    $(document).ready(function() {
        $(window).on('load scroll', function() {
            var windowHeight = $(window).height();
            var windowTopPosition = $(window).scrollTop();
            var windowBottomPosition = (windowTopPosition + windowHeight);
    
            $('.fade').each(function() {
                var element = $(this);
                var elementHeight = element.outerHeight();
                var elementTopPosition = element.offset().top;
                var elementBottomPosition = (elementTopPosition + elementHeight);
    
                // Check if the element is within the viewport
                if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
                    element.addClass('show');
                }
            });
        });
    });

