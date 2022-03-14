import React, { useEffect, useState } from 'react'
import { askData } from '../helper/AccessData'
import { ItemList } from './ItemList'

const ItemListContainer = () => {
    const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        askData()
        .then((res) => {
            setProducts(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("Loaded 100%");
        });
    }, []);

    return (
        <>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer