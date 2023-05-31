import Card from "./Card";

function ReactProps(){
    // props is an object which can be used to get data from the parent component.
    return (
        <div>
            <h3>React Props</h3>
            <Card title="Card 1" count={1}/>
            <Card title="Card 2" count={2}/>
            <Card title="Card 3" count={3}/>

            <Card title="Card 4">
                <h1>This is heading</h1>
                <p>This is paragraph</p>
            </Card>
        </div>
    )
}
export default ReactProps;