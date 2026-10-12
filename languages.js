// FARMSIE LANGUAGE ADVENTURES
// Phase 2: Language selection

document.addEventListener("DOMContentLoaded", function () {

    const languageScreen = document.getElementById(
        "farmsie-language-screen"
    );

    const languageButtons = document.querySelectorAll(
        "[data-language]"
    );

    languageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedLanguage = button.dataset.language;

            localStorage.setItem(
                "farmsie-selected-language",
                selectedLanguage
            );

            alert(
                "You selected " +
                (selectedLanguage === "es" ? "Spanish!" : "English!")
            );

        });

    });

});
