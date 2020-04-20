var $navbar = $ ( '.navbar' ),
$landing_link = $ ( '#home-link' ),
$nav_links = $ ( '.nav-link' )


/* Options for the observer (which mutations to observe) */
const config = { attributes: true, childList: false, subtree: false, attributeFilter: ['class'] };

/* Callback function to execute when mutations are observed */
const landing_callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.attributeName === "class") {
            var class_list = mutation.target.className;
            // Split class list string into an array
            var class_array = class_list.split(' ');
            // Check if 'active' is in the class list
            if (class_array.includes('active')) {
                $navbar.hide();
            } 
            else {
                $navbar.show();
            }
        }
    }
};

/* Callback function to execute when mutations are observed */
const nav_callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.attributeName === "class") {
            var class_list = mutation.target.className;
            // Split class list string into an array
            var class_array = class_list.split(' ');
            // Check if 'active' is in the class list
            if ((class_array.includes('active')) && (class_array.includes('odd-link'))) {
                $navbar.css("background-color", "black");
                $nav_links.css(
                    {
                        "color": "white",
                        "font-weight": "normal"
                    }
                );
                $ ( 'a.nav-link.odd-link.active' ).css(
                    {
                        "color": "#800020",
                        "font-weight": "bold"
                    }
                );
                $nav_links.hover(function(){
                    $(this).css({"color":"grey"});
                    }, function(){
                    $(this).css("color", "white");
                    $ ( 'a.nav-link.odd-link.active' ).css(
                        {
                            "color": "#800020",
                            "font-weight": "bold"
                        }
                    );
                });
            }
            else if ((class_array.includes('active')) && (class_array.includes('even-link'))) {
                $navbar.css("background-color", "white");
                $nav_links.css(
                    {
                        "color": "black",
                        "font-weight": "normal"
                    }
                );
                $ ( 'a.nav-link.even-link.active' ).css(
                    {
                        "color": "#800020",
                        "font-weight": "bold"
                    }
                );
                $nav_links.hover(function(){
                    $(this).css("color", "grey");
                    }, function(){
                    $(this).css("color", "black");
                    $ ( 'a.nav-link.even-link.active' ).css(
                        {
                            "color": "#800020",
                            "font-weight": "bold"
                        }
                    );
                });
            }
        }
    }
};

/* Create an observer instance linked to the callback function */
const landing_observer = new MutationObserver(landing_callback);
const nav_observer = new MutationObserver(nav_callback);

/* Start observing the target nodes for configured mutations */
landing_observer.observe($landing_link[0], config);
$nav_links.each(function(i) {
    nav_observer.observe($nav_links[i], config);
})
