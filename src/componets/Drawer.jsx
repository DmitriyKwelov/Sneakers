const Drawer = ({onClose, onRemove, items = []}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
                {items.length > 0
                    ?
                    <div>
                        <div className="items">
                            {items.map((item) =>
                                <div className="cartItem">
                                    <div className="cartItemImg"
                                         style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                                    <div className="card-info-cart">
                                        <p>{item.title}</p>
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
                            <button className="greenBtn">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
                        </div>
                    </div>
                    :
                    <div className="empty-cart">
                        <img src="/img/box.jpg"/>
                        <h2>Корзина пустая</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} className="greenBtn"><img src="/img/back arrow.svg" alt="arrow"/>Вернуться назад</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Drawer;