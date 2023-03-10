import Card from "./componets/Card/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./componets/Home";
import Favorite from "./componets/Favorites";
import React, {createContext} from "react";

export const AppContext = React.createContext({});

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const cartResponse = await axios.get('https://63a74c2959fd83b1bb42f822.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://63a74c2959fd83b1bb42f822.mockapi.io/favorites');
            const itemsResponse = await axios.get('https://63a74c2959fd83b1bb42f822.mockapi.io/items');


            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
            setIsLoading(false)
        }
        fetchData();
    }, [])

    const onAddToCart = (obj) => {
        if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
            axios.delete(`https://63a74c2959fd83b1bb42f822.mockapi.io/cart/${obj.id}`)
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        } else{
            axios.post('https://63a74c2959fd83b1bb42f822.mockapi.io/cart', obj);
            setCartItems(prev => [...prev, obj])
        }
    }
    const emptyCart = () => {
        console.log('fgawergwegwaegaweg')
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            axios.delete('https://63a74c2959fd83b1bb42f822.mockapi.io/cart/' + item.id);
        }
    }
    const onRemoveItem = (id) => {
        axios.delete(`https://63a74c2959fd83b1bb42f822.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = async (obj) => {
        try {
            if(favorites.find(obj1 => obj1.id === obj.id)){
                axios.delete(`https://63a74c2959fd83b1bb42f822.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) != Number(obj.id)))
            } else{
                const {data} = await axios.post('https://63a74c2959fd83b1bb42f822.mockapi.io/favorites', obj);
                    setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert("???? ?????????????? ???????????????? ?? ????????????????")
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setIsCartOpen, setCartItems, emptyCart}}>
            <div className="wrapper clear">
                {isCartOpen && <Drawer items={cartItems} onClose={() => setIsCartOpen(false)} onRemove={onRemoveItem}/>}
                <Header onClickCart={() => setIsCartOpen(true)}/>
                <Routes>
                    <Route path="/" element={<Home items={items} isLoading={isLoading} cartItems={cartItems} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>}></Route>
                    <Route path="/favorites" element={<Favorite isLoading={isLoading} />}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
