function Card(props){
    const {title, count, isApp} = props;
    return (
        <div className="card">
         <h1>{title} &copy;</h1>
         <p>{count}</p>
         {props.children}
        </div>
    )
}
export default Card;