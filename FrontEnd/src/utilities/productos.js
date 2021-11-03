import axios from "axios";

const URL_BACKEND = "http://localhost:5000/";

export const getProductos = async (succes, error) => {
    const opciones = {method: "GET", url: `${URL_BACKEND}/productos/`};
    await axios.request(opciones).then(succes).catch(error)
}