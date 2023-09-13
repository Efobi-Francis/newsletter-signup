import { useLocation, useNavigate } from 'react-router-dom'
import iconSuccess from '../assets/images/icon-success.svg'

export default function success() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/') //navigate back to home
    }

    return(
        <div className="flex flex-col px-5 mt-[40%] lg:justify-center lg:bg-white lg:w-fit lg:m-auto lg:px-20 lg:py-10 lg:rounded-3xl">
            <div>
                <img src={iconSuccess} alt="icon-success" />
                <h1 className='lg:hidden font-RobotoBold text-[2.8rem] leading-none mt-6 mb-6'>Thanks for subscribing!</h1>
                <h1 className='hidden lg:block font-RobotoBold text-5xl leading-none mt-6 mb-6'>Thanks for <br />subscribing!</h1>
                <p className='lg:hidden text-base'>
                    A confirmation email has been sent to <br /><span className=' font-RobotoBold'>{email}</span>. 
                    Please open it and <br />click the button inside to confirm your <br /> subscription.
                </p>
                <p className='hidden lg:block text-base'>
                    A confirmation email has been sent to <br /><span className=' font-RobotoBold'>{email}</span>. 
                    Please open it and click <br /> the button inside to confirm your subscription.
                </p>
            </div>
            <button onClick={handleClick} className="bg-[hsl(234,29%,20%)] text-white py-4 rounded-lg mt-[60%] lg:my-10 hover:bg-gradient-to-r hover:from-[hsl(346,100%,66%)] hover:to-[hsl(4,100%,67%)]">Dismiss message</button>
        </div>
    )
}