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
        console.log($(this).next());
        window.location.href = $(this).next('a').attr('href');
    });
})();