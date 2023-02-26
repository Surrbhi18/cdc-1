import React from "react";
import {Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
