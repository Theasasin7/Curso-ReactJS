import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../helper/Button'
import ItemCount from './ItemCount'


export const Item = ({id, name, category, img, price, stock}) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col p-2 gap-2 bg-gray-500 m-5 border-2 border-gray-700">
                <img className="border-2 border-blue-400 shadow-md" src={img} alt={name}/>
                <div className="flex flex-col gap-2">
                    <h5 className="flex justify-center text-white font-semibold text-lg">{name}</h5>
                    <p className="flex justify-center text-white">{category}</p>
                    <p className="flex justify-center text-white text-sm">USD ${price}</p>
                    <Link to={`/details/${id}`}><Button>Game Details</Button></Link>
                    <ItemCount stock={stock} initial="1" />
                </div>
            </div>
        </div>
    )
}

