import React, { useState } from "react";

const CHECKBOXES = ['Horror', 'Action', 'Sci-Fi']

const ReactFunctionalComponent = () => {
    const initialState = CHECKBOXES.map(checkbox => {
        return {
            name: checkbox,
            id: checkbox.toLowerCase(),
            value: true
        }
    })
    const [checkboxes, setCheckboxes] = useState(initialState);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevState) => {
            const checkboxIndex = prevState.findIndex((checkbox) => checkbox.id === id )
            const nextState = prevState.slice(0)

            nextState[checkboxIndex] = {
                ...nextState[checkboxIndex],
                value: !nextState[checkboxIndex].value
            }

            return nextState
        })
    }

    return (
        <div>
            <h2>
                Selected: {checkboxes.map(({value, name}) => value ? `${name} ` : null)}
            </h2>
            {checkboxes.map(
                ({value, name, id}) =>
                <label htmlFor={id} key={id}>{name}
                    <input type="checkbox" id={id} name={id} checked={value} onChange={() => handleCheckboxChange(id)}/>
                </label>
            )}
        </div>
    )

}

export default ReactFunctionalComponent