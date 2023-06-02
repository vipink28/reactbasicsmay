import Card from "./components/Card";
import ReactProps from "./components/ReactProps";
import Header from './components/Header';
import ReactState from "./components/ReactState";
function App(){

  return(
    <>
      <Header />
      <ReactProps />
      <Card title="App Title" isApp={true}/>
      <ReactState />
    </>
  )
}
export default App;