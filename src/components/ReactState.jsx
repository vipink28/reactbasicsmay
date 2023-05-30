import React, { useState } from 'react';
function ReactState() {
    const  initialStudentList = [
        {id: 1, name: "Shubham", fees: 25000, course: "Python"},
        {id: 2, name: "Saloni", fees: 45000, course: "Full Stack"},
        {id: 3, name: "Rishabh", fees: 26000, course: "Web Design"},
        {id: 4, name: "Simran", fees: 35000, course: "Java"},
        {id: 5, name: "Neeraj", fees: 65000, course: "PHP"}
    ]
    const [title, setTitle] = useState("React State");
    const [studentData, setStudentData]=useState(initialStudentList);
    
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
export default ReactState;