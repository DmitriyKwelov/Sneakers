import styles from "./Card.module.scss";
import {useState} from "react";

const Card = ({title, imageUrl, price, onFavorite, onPlus}) => {

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/like.svg' : '/img/unlike.svg'} alt="like"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneaker"/>
            <h5>{title}</h5>
            <div className={styles.bottomContent}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-check.svg' : '/img/btn-plus.svg'} alt=""/>
            </div>
        </div>
    )
}

export default Card;