import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Home = () => {
    
    const navigate = useNavigate()

    return(
        <>

        <Helmet>
            <title>Home page</title>
            <meta name="description" content="This is the Home page" />
        </Helmet>
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Welcome to ReactApp
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Experience the power of React 19
                        </p>
                        <button 
                        className="bg-blue-600 text-2xl text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        onClick={() => navigate('contact')}
                        >Learn more</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;