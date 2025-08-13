import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from 'react';
import { NotFound } from "../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Product = lazy(() => import('../pages/Product'))
const Profile = lazy(() => import('../pages/Profile'))

const Login = lazy(() => import('../pages/auth/Login'))

const FeaturedProducts = lazy(() => import('../components/FeaturedProducts'))
const NewProducts = lazy(() => import('../components/NewProducts'))
const NewProductDetail = lazy(() => import('../components/NewProductDetail'))

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
            {path: 'profile', element: withSuspense(Profile)},
            {
                path: 'product', 
                element: withSuspense(Product), 
                children: [
                    {index: true, element: withSuspense(FeaturedProducts)},
                    {path:'featured', element: withSuspense(FeaturedProducts)},
                    {path:'new', element: withSuspense(NewProducts)},
                    { path: 'new/:productId', element: withSuspense(NewProductDetail) },
                ]
            },
        ],

    },
    {
        path: '/login',
        element: <AuthLayout/>,
        errorElement: <NotFound/>, 
        children: [
            {path: '/login', element: withSuspense(Login),}
        ]
    },
   
])


export default router