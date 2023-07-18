import React from "react";
import Badge from './Badge';

const Event = ({id, title, place, deadline, stt, budget}) => {
    return (
        <tr>
            <td> {id}</td>
            <td>{title}</td>
            <td>{place}</td>
            <td>{deadline}</td>
            <td>
                <Badge stt={stt}/>
            </td>
            <td><strong>{budget}</strong></td>
        </tr>
    );
}

export default Event;