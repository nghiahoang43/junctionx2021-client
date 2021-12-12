import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Fill/Container";
import { useState } from "react";
import Option from "./Option/Option";
import axios from 'axios'
import ListForm from "./component/listForm";
import CreateForm from "./component/createForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return(
    <Routes>
      <Route path="/" exact element={<ListForm/>}>
        {/* <ListForm/> */}
      </Route>
      <Route path="/create-form" element={<CreateForm/>}>
        
      
      </Route>

    </Routes>
  )
}

export default App;
