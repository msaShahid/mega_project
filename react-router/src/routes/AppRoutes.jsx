import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from 'react';
import { NotFound } from "../pages/NotFound";

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Product = lazy(() => import('../pages/Product'))

const Featured = lazy(() => import('../components/FeaturedProducts'))
const New = lazy(() => import('../components/NewProducts'))

// eslint-disable-next-line no-unused-vars
const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
    {
        path:'/', 
        element: <MainLayout/>,
        errorElement: <NotFound/>, 
        children : [
            {index: true, element: withSuspense(Home)},
            {path: 'about', element: withSuspense(About)},
            {path: 'contact', element: withSuspense(Contact)},
            {
                path: 'product', 
                element: withSuspense(Product), 
                children: [
                    {path:'featured', element: withSuspense(Featured)},
                    {path:'new', element: withSuspense(New)},
                ]
            },
        ],

    },
   
])


export default router