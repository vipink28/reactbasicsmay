import Card from "./components/Card";
import ReactProps from "./components/ReactProps";

function App(){

  return(
    <>
      <ReactProps />
      <Card title="App Title" isApp={true}/>
    </>
  )
}
export default App;