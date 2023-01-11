import Card from "./Card/Card";
import React from "react";
import {AppContext} from "../App";

const Favorite = ({isLoading}) => {

    const {favorites, onAddToFavorite} = React.useContext(AppContext)

    return (
        <div className="content">
            <div className="top-content-cart">
                <h1 className="main-title">Мои закладки</h1>
            </div>
            <div className="sneakers">
                <div className="sneakers">
                    {favorites
                        .map((item, index) => (
                            <Card
                                loading={isLoading}
                                key={index}
                                favorited={true}
                                onFavorite={onAddToFavorite}
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