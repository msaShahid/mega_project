import { Helmet } from 'react-helmet';

const About = () => {
    return(
        <>

        <Helmet>
            <title>About page</title>
            <meta name="description" content="This is the About page" />
        </Helmet>

            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About ReactApp</h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                            A modern React 19 application showcasing the latest web development technologies, patterns, and best practices for building scalable applications.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;