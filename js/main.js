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
    modalImage.src = imgElement.src; 
    modal.style.display = 'flex'; 
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault(); 

    // Obtener los datos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    
    if (!nombre || !apellido || !email || !mensaje) {
        alert("Por favor completá todos los campos.");
        return;
    }

    const texto = `Hola, soy ${nombre} ${apellido}. Mi correo es: ${email}. Quería decir: ${mensaje}`;
    const mensajeWhatsApp = encodeURIComponent(texto);
    const telefono = "3853007788"; 

    window.open(`https://wa.me/${telefono}?text=${mensajeWhatsApp}`, "_blank");

    // Limpiar los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
});
