import React from 'react';
import {AppContext} from "../App";

const Info = ({title, image, description}) => {

    const {setIsCartOpen} = React.useContext(AppContext);

    return (
        <div className="empty-cart">
            <img width={120} style={{paddingBottom: '20px'}} src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setIsCartOpen(false)} className="greenBtn"><img src="/img/back arrow.svg" alt="arrow"/>Вернуться назад</button>
        </div>
    );
};

export default Info;