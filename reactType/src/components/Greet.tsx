
type Greetprops = {
    name: string;
    version: number;
    isLoggedIn: boolean;
}

export const Greet = (props : Greetprops) => {
    return(
        <h1 className="text-4xl font-bold text-blue-600">
            {
                props.isLoggedIn ? `Welcome to Vite, ${props.name} ${props.version}+, TypeScript, and Tailwind 4!` : `Please login to check react version`
            }
          
        </h1>
    )
}