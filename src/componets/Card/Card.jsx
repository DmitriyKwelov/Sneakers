import styles from "./Card.module.scss";
import {useState} from "react";
import ContentLoader from "react-content-loader"

const Card = ({
                  id,
                  name,
                  imageUrl,
                  price,
                  onFavorite,
                  onPlus,
                  favorited = false,
                  added = false,
                  loading = true
              }) => {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({id, name, imageUrl, price})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavorite({id, name, price, imageUrl})
    }

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                        speed={2}
                        width={150}
                        height={190}
                        viewBox="0 0 150 190"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
                        <rect x="0" y="100" rx="3" ry="3" width="150" height="15"/>
                        <rect x="0" y="123" rx="3" ry="3" width="93" height="15"/>
                        <rect x="0" y="155" rx="8" ry="8" width="80" height="24"/>
                        <rect x="118" y="146" rx="8" ry="8" width="32" height="32"/>
                    </ContentLoader>
                    :
                    <>
                        <div className={styles.favorite} onClick={onClickFavorite}>
                            <img src={isFavorite ? '/img/like.svg' : '/img/unlike.svg'} alt="like"/>
                        </div>
                        <img width={133} height={112} src={imageUrl} alt="sneaker"/>
                        <h5>{name}</h5>
                        <div className={styles.bottomContent}>
                            <div className={styles.price}>
                                <span>Цена:</span>
                                <b>{price} руб.</b>
                            </div>
                            <img className={styles.plus} onClick={onClickPlus}
                                 src={isAdded ? '/img/btn-check.svg' : '/img/btn-plus.svg'} alt=""/>
                        </div>
                    </>
            }
        </div>
    )
}

export default Card;