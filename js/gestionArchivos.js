var archivos = []
var rutas = []
var cont = 0;

function cambio(e) {
    var chooser = document.getElementById("" + e)
    var fileSize = chooser.files[0].size;
    var siezekiloByte = parseInt(fileSize / 1024);
    if (siezekiloByte > chooser.getAttribute('size')) {
        swal({
            title: "Error!",
            text: "Archivo muy grande",
            icon: "error",
            button: "Volver a intentar",
        });
        return false;
    } else {

        chooser.files[0];

        var path = document.getElementById("" + e).files[0].name;
        rutas.push(path)
        var archivoCorrecto = true;
        if (archivos.length == 0) {
            archivos.push(chooser.files[0]);
            var info = document.getElementById('infofile');
            info.innerHTML += '<b> ' + path + '  <i class="fas fa-trash" id="papelera ' + cont + '" style="color:red" onclick="eliminar(id)"></i><b>';
            cont++;
        } else if (archivos.length > 0) {
            for (let i = 0; i < archivos.length; i++) {
                if (chooser.files[0].name == archivos[i].name) {
                    archivoCorrecto = false;
                }
            }
            if (archivoCorrecto == true) {
                archivos.push(chooser.files[0]);
                var info = document.getElementById('infofile');
                info.innerHTML += '<b> | ' + path + '  <i class="fas fa-trash" id="papelera ' + cont + '" style="color:red" onclick="eliminar(id)"></i><b>';
                cont++;
            } else {
                swal({
                    title: "Error!",
                    text: "No puedes agregar otro archivo con el mismo nombre",
                    icon: "error",
                    button: "Volver a intentar",
                });

            }
        }
    }
    document.getElementsByClassName('chooser')[0].value = '';
}
function eliminar(e) {
    var eliminarPapelera = document.getElementById(e);
    eliminarPapelera.parentElement.remove();
    e = e.slice(9)
    archivos.splice(e, 1);

}