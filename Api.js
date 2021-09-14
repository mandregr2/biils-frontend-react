import axios from 'axios';
const api = axios.create({
//Informe a porta do serviço de autenticação
baseURL: 'https://localhost:3030',
});
export default api;