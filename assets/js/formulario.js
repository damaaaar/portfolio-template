const formulario = document.getElementById("contacto__formulario");

formulario.addEventListener("submit", enviarMensaje);

async function enviarMensaje(evento) {
  evento.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    window.location.href = "assets/pantallas/correcto.html";
  } else {
    window.location.href = "assets/pantallas/error.html";
  }
}

const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");

inputNombre.addEventListener("blur", () => {
  if (inputNombre.value === "") {
    inputNombre.classList.add("vacio");
    inputNombre.placeholder = "Elemento necesario";
    return;
  }
  inputNombre.classList.remove("vacio");
  inputEmail.placeHolder = "Nombre";
});

inputEmail.addEventListener("blur", () => {
  if (inputEmail.value === "") {
    inputEmail.classList.add("vacio");
    inputEmail.placeholder = "Elemento necesario";
    return;
  }
  inputEmail.classList.remove("vacio");
  inputEmail.placeHolder = "Email";
});

inputMensaje.addEventListener("blur", () => {
  if (inputMensaje.value === "") {
    inputMensaje.classList.add("vacio");
    inputMensaje.placeholder = "Elemento necesario";
    return;
  }
  inputMensaje.classList.remove("vacio");
  inputEmail.placeHolder = "Mensaje";
});
