import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
const Menu = () => {
    const addToCartHandler = (itemNum) => { };
    return (
        <section id="menu">
            <h1> MENÚ</h1>
            <div>
                <MenuCard
                    itemNum={1}
                    burgerSrc={burger1}
                    price={10}
                    title="Hamburguesa con queso"
                    handler={addToCartHandler}
                    delay={0.1}
                />
                <MenuCard
                    itemNum={2
                    }
                    burgerSrc={burger2}
                    price={12}
                    title="Hamburguesa vegetariana con queso"
                    delay={0.5}
                    handler={addToCartHandler}
                />
                <MenuCard
                    itemNum={3}
                    burgerSrc={burger3}
                    price={15}
                    title="Hamburguesa con queso y patatas fritas"
                    delay={0.8}
                    handler={addToCartHandler}
                />
            </ div>
        </section>
    );
};
export default Menu;