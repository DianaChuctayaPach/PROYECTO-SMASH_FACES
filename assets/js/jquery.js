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
    ]
    var Arequipa = [{
        image: "daguiana-revoredo.jpg",
        name: "daguiana",
    }, {
        image: "elizabeth-condori.jpg",
        name: "elizabeth",
    }, {
        image: "grecia-rayme.jpg",
        name: "grecia",
    }, {
        image: "janine-vega.jpg",
        name: "janine",
    }, {
        image: "michelle-more.jpg",
        name: "michelle",
    }, {
        image: "mishel-velasquez.jpg",
        name: "mishel",
    }, {
        image: "rosario-felix.jpg",
        name: "rosario",
    },{
        image:"arantza-burga.jpg",
        name:"arantza"
    }
    ]
    // var select = $("select").val();
    // var imagesAleatorios = function (arrayimg) {
    //     Math.floor(Math.random() * select.length); //genera 20 numeros aleatorios
    //     console.log(imagesAleatorios);
    // }
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
                    console.log(indices);
                    return numAleatorio;
                }
            }
        } else {
            alert("no hay mas fotos, ganastes el juego");
        }
    }
    var mostrarFotos = function (sede, contenedor, array) {
        //imprimir la primera foto aleatoriamente
        var indice = generarAleatorios(array);
        contenedorImg.attr("src", "assets/img/" + sede + "/" + array[indice].image);

        var puntaje = $("#puntaje");
        // var mensaje = $(".mensaje");
        
        $("#comprobar").click(function () {
            var comprobar=$("#comprobar");
            var input_nombre=$("#input-nombre").val();
            contClick++;
           
            //si adivinas el nombre contClick=0; sumas 5 puntos
            if (input_nombre.toLowerCase() === array[indice].name.toLowerCase()) {
                contClick = 0;
                input_nombre.val();
                puntaje.text(eval(puntaje.text()) + 5);
                swal("Good job!", "Muy bien lo Iciste!", "success");
                console.log(input_nombre)
                //se muestra otra imagen aleatoriamente
                setTimeout(function () {
                    indice = generarAleatorios(array);
                    contenedorImg.attr("src", "assets/img/" + sede + "/" + array[indice].image);
                    // mensaje.text("");
                }, 1000);

            } else {
                if (contClick <= 4) {
                    swal(":(!", "Sigue Intentando!", "error");
                    console.log(":(")
                } else {
                    contClick = 0;
                    input_nombre.attr("disabled", true);

                    setTimeout(function () {
                        indice = generarAleatorios(array);
                        contenedorImg.attr("src", "assets/img/" + sede + "/" + array[indice].image);
                        // mensaje.text("");
                        input_nombre.attr("disabled", false);
                        input_nombre.val("");
                    }, 2000);

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
        } if(sede == "Arequipa") {
            mostrarFotos(sede, contenedorImg,Arequipa );
            indices = [];
        }else  {
            mostrarFotos(sede, contenedorImg,Chile );
            indices = [];
        } 
        
    });
});