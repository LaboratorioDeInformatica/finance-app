import axios from "axios";


const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    
        constructor(apiurl){
            this.apiurl = apiurl;
        }
    
        post(url, objeto){
            const requestUrl = `${this.apiurl}${url}`
            return httpClient.post(requestUrl, objeto);
        }
    
        put(url, objeto){
            const requestUrl = `${this.apiurl}${url}`
            return httpClient.put(requestUrl, objeto);
        }
    
        delete(url){
            const requestUrl = `${this.apiurl}${url}`
            return httpClient.delete(requestUrl);
        }
    
        get(url){
            const requestUrl = `${this.apiurl}${url}`
            return httpClient.get(requestUrl);
        }

        obterMeses(){
            return [
                {label: 'Selecione...', value: ''},
                {label: 'Janeiro', value: 1},
                {label: 'Fevereiro', value: 2},
                {label: 'Março', value: 3},
                {label: 'Abril', value: 4},
                {label: 'Maio', value: 5},
                {label: 'Junho', value: 6},
                {label: 'Julho', value: 7},
                {label: 'Agosto', value: 8},
                {label: 'Setembro', value: 9},
                {label: 'Outubro', value: 10},
                {label: 'Novembro', value: 11},
                {label: 'Dezembro', value: 12}
            ]
        }

        obterListaTipos(){
            return [
                {label: 'Selecione...', value: ''},
                {label: 'Despesa', value: 'DESPESA'},
                {label: 'Receita', value: 'RECEITA'}
            ]
        }
    
    }

export default ApiService;