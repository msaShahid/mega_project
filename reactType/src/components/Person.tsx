
type Personprops = {
    name: {
        first: string;
        last: string;
    }
}

export const Person = (props: Personprops) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}