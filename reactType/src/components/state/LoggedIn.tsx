import { useState } from "react"



export const LoggedIn = () => {

    const [isLoggedIn, setloggedIn] = useState(false)

    const handleLogin = () => {
        setloggedIn(true)
    }
    const handleLogout = () => {
        setloggedIn(false)
    }

    return (
        <>
        <button onClick={handleLogin}>Login</button> |
        <button onClick={handleLogout}>Logout</button> |
        <h1>User is {isLoggedIn ? 'logged in' : 'Logged out'}  </h1>
        
        </>
    )
}