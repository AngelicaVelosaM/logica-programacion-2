
function cambioDeTemperatura() {
    
    let ingreso = prompt("Por favor ingresa una temperatura en grados celsius");

    let celsius = parseFloat(ingreso);

    
    if (typeof celsius === "number" && !isNaN(celsius)) {
        let fahrenheit =(celsius * 9/5) + 32;
        let kelvin =celsius + 273.15;

        document.write("La temperatura en Fahrenheit es: " + fahrenheit + " °F y la temperatura en Kelvin es: " + kelvin + " K");
    } else {
        alert("Formato no válido, inténtalo de nuevo");
    }
}

cambioDeTemperatura();