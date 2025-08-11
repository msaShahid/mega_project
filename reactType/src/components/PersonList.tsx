import type { Name } from "../types/PersonType"

type PersonListProps = {
    data: Name[]
}

export const PersonList = ({data}: PersonListProps) => {
    return(
        <div>
            {
                data.map((n, index) => {
                    return(
                        <h2 key={index}>{n.first} {n.last}</h2>
                    )
                })
            }
        </div>
    )
}