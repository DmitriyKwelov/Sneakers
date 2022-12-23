const Header = () => {
    return(
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                <div className="headerInfo">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li className="headerCart">
                    <img width={20} height={20} src="/img/cart.svg" alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;