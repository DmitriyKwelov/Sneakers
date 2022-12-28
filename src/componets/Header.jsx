import {Link} from "react-router-dom";

const Header = (props) => {
    return(
        <header>
            <Link to="/">
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                <div className="headerInfo">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            </Link>
            <ul className="headerRight">
                <li onClick={props.onClickCart} className="headerCart">
                    <img width={20} height={20} src="/img/cart.svg" alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li className="heart">
                    <Link to="/favorites">
                        <img width={20} height={20} src="/img/heart.svg" alt="user"/>
                    </Link>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;