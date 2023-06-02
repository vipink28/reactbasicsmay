function StudentRow(props){
    const { item, deleteStudent } = props;
    
    return(
    <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.fees}</td>
        <td>{item.course}</td>
        <td><button onClick={()=>{deleteStudent(item.id)}}>Delete</button></td>
    </tr>
    )
}
export default StudentRow;