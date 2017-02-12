(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // Hamburger menu
        const openBtn = document.getElementsByClassName("openbtn")[0];
        const closeBtn = document.getElementsByClassName("closebtn")[0];
        const nav = document.getElementsByTagName("nav")[0];

        function openNav() {
            nav.style.height = "100%";
        }

        function closeNav() {
            nav.style.height = "0%";
        }

        openBtn.addEventListener("click", openNav, false);
        closeBtn.addEventListener("click", closeNav, false);

    }, false)

    // Trigger clock on menu (bigger screens)
    $(".hover-line").on("click", function(event) {
        window.location.href = $(this).next("a").attr("href");
    });

    // Bigger well on bigger screens
    const device = window.matchMedia("screen and (min-width: 769px)");
    const well = document.getElementById("join").getElementsByTagName("img")[0];

    if (device.matches) {
        well.setAttribute("src", "img/studnia-big.svg");
    } else {
        well.setAttribute("src", "img/studnia.svg");
    }

    window.addEventListener("resize", () => {
        if (device.matches) {
            well.setAttribute("src", "img/studnia-big.svg");
        } else {
            well.setAttribute("src", "img/studnia.svg");
        }
    });





    //end
})();