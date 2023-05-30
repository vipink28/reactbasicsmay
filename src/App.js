import Header from "./components/Header";
import ReactState from "./components/ReactState";

// import { func1 } from './components/abc';

function App(){
  let title = "React Course";
  let bgClass = "bg-danger";

  let isHeading = true;
  let size = 24;
  return(
    <>
    <div className={isHeading ? "bg-danger":""}>
   <ReactState />
    </div>
    </>
  )
}
export default App;