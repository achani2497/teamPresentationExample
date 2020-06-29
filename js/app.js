document.getElementById('consulta').onsubmit = function(e){

    e.preventDefault()

    let mensaje = {
        nombre: document.getElementById('nombre').value,
        mail: document.getElementById('mail').value,
        texto: document.getElementById('texto').value
    }

    alert('Estarias mandando el siguiente mensaje:\n\nNombre: '+ mensaje.nombre + '\nMail: '+ mensaje.mail + '\nConsulta: '+ mensaje.texto)

}