import React from 'react';
import img1 from '../../../image/img2.jpg'
import img2 from '../../../image/img3.jpg'
import img3 from '../../../image/img5.jpg'
import img4 from '../../../image/img6.jpg'
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: "will smith", img: img1 },
    { id: 2, name: "will smith", img: img2 },
    { id: 3, name: "will smith", img: img3 },
    { id: 4, name: "will smith", img: img4 },
]



const Experts = () => {
    return (
        <div id='Experts' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}



                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;