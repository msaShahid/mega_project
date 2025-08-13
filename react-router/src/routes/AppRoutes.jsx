import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from 'react';
import { NotFound } from "../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import ROUTES from "../routes/ROUTES";


// Auth
const Login = lazy(() => import('../pages/auth/Login'))
const Register = lazy(() => import('../pages/auth/Register'))
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'))

// Page
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Profile = lazy(() => import('../pages/Profile'))

// Product
const Product = lazy(() => import('../pages/Product'))
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
        path: ROUTES.HOME, 
        element: <MainLayout/>,
        errorElement: <NotFound/>, 
        children : [
            {index: true, element: withSuspense(Home)},
            {path: ROUTES.ABOUT, element: withSuspense(About)},
            {path: ROUTES.CONTACT, element: withSuspense(Contact)},
            {path: ROUTES.PROFILE, element: withSuspense(Profile)},
            {
                path: ROUTES.PRODUCT.BASE, 
                element: withSuspense(Product), 
                children: [
                    {index: true, element: withSuspense(FeaturedProducts)},
                    {path: ROUTES.PRODUCT.FEATURED, element: withSuspense(FeaturedProducts)},
                    {path:ROUTES.PRODUCT.NEW, element: withSuspense(NewProducts)},
                    { path: ROUTES.PRODUCT.DETAIL, element: withSuspense(NewProductDetail) },
                ]
            },
        ],

    },
    {
        path: '/',
        element: <AuthLayout/>,
        errorElement: <NotFound/>, 
        children: [
            {path: ROUTES.AUTH.LOGIN, element: withSuspense(Login)},
            {path: ROUTES.AUTH.SIGNUP, element: withSuspense(Register)},
            {path: ROUTES.AUTH.FORGOT_PASSWORD, element: withSuspense(ForgotPassword)},
            {path: ROUTES.AUTH.RESET_PASSWORD, element: withSuspense(ResetPassword)},
        ]
    },
   
])


export default router