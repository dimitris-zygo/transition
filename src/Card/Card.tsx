import classNames from "classnames";
import * as React from "react";

export type CardType = {
    image: string,
    description: string,
    id: string,
    title: string
}

export function Card({card,active=false}:{card:CardType,active?:boolean}){
    return (
        <div className={classNames("text-white rounded-lg bg-gray-700",{
            "w-96 cursor-default":active,
            "w-60 cursor-pointer":!active
        })} style={{viewTransitionName: `image-${card.id}`}}>
            <img src={card.image} alt={card.image} className={classNames("rounded-lg")}/>
            {active && (
                <div className="py-6 px-2 space-y-4">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            )}
        </div>
    )
}
