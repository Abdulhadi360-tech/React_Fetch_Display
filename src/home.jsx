// import ListComponent from "./ListComponet";
// import { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import useFetch from "./useFetch";

const Home = () => {
  const {data:students,isPending,error}=useFetch("http://localhost:8001/students  ")
 
  
  
  return (
    <div className="Student-Bio">
      <h1>Welcome to my project 5 solution</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading.......</div>}
      { students && <ListComponent studentsInfo={students} title={" ABC School Student Bio-Data"} />}
    </div>
  );
};
export default Home;
