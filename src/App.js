import Card from "./componets/Card/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";
import {useEffect, useState} from "react";


function App() {
    // const arr = [
    //     {
    //         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    //         "price": 12999,
    //         "imageUrl": "/img/sneakers/1.jpg"
    //     },
    //     {
    //         "name": "Мужские Кроссовки Nike Air Max 270",
    //         "price": 12999,
    //         "imageUrl": "/img/sneakers/2.jpg"
    //     },
    //     {
    //         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    //         "price": 8499,
    //         "imageUrl": "/img/sneakers/3.jpg"
    //     },
    //     {
    //         "name": "Кроссовки Puma X Aka Boku Future Rider",
    //         "price": 8999,
    //         "imageUrl": "/img/sneakers/4.jpg"
    //     }
    // ]
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        fetch('https://63a74c2959fd83b1bb42f822.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
            })

    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    return (
        <div className="wrapper clear">
            {isCartOpen && <Drawer items={cartItems} onClose={() => setIsCartOpen(false)} />}
            <Header onClickCart={() => setIsCartOpen(true)}/>
            <div className="content">
                <div className="top-content-cart">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers">
                    {
                        items.map(item => (
                            <Card
                                title={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={() => console.log('Добавили в закладки')}
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
