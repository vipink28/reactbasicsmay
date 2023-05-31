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
    
    const updateStudent=()=>{
        setStudentData((prev)=>{
            return [
                ...prev,
                {id: 6, name: "Ravi", fees: 34000, course: "Digital Marketing"}
            ]
        })
    }

    const deleteStudent=(id)=>{
        // array.filter()
        const filteredArray = studentData.filter((item)=>{
            return item.id !== id
        })
        setStudentData(filteredArray);
    }

    return (
        <div>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Fees</td>
                        <td>Course</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentData.map((item, index)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.fees}</td>
                                    <td>{item.course}</td>
                                    <td><button onClick={()=>{deleteStudent(item.id)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={updateStudent}>Update</button>
        </div>
    );
}
export default ReactState;
