$(document).ready(function() {
    const $navigation = $('#navigation'),
        $tooltip = $('[data-toggle="tooltip"]'),
        $window = $(window),
        $sidebar = $('.sidebar'),
        fixedClass = ('fixed');

    $navigation.collapse({
        toggle: false
    });
    $tooltip.tooltip({
        template: '<div class="tooltip sidebar-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });

    $window.scroll(function() {
        let windowScrollPosTop = $window.scrollTop();

        (windowScrollPosTop >= 150) ? $sidebar.addClass(fixedClass) : $sidebar.removeClass(fixedClass);
    });
});

