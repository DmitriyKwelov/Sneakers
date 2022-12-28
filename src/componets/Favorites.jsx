import Card from "./Card/Card";

const Favorite = ({items, onFavorite}) => {
    return (
        <div className="content">
            <div className="top-content-cart">
                <h1 className="main-title">Мои закладки</h1>
            </div>
            <div className="sneakers">
                <div className="sneakers">
                    {items
                        .map((item, index) => (
                            <Card
                                key={index}
                                favorited={true}
                                onFavorite={onFavorite}
                                {...item}
                                // onFavorite={(obj) => onAddToFavorite(obj)}
                                // onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Favorite;