import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({item}) => {
    return (
        <p className="text-4xl text-center pt-20">
            {item}
            <ItemCount stock="5" initial="1"/>
        </p>
    )
}

export default ItemListContainer