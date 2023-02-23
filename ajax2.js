console.log("correcto")
    //modo de imprimir en la Console F12 del navegador

//el #boton para poder traer el nombre de HTML del boton
//Detectar el evento con addevenlistener
/**
 * se le quita el  traerDatos() sin los () para que
 * la funcion se ejecute mediante el boton y NO DE MANERA
 * AUTOMATICA CON EL  traerDatos()
 */
document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    //  console.log('dentro de la función');

    //AJAX

    //decalarar constante con nueva instancia( = new XMLHttpREquest())
    const xhttp = new XMLHttpRequest();

    //le damos los parametros de metodo (get , en donde esta alojado "catalogo.json", y true)
    xhttp.open('GET', 'catalogo.json', true);

    //enviamos la solicitud
    xhttp.send();

    //AJAX DONDE TRAEMOS EL JSON EN EL RESPONSETEXT
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            //respuesta por console en texto ""

            // console.log(this.responseText);
            //cambiar datos de xhttp a JSON osea en ARRAYS
            /*Las peticiones JSON son lo que se conoce
            como ARRAYS en la CONSOLE F12 del navegador */
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            /**
             * IMPORTANTE !! 
             * traemos el id de la tabla de HTML EN EL '#RES' SIEMPRE CON EL #
             * donde el query traera independiente los datos
             */
            let res = document.querySelector('#res');
            //comienza las respuestas en 0 IMPORTANTE EL innerHTML
            res.innerHTML = ''; //comienza en 0 la tabla

            // declarar variable item of osea de los datos !!!
            /**
             * En esta zona podemos hacer uso de lo que son los ARRAYS
             * de manera independiente del JSON, 
             * aca podemos IMPRIMIR EN EL HTML CADA UNO
             */
            for (let item of datos) {
                console.log(item.artista); //ejemplo de como tratar solo unos items del JSON osea solo trae los artistas
                //ciclo for por cada cilo agg nueva info con el +=
                res.innerHTML += `
                <tr>
                <td>${item.nombre}</td>
                <td>${item.consola}</td>
                <td>${item.rol}</td>
              </tr>
                `
            }
        }
    }
}