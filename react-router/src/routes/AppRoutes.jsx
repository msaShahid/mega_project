import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))

// eslint-disable-next-line no-unused-vars
const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>, 
        children : [
            {index: true, element: withSuspense(Home)},
            {path: 'about', element: withSuspense(About)},
            {path: 'contact', element: withSuspense(Contact)}
        ],

    },
   
])


export default router