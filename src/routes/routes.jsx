import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import Movies from "../container/movies";
import Series from "../container/Series";
import DefaltLayout from "../layout/DefaltLayout";
import Detalhe from "../container/Detalhe";


const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<DefaltLayout/>} >
          <Route path="/" exact element={<Home />} />
          <Route path="/filmes" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/detalhe/:id" element={<Detalhe/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default Router

