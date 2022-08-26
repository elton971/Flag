import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import seta from "../assets/seta_para_esq.png"

// recebe o objecto e  o nome
export const ViewData=( )=>{
    const { name } = useParams()
    const[data, setData]=useState<any>([]);
    const [isLoading, setIsLoading] = useState(true)



     //acessar a api https://restcountries.com/v3.1/name/{name}
     useEffect(()=>{
          fetch(`https://restcountries.com/v3.1/name/${name}`)
          .then(res=>res.json())
          .then(data=>{
            setIsLoading(false)
            setData(data[0]);
          })
      },[])
    return(
        <div>
            {
                 isLoading ? (
                    <div className="flex justify-center items-center m-[15rem]">
                      <CircularProgress/>
                    </div>
                  ):(
                     <div className="mx-[4.3rem]">
                <div> 
                    <Link  to="/"className=" bg-white text-black flex  justify-center p-5 gap-2  dark:bg-slate-800 dark:text-white w-48 rounded">
                        <img src={seta} alt="" />
                        Back
                    </Link>
                </div>
                <div className="grid grid-cols-2 mt-20 gap-36">
                    <div >
                        <img src={data.flags.svg} alt=""  />
                    </div>
                    <div className="dark:text-white text-black flex flex-col gap-20">
                        <h1 className="text-[2rem] font-bold ">{data.name.official}</h1>

                        <div className="grid grid-cols-2">
                            <div>
                                <p><strong>Population:  </strong>{data.population}</p>
                                <p><strong>Region:  </strong> {data.region}</p>
                                <p><strong>Sub Region:  </strong> {data.subregion}</p>
                                <p><strong>Capital:  </strong>{data.capital}</p>
                            </div>
                            <div>
                                <p><strong>Top level Domain:  </strong>{data.tld}</p>

                            </div>
                        </div>
                        <div>
                            <p>Border Countries</p>
                        </div>
                    </div>
                </div>
            </div>
            ) }
           
        </div>
    )
}


