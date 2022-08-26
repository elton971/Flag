import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import { Card } from "../components/Card";


export const MainPage=(props:any)=>{

    return(
        <div>   
            <div className="grid grid-cols-4 gap-10 m-20  ">    
                {
                    props.dados.length>0 ? (
                    props.dados.map((item:{ name: {common:string; official: string; }; population: string; region: string; flags: { svg: string; }; capital: string; })=>{
                    
                        return <Card 
                            common={item.name.common}
                            coutry={item.name.official} 
                            population={item.population} 
                            region={item.region} 
                            flag={item.flags.svg}
                            capital={item.capital}
                        />
                    })
                    ):(
                        <div className="">
                            <Stack sx={{ width: '100%' }} spacing={2} >
                                <Alert severity="error">
                                    <AlertTitle>404:Not Found</AlertTitle>
                                    Country not Found— <strong>check it out!</strong>
                                </Alert>
                            </Stack>
                        </div>
                    )
                }
            </div>
        </div>

    )
}