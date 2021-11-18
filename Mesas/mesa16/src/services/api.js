import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brasilapi.com.br/api/cep/v1/'
});

const api2 = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

const apis = [api, api2]

export default apis;
