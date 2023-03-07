import { useEffect,useState} from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import './style/gridView.css';
import './style/menuBar.css';
import './style/body.css';
import './style/emptyContainer.css';
function Index(){
  return(
    <App/>
  )
}

const root=reactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);