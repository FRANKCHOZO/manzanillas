document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
    const surpriseButton = document.getElementById("surpriseButton");
    const petals = document.getElementById("petals");
    const finalMessage = document.getElementById("finalMessage");
    const audio = document.getElementById("myAudio");

    // Al hacer clic en "Comenzar"
    if (startButton) {
        startButton.addEventListener("click", function () {
            welcomeScreen.style.display = "none";
            mainContent.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Iniciar reproducción al interactuar con el botón Comenzar
            if (audio) {
                audio.play().catch(function (error) {
                    console.log("El navegador requiere usar los controles del reproductor:", error);
                });
            }
        });
    }

    // Lluvia de girasoles
    if (surpriseButton) {
        surpriseButton.addEventListener("click", function () {
            for (let i = 0; i < 50; i++) {
                createPetal();
            }

            setTimeout(function () {
                finalMessage.classList.remove("hidden");
                finalMessage.scrollIntoView({ behavior: 'smooth' });
            }, 3000);
        });
    }

    function createPetal() {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.textContent = "🌻";
        
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (2.5 + Math.random() * 3.5) + "s";

        petals.appendChild(petal);

        setTimeout(function () {
            petal.remove();
        }, 6500);
    }
});
