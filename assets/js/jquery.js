$(document).ready(function(){
    $("#comprobar").click(function(){
        // var lista_nombres = new Array("maria","lucia")
        // function ObtienePalabra() {
        //     //obtiene la palabra para jugar de forma pseudoaleatoria
        //     var indice = Math.round ( Math.random() * 16 )
        //     var cadena = new String( libreriaPalabras[indice] )
        //     palabra = cadena.split(" ")
         
        //  }
        

        var nombre = $("#input-nombre").val();
        console.log(nombre);
        if (nombre === "Diana") {
            swal("Good job!", "Muy bien lo Iciste!", "success");
        } else {
            swal(":(!", " 0h! no Fallastes", "error");
        }
        // nombre =$("")
       
        
    });
    var chile = $("#Chile");
    var lima = $("#Lima");
    var arequipa = $("#Arequipa");
    var select = $("#select");
        if (select.chile=="Chile") {
            displayImage();
            
        }

        // $("img").addClass("option animated jackInTheBox");
        // $("button").addClass("option animated jackInTheBox");
        // $(".close").addClass("option animated jackInTheBox");
   
});