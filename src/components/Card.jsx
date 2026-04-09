import React, { use, useState } from 'react';
import Container from './Container';
import Toggle from './Toggle';
import Issue from './Issue';
import BoxCard from './BoxCard';

const Card = ({ fetchProblems }) => {

    const [toggleStatus, setToggleStatus] = useState("All")
    const initialData = use(fetchProblems);
    
    const [data, setData] = useState(initialData)
    
    const filtredData  = toggleStatus == "All" ? data : data.filter(elem => elem.status == toggleStatus)
  
    


    return (
        <div className='my-5'>
            <Container>
                <BoxCard data ={data}></BoxCard>
            </Container>

            <div>
                <Toggle toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggle>
            </div>
            <Container>

                { filtredData.length == 0 ? <h2 className='font-bold text-center text-slate-700 text-4xl my-10'>No Data</h2> : <div className='grid grid-cols-3 gap-5 '>
                    {
                        filtredData.map((issue, ind) =>
                            <Issue key={ind} issue={issue} data ={data} setData={setData} ></Issue>
                            )
                    }
                </div>}
            </Container >
        </div >
    );
};

export default Card;