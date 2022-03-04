import React,{ useState } from 'react'

const ItemCount = ({ stock,initial }) => {
    const [count,setCount] = useState(initial);

    const onAdd = (stock,initial)=>{
        return initial<stock ? setCount(initial + 1) : setCount(initial);
    }
    const onSubtract = (initial)=>{
        return initial>1 ? setCount(initial - 1) : setCount(initial);
    }
return (
    <div className="flex justify-center">
        <div className="flex flex-col justify-between w-60 h-50 p-4 border-2 border-black bg-gray-300">
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1646217613" alt="Elden Ring videogame logo" />
            <p className="text-2xl font-semibold p-2">Elden Ring x5</p>
            <div className="flex flex-row justify-between text-xl font-semibold px-4 border-2 rounded-full border-gray-600 text-blue-400 bg-gray-900 my-2">
                <div onClick={()=>{onSubtract(parseInt(count))}}>-</div>
                {count}
                <div onClick={()=>{onAdd(parseInt(stock),parseInt(count))}}>+</div>
            </div>
            <button className="text-lg font-medium border-2 border-blue-500 bg-blue-400 rounded-full">Add to cart</button>
        </div>
    </div>
    )
}

export default ItemCount