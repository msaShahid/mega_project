import { useAuth } from "../context/auth-context"; 
//import { useNavigate } from "react-router-dom";

const Profile = () => {

    const { user } = useAuth();
    console.log(user);
    //const navigate = useNavigate();

    // const handleLogout = () => {
    //     auth.logout();
    //     navigate('/login');  
    // }

    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Profile Page</h1>
          
                    <h1 className="text-2xl md:text-6xl font-bold mb-6">
                        Welcome {user ? user.email : 'XXXXXX'}   
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Have questions or feedback? We'd love to hear from you. Send us a message, and we'll get back to you as soon as possible.
                    </p>
                    {/* <button 
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                        onClick={handleLogout}>
                        Logout
                    </button> */}
                </div>
            </div>
        </section>
    );
}

export default Profile;