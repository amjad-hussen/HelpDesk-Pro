import React from 'react';
import Container from './Container';

const Toggle = ({ toggleStatus, setToggleStatus }) => {


    const btnStatus = ["All", "Pending", "Reviewed", "Submitted"]

    return (
        <div className='text-right mt-15 mb-5'>
            <Container>
                {
                    btnStatus.map((btn, ind) => {
                        return <button key={ind}
                            onClick={() => setToggleStatus(btn)}
                            className={` ${ind == 0 && "rounded-l-md"} ${ind == btnStatus.length - 1 && "rounded-r-md !border-r-0"}  bg-purple-100  text-purple-500 font-semibold text-xl px-3 py-1 cursor-pointer border-r-3 ${toggleStatus == btn && "bg-purple-500 text-white"}`}>{btn}
                        </button>
                    })
                }

            </Container>
        </div>
    );
};

export default Toggle;