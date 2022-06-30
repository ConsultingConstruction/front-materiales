import React from "react";
import { TableContext } from "../Context/TableContext";
import { ListaDeMateriales } from "./ListaDeMateriales";
import { Navbar } from "./Navbar";
import { TableContainer } from "./TableContainer";
import { Loading } from "./Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Container() {
  const { loading } = React.useContext(TableContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={loading ? <Loading /> : <TableContainer />} />
        <Route path="/listaDeMateriales" element={<ListaDeMateriales />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Container };
