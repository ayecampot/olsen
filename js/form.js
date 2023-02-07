let form = document.getElementById("form");
      
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
	method: form.method,
	body: data,
	headers: {
		'Accept': 'application/json'
	}
  }).then(response => {
	if (response.ok) {
	  status.innerHTML = "¡Gracias por tu mensaje te responderemos a la brevedad!";
	  form.reset()
	} else {
	  response.json().then(data => {
		if (Object.hasOwn(data, 'errors')) {
		  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
		} else {
		  status.innerHTML = "Oops! Hubo un porblema al enviar tu formulario"
		}
	  })
	}
  }).catch(error => {
	status.innerHTML = "Oops! Hubo un porblema al enviar tu formulario"
  });
}
form.addEventListener("submit", handleSubmit)