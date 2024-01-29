import axios from "axios";

const URL ="http://localhost:3000";

export const getDisplayItemsRight = ()=>{
    return axios.get(`${URL}/displayItemsRight`)
}
// 
export const getDisplayItemsLeft = ()=>{
    return axios.get(`${URL}/displayItemsLeft`)
}
// ///////////////
export const getPestGoods = ()=>{
    return axios.get(`${URL}/BestGoods`)
}
//API page for kids
export const getShowClosthes = ()=>{
    return axios.get(`${URL}/showColthesKids`)
}
// //
export const getwinterPajamas = ()=>{
    return axios.get(`${URL}/winterPajamas`)
}
// //
export const getwinterChildrensColothes = ()=>{
    return axios.get(`${URL}/winterChildrensColothes`)
}