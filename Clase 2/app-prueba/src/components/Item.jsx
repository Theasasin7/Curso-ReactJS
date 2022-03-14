import React from 'react'


export const Item = ({name, category, img, price}) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col p-2 gap-2 bg-gray-500 m-5 border-2 border-gray-700">
                <img className="border-2 border-blue-400 shadow-md" src={img} alt={name}/>
                <div className="flex flex-col gap-2">
                    <h5 className="flex justify-center text-white font-semibold text-lg">{name}</h5>
                    <p className="flex justify-center text-white">{category}</p>
                    <p className="flex justify-center text-white text-sm">USD ${price}</p>
                    <button className="border-2 border-gray-900 bg-blue-400 font-semibold mx-10 rounded-full">Game Details</button>
                </div>
            </div>
        </div>
    )
}

