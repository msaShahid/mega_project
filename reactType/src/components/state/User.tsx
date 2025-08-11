import { useState } from "react"

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
   const [user, setUser] = useState<AuthUser | null>(null)
   
    const handleLogin = () => {
        setUser({
            name: 'Shahid',
            email: 'all@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <>
        <button className="mr-2" onClick={handleLogin}>Login</button> |
        <button className="mr-2"  onClick={handleLogout}>Logout</button> |
        <div className="mr-2">User is name : {user ? user?.name : ''}  </div>
        <div className="mr-2">User is email : {user ? user?.email : ''}  </div>
        
        </>
    )
}