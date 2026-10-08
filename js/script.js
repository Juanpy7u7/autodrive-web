/* =========================================
   AUTODRIVE
   JavaScript principal
========================================= */


/* =========================================
   MENÚ RESPONSIVE
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("show");

});


/* =========================================
   CERRAR MENÚ AL HACER CLICK
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});


/* =========================================
   FILTRO DE VEHÍCULOS
========================================= */

const filterButtons = document.querySelectorAll(".filter-button");
const vehicleCards = document.querySelectorAll(".vehicle-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Quitar clase activa */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Activar botón seleccionado */

        button.classList.add("active");

        /* Obtener categoría */

        const filter = button.dataset.filter;

        /* Mostrar u ocultar vehículos */

        vehicleCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "todos" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   MODAL DE VEHÍCULOS
========================================= */

const detailButtons = document.querySelectorAll(".details-button");

const modal = document.getElementById("carModal");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");


const carDescriptions = {

    "Speed GT":
        "El Speed GT representa el concepto de un automóvil deportivo enfocado en rendimiento, aceleración y diseño aerodinámico.",

    "Urban X":
        "El Urban X es un SUV pensado para combinar comodidad, espacio interior y capacidad para diferentes tipos de recorridos.",

    "Classic 68":
        "El Classic 68 está inspirado en los automóviles clásicos que marcaron una época dentro de la industria automotriz.",

    "Raptor R":
        "El Raptor R representa la combinación entre potencia, tecnología y diseño deportivo para una experiencia de conducción emocionante.",

    "Grand X":
        "El Grand X está pensado como un SUV premium que combina espacio, tecnología, comodidad y elegancia.",

    "Roadster 70":
        "El Roadster 70 toma inspiración de los clásicos deportivos de décadas pasadas y los combina con un concepto moderno."
};


/* Abrir modal */

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const carName = button.dataset.car;

        modalTitle.textContent = carName;

        modalDescription.textContent =
            carDescriptions[carName] ||
            "Información no disponible.";

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* Cerrar modal */

modalClose.addEventListener("click", closeModal);


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Cerrar haciendo click fuera */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


/* Cerrar con tecla ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Por favor completa todos los campos.");

        return;

    }


    alert(
        `¡Gracias, ${name}! Tu mensaje ha sido recibido correctamente.`
    );


    contactForm.reset();

});


/* =========================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =========================================
   NAVEGACIÓN ACTIVA
========================================= */

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});