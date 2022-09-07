import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { MainPage } from "./pages/MainPage"
import { ViewData } from "./pages/ViewData";


function App() {
  const[ data, setData ] = useState<any>([]);
  const [ display, setDisplay ] = useState<any>([]);
  const [ isLoading, setIsLoading ] = useState(false);
  
    //acessar a api https://restcountries.com/v3.1/all
    useEffect(()=>{
      setIsLoading(true)
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
            setData(data);
            setDisplay(data);
        })
    }, []);

  return (
    <div className=" dark:bg-slate-900 bg-slate-300 h-full min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-5">
        <NavBar setData={setDisplay} data={data} />
        <Routes>
          <Route path="/" element={
            isLoading ? (
              <div className="flex justify-center items-center m-[15rem]">
                <CircularProgress/>
              </div>
            ):(
              <MainPage dados={ display }/>
            )
          } />
          <Route path="/about/:name" element={<ViewData/>} />
        </Routes>
      </div>  
    </div>
  )
}

export default App;