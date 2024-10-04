import LoginBox from '../Components/LoginBox';
import Homepage from '../Components/Homepage';
import Leftbg from '../Assets/leftbg.jpg';

const LoginAdmin = () => {
    return (
        <div className="w-full h-screen flex">
            <div className="w-full h-full flex">
                <div
                    className="w-[700px] h-full flex justify-center items-center rounded-[0_30px_30px_0]"
                    style={{
                        background: 'radial-gradient(171.87% 171.87% at 31.64% 55.75%, rgba(0, 70, 251, 0.8) 0%, rgba(0, 71, 255, 0) 100%)',
                    }}
                >
                    <Homepage className='w-[600px] h-[600px]' />
                </div>

                <div
                    className="w-[790px] h-full mx-auto flex justify-center items-center bg-cover"
                    style={{ backgroundImage: `url(${Leftbg})` }}>
                    <div className='w-[642px] h-[706px] '>
                        <LoginBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;
