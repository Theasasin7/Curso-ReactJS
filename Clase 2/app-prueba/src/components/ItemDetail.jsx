import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../helper/Button';
import ItemCount from './ItemCount'

export const ItemDetail = ({id, name, category, img, price, stock, initial}) => {

    const [count,setCount] = useState(1);

    const handleAdd = () => {
        const itemToCart = {
            id,
            name,
            price,
            img,
            count
        }
    }
    return (
        <div className="h-screen">
            <div className="flex flex-row justify-center pt-52">
                <div className="flex flex-col p-2 gap-2 bg-gray-500 m-5 border-2 border-gray-700">
                    <img className="border-2 border-blue-400 shadow-md" src={img} alt={name}/>
                    <div className="flex flex-col gap-2">
                        <h5 className="flex justify-center text-white font-semibold text-lg">{name}</h5>
                        <p className="flex justify-center text-white">{category}</p>
                        <p className="flex justify-center text-white text-sm">USD ${price}</p>
                        <div className="flex justify-center"><Link to="/"><Button>Go back</Button></Link></div>
                        <ItemCount stock={stock} initial={initial} count={count} setCount={setCount} handleAdd={handleAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail