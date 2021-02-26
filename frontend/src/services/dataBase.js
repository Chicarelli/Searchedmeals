import axios from "axios"


const dataBase = axios.create({
    baseURL: 'http://localhost:3333'
});

export default dataBase;