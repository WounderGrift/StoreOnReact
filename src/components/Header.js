import React, {useState} from "react";
import Order from "./Order";

function showOrder(props)
{
    return props.orders.map((el) => (<Order key={el.id} item={el}/>));
}

function noShowOrder()
{
    return (<div className='empty'>
        <h2>Корзина пуста.</h2>
    </div>);
}

export default function Header(props)
{
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>Home Stuff</span>
                <ul className='nav'>
                    <li onClick={() => setCartOpen(cartOpen = !cartOpen)}
                        className={`shop-cart-button ${cartOpen && 'active'}`} >Корзина</li>
                    <li>О Нас</li>
                    <li>Чатик</li>
                    <li>Кабинет</li>
                </ul>

                {cartOpen && (
                    <div className='shop-cart'>
                        {
                            props.orders.length > 0
                                ? showOrder(props)
                                : noShowOrder()
                        }
                    </div>
                )}
            </div>
            <div className='presentation'/>
        </header>
    );
}