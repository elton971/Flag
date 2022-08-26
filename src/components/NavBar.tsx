import { useEffect, useState } from "react"
import lua from "../assets/lua.svg"
import sol from "../assets/sol.svg"
import lupa from "../assets/lupa.svg"
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export const NavBar=(props:any)=>
{
    const [isDarkMode,setDarkMode]=useState(false)
    const [pesquisa,setPesquisa]=useState("");
    

    //Para funcionar o enter do pesquisar
    //https://restcountries.com/v3.1/name/{name}
    
    const handleKeyDown = (event: { key: string }) => {
        if (event.key === 'Enter') {
            
            const filtered=props.data.filter((elements:any)=>{
                const name=elements.name.common
                if(name.toLowerCase().includes(pesquisa.toLowerCase()))
                {
                    return elements
                }
            })
            props.setData(filtered);
        }
      }

    const filteredCountry=(regiaoName:string)=>{
        const filtered=props.data.filter((elements:any)=>{
            const regiao=elements.region;
            if(regiao.toLowerCase().includes(regiaoName.toLowerCase()))
            {
                return elements
            }
        })
        props.setData(filtered)

    }

    return(
        
        <div>
             <div className="dark:bg-slate-800  dark:text-white bg-white text-black shadow-lg shadow-black">
                <header className=" flex justify-between p-7">
                    <p className=" margin text-[1.5rem]" >Onde no Mundo</p>
                    <button className=" margin flex items-center gap-5"
                        onClick={()=>{
                            setDarkMode(!isDarkMode)
                            document.querySelector('html')?.classList.toggle("dark")//para aticar dark mode
                        }}
                    >
                        <img src={
                            isDarkMode ? lua : sol
                        }  className="w-8"/>
                        <p >{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                    </button>
                </header>
            </div>
            <div className="flex justify-between mx-[4.2rem] my-10">
                <div className=" dark:bg-slate-800 bg-white shadow-sm shadow-black py-4  px-10 w-[35rem] h-15 rounded-lg flex gap-5">
                    <img src={lupa} alt=""
                    className="w-8 h-8"  />
                    <input className="bg-transparent outline-none w-80 dark:text-white text-black dark:placeholder-white placeholder-black max-h-20" type="text" placeholder="Seach for a country..."
                        onChange={(e)=>{
                            setPesquisa(e.target.value)
                        }}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="relative w-64">
                <div className="absolute top-0 right-0 ">
			        <div className=" dark:bg-slate-800 dark:text-white bg-white text-black py-6 px-10 rounded-lg  flex items-center dark:hover:bg-slate-700 transition-colors duration-500  ">
				        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                        >

                            <TreeItem nodeId="1" label="Filter By Region">
                                <TreeItem nodeId="2" label="Europe" 
                                onClick={()=>{filteredCountry("Europe")}}
                                 />
                                <TreeItem nodeId="2" label="Americas" 
                                onClick={()=>{filteredCountry("Americas")}}

                                />
                                <TreeItem nodeId="2" label="Asia" 
                                onClick={()=>{filteredCountry("Asia")}}

                                />
                                <TreeItem nodeId="2" label="Africa"
                                onClick={()=>{filteredCountry("Africa")}}

                                />
                                <TreeItem nodeId="2" label="Oceania"
                                onClick={()=>{filteredCountry("Oceania")}}
                                
                                />
                            </TreeItem>
                        
                    </TreeView>
                        
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}