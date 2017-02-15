(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // Hamburger menu
        var openBtn = document.getElementsByClassName("openbtn")[0];
        var closeBtn = document.getElementsByClassName("closebtn")[0];
        var nav = document.getElementsByTagName("nav")[0];
        var menuLinks = document.querySelector(".main-menu").getElementsByTagName("a");
        var device = window.matchMedia("screen and (min-width: 769px)");

        function openNav() {
            nav.style.height = "100%";
        }

        function closeNav() {
            nav.style.height = "0%";
        }

        openBtn.addEventListener("click", openNav, false);
        closeBtn.addEventListener("click", closeNav, false);

        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener("click", closeNav, false);
        }


        // Trigger click on menu (bigger screens)
        $(".hover-line").on("click", function(event) {
            window.location.href = $(this).next("a").attr("href");
        });

        // Bigger well on bigger screens
        var well = document.getElementById("join").getElementsByTagName("img")[0];

        if (device.matches) {
            well.setAttribute("src", "img/studnia-big_empty.svg");
        } else {
            well.setAttribute("src", "img/studnia-small_empty.svg");
        }

        window.addEventListener("resize", function(event) {
            if (device.matches) {
                well.setAttribute("src", "img/studnia-big_empty.svg");
            } else {
                well.setAttribute("src", "img/studnia-small_empty.svg");
            }
        });

        //Bigger hands on bigger screens
        var hands = document.getElementById("about").getElementsByTagName("img")[0];

        if (device.matches) {
            hands.setAttribute("src", "img/hands-big.svg");
        } else {
            hands.setAttribute("src", "img/hands.svg");
        }

        window.addEventListener("resize", function(event) {
            if (device.matches) {
                hands.setAttribute("src", "img/hands-big.svg");
            } else {
                hands.setAttribute("src", "img/hands.svg");
            }
        }, false);


        // Text inputs in Contact section on bigger screens
        var p1 = document.querySelector("#contact").querySelectorAll("p")[2];
        var p2 = document.querySelector("#contact").querySelectorAll(".contact-links")[0];
        var p3 = document.getElementsByTagName("footer")[0].querySelectorAll(".col-xs-12")[1].children[0];

        if (device.matches) {
            p1.innerHTML = "kampanie@pah.org.pl&emsp;|&emsp;tel.: 000 000 000";
        } else {
            p1.innerHTML = "kampanie@pah.org.pl</br> tel.: 000 000 000";
        }

        window.addEventListener("resize", function(event) {
            if (device.matches) {
                p1.innerHTML = "kampanie@pah.org.pl&emsp;|&emsp;tel.: 000 000 000";
            } else {
                p1.innerHTML = "kampanie@pah.org.pl</br> tel.: 000 000 000";
            }
        });

        if (device.matches) {
            p2.innerHTML = "<a href='http://www.pah.org.pl/' target='_new'>Polska Akcja Humanitarna</a>&emsp;|&emsp;<a href='http://www.pah.org.pl/kampanieedukacyjne' target='_new'>Kampania Niosę Pomoc</a>";
        } else {
            p2.innerHTML = "<a href='http://www.pah.org.pl/kampanieedukacyjne' target='_new'>Polska Akcja Humanitarna</a>";
        }

        window.addEventListener("resize", function(event) {
            if (device.matches) {
                p2.innerHTML = "<a href='http://www.pah.org.pl/' target='_new'>Polska Akcja Humanitarna</a>&emsp;|&emsp;<a href='http://www.pah.org.pl/kampanieedukacyjne' target='_new'>Kampania Niosę Pomoc</a>";
            } else {
                p2.innerHTML = "<a href='http://www.pah.org.pl/kampanieedukacyjne' target='_new'>Polska Akcja Humanitarna</a>";
            }
        });

        if (device.matches) {
            p3.innerHTML = "<b>projekt graficzny: Kinga Sieminiak&emsp;|&emsp;development: <a href='https://github.com/ka1130' target='_new'>Kamila Matla-Tomczyk</a></b>";
        } else {
            p3.innerHTML = "<b>projekt graficzny: Kinga Sieminiak <br/> development: <a href='https://github.com/ka1130' target='_new'>Kamila Matla-Tomczyk</a></b>";
        }

        window.addEventListener("resize", function(event) {
            if (device.matches) {
                p3.innerHTML = "<b>projekt graficzny: Kinga Sieminiak&emsp;|&emsp;development: <a href='https://github.com/ka1130' target='_new'>Kamila Matla-Tomczyk</a></b>";
            } else {
                p3.innerHTML = "<b>projekt graficzny: Kinga Sieminiak <br/> development: <a href='https://github.com/ka1130' target='_new'>Kamila Matla-Tomczyk</a></b>";
            }
        });

        //Sticky menu
        const fixed = $(".fixed-menu");

        function scrollMenu(event) {
            if ($(window).scrollTop() > 150) {
                fixed.css({ "background-color": "#006fb9" });
            } else {
                fixed.css({ "background": "none" });
            }
        }
        scrollMenu();

        $(document).on("scroll", scrollMenu);

        //Scroll animation
        $(document).on("click", ".link", function(event) {
            event.preventDefault();

            var myId = $(this).attr("href");

            $("html, body").animate({
                scrollTop: $(myId).offset().top - 100
            }, 500);
        });

        //Well animation
        var water = $(".water");
        var newHeight;

        if (device.matches) {
            newHeight = 95 / 100 * water.data("percent");
        } else {
            newHeight = 65 / 100 * water.data("percent");
        }

        $(window).on("scroll", function(event) {

            var yScroll = window.pageYOffset;
            var position = $("#join").offset().top;

            if (yScroll > position) {

                water.animate({
                    height: newHeight
                }, 1000)
            }
        });

        //Equal height of columns
        var heights = $(".frame-rounded").map(function() {
                return $(this).height();
            }).get(),

            maxHeight = Math.max.apply(null, heights);

        $(".frame-rounded").height(maxHeight);










        //end
    }, false)
})();