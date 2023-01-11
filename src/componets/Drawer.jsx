import Info from "./info";
import React, {useState} from "react";
import {AppContext} from "../App";

const Drawer = ({onClose, onRemove, items = []}) => {

    const [isOrderComplete, setIsOrderComplete] = useState();
    const {setCartItems, emptyCart} = React.useContext(AppContext)

    const onClickOrder = () => {
        setIsOrderComplete(true);
        setCartItems([]);
        emptyCart();
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
                {items.length > 0
                    ?
                    <>
                        <div className="items">
                            {items.map((item) =>
                                <div key={item.id} className="cartItem">
                                    <div className="cartItemImg"
                                         style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                                    <div className="card-info-cart">
                                        <p>{item.name}</p>
                                        <b>{item.price}</b>
                                    </div>
                                    <img onClick={() => onRemove(item.id)} className="removeBtn"
                                         src="/img/btn-remove.svg"
                                         alt="remove"/>
                                </div>
                            )}
                        </div>
                        <div className="cartTotalBlock">
                            <ul className="cardTotalBlock">
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className="greenBtn">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
                        </div>
                    </>
                    :
                    <Info
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                        description={isOrderComplete ? "Ваш заказ #18 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        image={isOrderComplete ? "/img/orderComplete.jpg" : "/img/box.jpg"}
                    />
                }
            </div>
        </div>
    )
}

export default Drawer;