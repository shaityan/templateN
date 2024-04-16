jQuery(function ($) {
    function getDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

        console.log(userAgent); // "mobile" or "desktop"
        if (isMobile) {
            const pageHeight = 2*document.documentElement.clientHeight;
            $('.topper-table-mob').removeAttr('style');
            $('.topper-table-mob').attr('style', 'height:' + pageHeight + 'px;');

        } else {
            $('.topper-table').removeAttr('style');
        }
    }

    window.onload = function () {
        getDeviceType();
    }
});

