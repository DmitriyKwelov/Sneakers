import Card from "./componets/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="top-content-cart">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers">
                    <Card/>
                </div>
            </div>

        </div>
    );
}

export default App;
