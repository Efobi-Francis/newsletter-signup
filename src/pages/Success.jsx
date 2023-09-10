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
        <div className="flex flex-col px-5 mt-[40%]">
            <div>
                <img src={iconSuccess} alt="icon-success" />
                <h1 className='font-RobotoBold text-[2.8rem] leading-none mt-6 mb-6'>Thanks for subscribing!</h1>
                <p className=' text-lg'>
                    A confirmation email has been sent to <br /><span className=' font-RobotoBold'>{email}</span>. 
                    Please open it and <br />click the button inside to confirm your <br /> subscription.
                </p>
            </div>
            <button onClick={handleClick} className="bg-[hsl(234,29%,20%)] text-white py-4 rounded-lg mt-[60%]">Dismiss message</button>
        </div>
    )
}