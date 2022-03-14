import { stock } from "../components/Data"
export const askData = () =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000)
    })
}