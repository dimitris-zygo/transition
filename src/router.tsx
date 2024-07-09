import * as React from 'react';
import {createBrowserRouter, useParams} from 'react-router-dom';
import {AnimatedLink} from "./AnimatedLink/AnimatedLink.tsx";
import {Card, CardType} from "./Card/Card.tsx";
import promotion1 from "./assets/promotion1.jpg"
import promotion2 from "./assets/promotion2.jpg";
import promotion3 from "./assets/promotion3.jpg";
import promotion4 from "./assets/promotion4.jpg";

const cards = [
    {id:"promoId1",image:promotion1,title:"Welcome Casino Bonus",description:"placeholder description"},
    {id:"promoId2",image:promotion2,title:"Welcome Casino Bonus",description:"placeholder description"},
    {id:"promoId3",image:promotion3,title:"Welcome Casino Bonus",description:"placeholder description"},
    {id:"promoId4",image:promotion4,title:"Welcome Casino Bonus",description:"placeholder description"}
]

function PromotionPage(){
    return (
        <div className="flex items-center justify-center space-x-2 pt-2">
            {cards.map((c) => (
                <div key={c.id}>
                    <AnimatedLink to={`/details/${c.id}`}>
                        <Card card={c as CardType} id={c.id}/>
                    </AnimatedLink>
                </div>
            ))}
        </div>
    )
}

function DetailsPage() {
    const {cardId} = useParams();

    const clickedCard = cards.find((c) => c.id === cardId);
    return (
        <>
            <AnimatedLink to="/">Back</AnimatedLink>
            <Card card={clickedCard as CardType} active/>
        </>
    );
}

export const router = createBrowserRouter([
    {
        index: true,
        element: <PromotionPage/>,
    },
    {
        path: '/details/:cardId',
        element: <DetailsPage/>,
    },
]);
