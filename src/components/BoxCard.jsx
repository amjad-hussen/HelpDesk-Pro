import React from 'react';

const BoxCard = ( {data}) => {
    
    const pendingData = data.filter(value => value.status == "Pending")
    const reviewedgData = data.filter(value => value.status == "Reviewed")
    const submittedData = data.filter(value => value.status == "Submitted")

    
    return (
        <div className='grid grid-cols-3 gap-4'>
                    <div className=' flex flex-col justify-center items-center bg-gray-400 text-white h-[250px] rounded-md '>
                        <h2 className='font-bold text-white text-3xl '>Pending</h2>
                        <h4 className='font-bold text-2xl '>{pendingData.length}</h4>
                    </div>
                    <div className=' flex flex-col justify-center items-center bg-purple-500 text-white h-[250px] rounded-md '>
                        <h2 className='font-bold text-white text-3xl '>Reviewed</h2>
                        <h4 className='font-bold text-2xl '>{reviewedgData.length}</h4>
                    </div>
                    <div className=' flex flex-col justify-center items-center bg-teal-500 text-white h-[250px] rounded-md '>
                        <h2 className='font-bold text-white text-3xl '>Submitted</h2>
                        <h4 className='font-bold text-2xl '>{submittedData.length}</h4>
                    </div>

                </div>
    );
};

export default BoxCard;