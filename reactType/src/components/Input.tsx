
type Inputprops = {
    value? : string;
    handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Inputprops) => {

    return (
        <>
        <input className=" m-2 border text-red-900" type="text" value={props.value} onChange={props.handleChange} />
        </>
    )
}