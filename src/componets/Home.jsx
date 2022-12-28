import Card from "./Card/Card";

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) => {
    return (
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
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;