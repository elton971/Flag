import { Link } from "react-router-dom";

export const Card=(props:any)=>{

    
    return(
        <Link to={`/about/${props.common}`} className=" ">
        <div className=" dark:bg-slate-800  dark:text-neutral-100 text-black  bg-white mb-5 rounded-lg grid grid-rows-2 h-[32rem] shadow-md shadow-black">
            <div className="mb-20 w-full h-60 ">
                <img src={props.flag} alt="bandeiras"  className="rounded-t-lg h-60 w-full object-cover "/>
            </div>
            <div className="mx-10">
                <h3 className="font-bold text-[1.4rem] mb-10 ">{props.coutry}</h3>
                <p className="margin_botton"><strong>Population</strong>: <label className="">{props.population}</label></p>
                <p className="margin_botton"><strong>Region</strong>: <label className="">{props.region}</label> </p>
                <p className="margin_botton"><strong>Capital</strong>: <label className="">{props.capital}</label></p>
            </div>
        </div>
        </Link>

    )
}