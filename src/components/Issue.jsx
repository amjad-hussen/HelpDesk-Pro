import React from 'react';

const Issue = ({issue, data, setData}) => {

    const handleClick =()=>{
        
        const currentData = data.find(elem => elem.ticketId == issue.ticketId)
         if(currentData.status == "Pending"){
            currentData.status = "Reviewed"
         }
         else if(currentData.status == "Reviewed") {
            currentData.status = "Submitted"
         }
         
         const issueData = data.filter(elem => elem.ticketId != issue.ticketId)
         
         setData ([currentData, ...issueData])


    }
    
    return (
        <div onClick={handleClick} className='bg-slate-200 rounded-md p-5'>
            <img className='w-[80px] h-[80px] rounded-full ' src={issue.userImg} alt={issue.requestedBy} />
            <h2 className='text-2xl font-bold mt-2 '>{issue.requestedBy}</h2>
            <div className=' flex justify-between'>

                <h3 className='text-semibold text-2xl '>{issue.subject}</h3>

                <div className='flex gap-3'>

                    <span className={`font-semibold text-xl px-2 py-1 rounded 
                                            ${issue.priority == 'High' ?
                            "bg-red-500 text-white"
                            : issue.priority == "Medium"
                                ? "bg-yellow-500 text-white"
                                : "bg-green-500 text-white"}`}>{issue.priority}
                    </span>
                    <span className={`font-semibold text-xl px-2 py-1 rounded 
                                            ${issue.status == 'Pending' ?
                            "bg-red-500 text-white"
                            : issue.status == "Reviewed"
                                ? "bg-yellow-500 text-white"
                                : "bg-green-500 text-white"}`}>{issue.status}</span>
                </div>
            </div>
            <p className='text-semibold font-xl text-slate-700'>{issue.description}</p>
        </div>
    );
};

export default Issue;