import bg_image from './assets/bg_image.png';
import Model from 'react-modal';
import Form from './Form'
import { useState } from 'react';

const Hero = () => {
    const [visible, setVisible] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    console.log("Modal state: ", visible);
    Model.setAppElement('#root');
    return (
        <div className="flex justify-center m-30">
            <div className="hero w-[1360px] h-[550px] border flex justify-between items-center">
                <div className="w-[552px] h-full  flex flex-col justify-evenly mx-5">



                    <h1 className='border-b-1 text-8xl py-3 border-dashed'>
                        Let&apos;s Learn <br /> & Earn
                    </h1>
                    <h1 className='border-b-1 text-3xl py-3 border-dashed'>
                        Get a chance to win <br /> up-to <span className='text-blue-600'>Rs. 15,000</span>
                    </h1>
                    <button onClick={() => setVisible(true)} className="bg-stone-900 w-[180px] cursor-pointer text-2xl text-amber-50 font-light p-2">Refer Now</button>
                    <Model isOpen={visible} onRequestClose={() => setVisible(false)} style={customStyles}>
                        <Form setVisible={setVisible} />
                    </Model>

                </div>
                <div className=''>
                    <img src={bg_image} alt="Hero" className="w-[655px] h-[550px] object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
