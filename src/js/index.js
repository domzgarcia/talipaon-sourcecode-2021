import $ from 'jquery';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import getHtmlClasses from './helpers/getHtmlClasses';
import all from './pages/all.page';
import home from './pages/home.page';
import './vendors/lazysizes.min.js';
import 'owl.carousel';

(function($, b) {
    // Use this variable to set up the common and page specific functions. If you
    // rename this variable, you will also need to rename the namespace below.
    var Sage = {
        // All pages
        'common': all,
        'home': home,
    };
    // The routing fires all common scripts, followed by the page specific scripts.
    // Add additional events for more control over timing e.g. a finalize event
    var UTIL = {
        fire: (func, funcname, args) => {
            var fire;
            var namespace = Sage;
            funcname = (funcname === undefined) ? 'init' : funcname;
            fire = func !== '';
            fire = fire && namespace[func];
            fire = fire && typeof namespace[func][funcname] === 'function';
            if (fire) namespace[func][funcname](args);
        },
        attach: () => {
            // Fire page-specific init JS, and then finalize JS
            const classes = getHtmlClasses();
            classes.forEach((classnm) => {
                const regex = /-js/g;
                if(classnm.match(regex)){
                    const page = classnm.split('-')[0];
                    UTIL.fire(page);
                    UTIL.fire(page, 'finalize', b);
                }
            });
        },
        loadEvents: () => {
            UTIL.attach();
        }
    };
    // Load Events
    $(document).ready(UTIL.loadEvents);

})(jQuery, bootstrap); // Fully reference jQuery after this point.