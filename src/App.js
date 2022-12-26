import Card from "./componets/Card/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";


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
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://63a74c2959fd83b1bb42f822.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj])
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63a74c2959fd83b1bb42f822.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://63a74c2959fd83b1bb42f822.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            {isCartOpen && <Drawer items={cartItems} onClose={() => setIsCartOpen(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setIsCartOpen(true)}/>
            <div className="content">
                <div className="top-content-cart">
                    <h1 className="main-title">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        {searchValue &&
                            <img className="clear" onClick={() => setSearchValue('')} src="/img/btn-remove.svg"
                                 alt="clear"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers">
                    {items
                        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default App;
