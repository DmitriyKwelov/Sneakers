import Card from "./componets/Card/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./componets/Home";
import Favorite from "./componets/Favorites";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        axios.get('https://63a74c2959fd83b1bb42f822.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://63a74c2959fd83b1bb42f822.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })
        axios.get('https://63a74c2959fd83b1bb42f822.mockapi.io/favorites').then(res => {
            setFavorites(res.data)
        })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://63a74c2959fd83b1bb42f822.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj])
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63a74c2959fd83b1bb42f822.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = async (obj) => {
        try {
            if(favorites.find(obj1 => obj1.id === obj.id)){
                axios.delete(`https://63a74c2959fd83b1bb42f822.mockapi.io/favorites/${obj.id}`);
                // setFavorites((prev) => prev.filter((item) => item.id != obj.id))
            } else{
                const {data} = await axios.post('https://63a74c2959fd83b1bb42f822.mockapi.io/favorites', obj);
                    setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert("не удалось добавить в фавориты")
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            {isCartOpen && <Drawer items={cartItems} onClose={() => setIsCartOpen(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setIsCartOpen(true)}/>
            <Routes>
                <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>}></Route>
                <Route path="/favorites" element={<Favorite items={favorites} onFavorite={onAddToFavorite} />}/>
            </Routes>
        </div>
    );
}

export default App;
