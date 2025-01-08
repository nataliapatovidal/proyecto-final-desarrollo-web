const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar",);

abrir.addEventListener("click", () => {
    nav.classList.add("visible"); 
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function openImageModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imgElement.src; // Toma la imagen desde el carrusel
    modal.style.display = 'flex'; // Muestra el modal
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Oculta el modal
}
