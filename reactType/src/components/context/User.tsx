import { useContext } from "react"
import { UserContext } from "./UserContext"


export const User = () => {

    const userContext = useContext(UserContext)
   
    const handleLogin = () => {
        userContext.setUser({
            name: 'Shahid',
            email: 'all@gmail.com'
        })
    }

    const handleLogout = () => {
        userContext.setUser(null)
    }

    return (
        <>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex space-x-4">
                    <button
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>

                {userContext?.user ? (
                    <div className="flex items-center space-x-4">
                        <div className="text-sm font-semibold text-gray-700">
                            <span className="font-medium">User Name:</span> {userContext.user.name}
                        </div>
                        <div className="text-sm font-semibold text-gray-700">
                            <span className="font-medium">Email:</span> {userContext.user.email}
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500">No user logged in.</div>
                )}
            </div>
        
        </>
    )
}