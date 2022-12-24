import Card from "./componets/Card/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";


function App() {
    const arr = [
        {
            name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 12999,
            imageUrl: '/img/sneakers/1.jpg'
        },
        {
            name: 'Мужские Кроссовки Nike Air Max 270',
            price: 12999,
            imageUrl: '/img/sneakers/2.jpg'
        },
        {
            name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            price: 8499,
            imageUrl: '/img/sneakers/3.jpg'
        },
        {
            name: 'Кроссовки Puma X Aka Boku Future Rider',
            price: 8999,
            imageUrl: '/img/sneakers/4.jpg'
        }
    ]

    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
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
                        arr.map(item => (
                            <Card
                                title={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={() => console.log('Добавили в закладки')}
                                onPlus={() => console.log('Добавили в плюс')}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default App;
