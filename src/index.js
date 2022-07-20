const toggleHidden = (e) => {
    navBarLinks = document.getElementById("navbarLinks");

    if (navbarLinks.classList.contains("top-[-300px]")) {
        // navbarLinks.classList.remove("top-[-300px]");
        // navbarLinks.classList.add("top-0");

        navbarLinks.classList.replace("top-[-300px]", "top-0");
    } else {
        navbarLinks.classList.replace("top-0", "top-[-300px]");

        // navbarLinks.classList.add("top-[-300px]");
        // navbarLinks.classList.remove("top-0");
    }
};
