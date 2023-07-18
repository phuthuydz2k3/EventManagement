import React from "react";
import Event from './Event'

const Tbody = ({ filteredData }) => {

    return (
        <tbody>
            {filteredData.map((e) => (
                <Event
                    key={e.id}
                    id={e.id}
                    title={e.name}
                    place={e.place}
                    deadline={e.deadline}
                    stt={e.status}
                    budget={e.budget}
                />
            ))}
        </tbody>
    );
};

export default Tbody;