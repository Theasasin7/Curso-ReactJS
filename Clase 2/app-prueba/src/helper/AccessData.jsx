import { stock } from "../components/Data"
export const askData = () =>{
    return new Promise( (resolve)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000)
    })
}