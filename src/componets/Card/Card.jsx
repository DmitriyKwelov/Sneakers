import styles from "./Card.module.scss";

const Card = (props) => {
    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/img/like.svg" alt="like"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneaker"/>
            <h5>{props.title}</h5>
            <div className={styles.bottomContent}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button onClick={props.onPlus}>
                    <img width={11} height={11} src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Card;