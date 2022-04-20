import axios, { AxiosPromise } from 'axios';

export function getCheckPrime(number: number): AxiosPromise {
    return axios({ 
        url: `http://localhost:8080/api/prime/${number}`,
        method: 'get'
    });
}

export function getPrimeAndSum(numberArray: number[] | null): AxiosPromise {
    return axios({
        url: `http://localhost:8080/api/prime/sum`,
        method: 'post',
        data: numberArray
    });
}