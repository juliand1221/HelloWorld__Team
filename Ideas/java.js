
const getInputValue = () => {
    let venta = {}
    venta.idenVenta = document.getElementById("idenVenta").value;
    venta.totalVenta = document.getElementById("totalVenta").value;
    venta.identificador = document.getElementById("identificador").value;
    venta.cantidad = document.getElementById("cantidad").value;
    venta.precioUnitario = document.getElementById("precioUnitario").value;
    venta.fechaVenta = document.getElementById("fechaVenta").value;
    venta.docIdentif = document.getElementById("docIdentif").value;
    venta.nombreCliente = document.getElementById("nombreCliente").value;
    venta.vendedor = document.getElementById("vendedor").value;

    document.getElementById("valor1").innerHTML = venta.idenVenta;
    alert(JSON.stringify(venta))
}