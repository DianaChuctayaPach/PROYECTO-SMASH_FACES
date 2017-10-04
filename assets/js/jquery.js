// $(function(){$("#puntaje").addClass("option animated zoomInLeft");});
$(function () {
    var Chile = [{
        image: "anais-araya.jpg",
        name: "anais",
    }, {
        image: "andrea-miranda.jpg",
        name: "andrea",
    }, {
        image: "berenisse-ríos.jpg",
        name: "berenise",
    }, {
        image: "caterina-da-silva.jpg",
        name: "caterina",
    }, {
        image: "daniela-sanchez.jpg",
        name: "daniela",
    }, {
        image: "francisca-ojeda.jpg",
        name: "francisca",
    }, {
        image: "katerine-sandoval.jpg",
        name: "katerine",
    }
    ]
    var Lima = [{
        image: "andrea-cabrera.jpg",
        name: "andrea",
    }, {
        image: "ariadna-izaguirre.jpg",
        name: "ariadna",
    }, {
        image: "carito-juarez.jpg",
        name: "carito",
    }, {
        image: "cristy-castro.jpg",
        name: "cristy",
    }, {
        image: "karol-orrillo.jpg",
        name: "karol",
    }, {
        image: "paola-ortiz.jpg",
        name: "paola",
    }, {
        image: "teresa-lara.jpg",
        name: "teresa",
    }
    ];
    var indice;
    var indices = [];
    var contClick = 0;
    var generarAleatorios = function (array) {
        if (indices.length < array.length) {
            while (indices.length < array.length) {
                var numAleatorio = Math.floor(Math.random() * array.length);
                //verificar que el numero aleatorio no haya salido
                if (indices.indexOf(numAleatorio) == -1) {
                    indices.push(numAleatorio);
                    console.log(numAleatorio);
                    return numAleatorio;
                }
            }
        } else {
            swal("MUY BIEN !!", "YA no hay images GANASTE!", "success");
        }
    }
    var mostrarFotos = function (sede, contenedor, array) {
        
        var indice = generarAleatorios(array);
        contenedorImg.attr("src", "assets/img/" + sede + "/" + array[indice].image);
        var  nombrearray=array[indice].name;
        console.log(nombrearray)
        var puntaje = $("#puntaje");
     
        $("#comprobar").click(function () {
            var comprobar=$("#comprobar");
            var input_nombre=$("#input-nombre").val();
            contClick++;
            if (input_nombre.toLowerCase() === array[indice].name.toLowerCase()) {
                contClick = 0;
                swal("Good job!", "Muy bien lo Iciste!", "success");
                console.log(array[indice].name);
                puntaje.text(eval(puntaje.text()) + 5);
                $("#puntaje").addClass("option animated zoomInLeft")
                $("#puntaje").css("font-size","30px");
        // otra img
                setTimeout(function () {
                    indice = generarAleatorios(array);
                    contenedorImg.attr("src", "assets/img/" + sede + "/" + array[indice].image);
                
                }, 500);

            } else {
                if (contClick < 5) {
                    swal("=| Sigue Intentando!" ,"su nombre no es " + input_nombre  , "error");
                    console.log(":(" + array[indice].name)
                } else {
                    contClick = 0;
                    setTimeout(function () {
                        indice = generarAleatorios(array);
                        contenedorImg.attr("src", "assets/img/" + sede + "/" + array[indice].image);
                    
                        input_nombre.val("");
                    }, 1000);

                    puntaje.text(eval(puntaje.text()) - 1);
                }
            }
        });
      
    };

    var contenedorImg = $("img");

    $("select").on("change", function () {
        sede = $(this).val();
        $(this).parent().next().show();

        if (sede === "Lima") {
            mostrarFotos(sede, contenedorImg,Lima );
            indices = [];
        } else{
            mostrarFotos(sede, contenedorImg,Chile );
            indices = [];
        }
        
    });
});