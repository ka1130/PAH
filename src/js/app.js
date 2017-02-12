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

    // Text inputs in Contact section on bigger screens
    const p1 = document.querySelector("#contact").querySelectorAll("p")[2];
    const p2 = document.querySelector("#contact").querySelectorAll(".contact-links")[0];

    if (device.matches) {
        p1.innerHTML = "kampanie@pah.org.pl&emsp;|&emsp;tel.: 000 000 000";
    } else {
        p1.innerHTML = "kampanie@pah.org.pl</br> tel.: 000 000 000";
    }

    window.addEventListener("resize", () => {
        if (device.matches) {
            p1.innerHTML = "kampanie@pah.org.pl&emsp;|&emsp;tel.: 000 000 000";
        } else {
            p1.innerHTML = "kampanie@pah.org.pl</br> tel.: 000 000 000";
        }
    });

    if (device.matches) {
        p2.innerHTML = "<a href='#' target='_new'>Polska Akcja Humanitarna</a>&emsp;|&emsp;<a href='#' target='_new'>Kampania Niosę Pomoc</a>";
    } else {
        p2.innerHTML = "<a href='#' target='_new'>Polska Akcja Humanitarna</a>";
    }

    window.addEventListener("resize", () => {
        if (device.matches) {
            p2.innerHTML = "<a href='#' target='_new'>Polska Akcja Humanitarna</a>&emsp;|&emsp;<a href='#' target='_new'>Kampania Niosę Pomoc</a>";
        } else {
            p2.innerHTML = "<a href='#' target='_new'>Polska Akcja Humanitarna</a>";
        }
    });






    //end
})();