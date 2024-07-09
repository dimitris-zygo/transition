import * as React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {DetailsPage, PromotionPage} from "./Promotions";

export const routes = createBrowserRouter([
 {
     index: true,
     element: <PromotionPage/>,
 },
 {
     path: '/details/:cardId',
     element: <DetailsPage/>,
 },
]);
