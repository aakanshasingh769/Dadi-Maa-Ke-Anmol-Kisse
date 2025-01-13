// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page is fully loaded and ready!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth",
                });
            }
        });
    });

    // Log an event when the user clicks on the YouTube channel link
    const youtubeLink = document.querySelector('a[href*="youtube.com"]');
    if (youtubeLink) {
        youtubeLink.addEventListener("click", function () {
            console.log("User visited the YouTube channel.");
        });
    }
});
