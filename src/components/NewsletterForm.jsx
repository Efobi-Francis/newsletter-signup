import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function newsletterForm() {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        // Call the email validation function here
        setIsValid(validateEmail(email));
    };
    
    const validateEmail = (email) => { //this email parameter is coming from newEmail
        // Regular expression for email validation
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValid) {
            setIsSubmitClicked(true)
            // Handle form submission, e.g., send data to the server
        }else{
            // Once done, you can redirect to '/success'
            navigate(`/success?email=${email}`);
        }
    };

    const inputStyle = `mb-4 py-4 rounded-lg pl-6 hover:border-[hsl(234,29%,20%)] focus:border-none focus:outline-[hsl(234,29%,20%)] focus:ring-0`

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col mt-6 mb-5">
                <div className=" font-RobotoBold mb-1 flex justify-between text-xs">
                    <label htmlFor="eAddress">Email address</label>
                    {isSubmitClicked && !isValid && email.trim() !== '' && (
                        <span className=' text-red-400'>Valid email required</span>
                    )}
                    {isSubmitClicked && isValid && email.trim() !== '' && (
                        <span></span>
                    )}
                </div>
                <input 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    name="email" id="eAddress" placeholder="email@company.com"
                    required
                    className={`${inputStyle} ${email === '' ? 'border-gray-400' : isSubmitClicked && !isValid ? 'border-red-400 bg-red-200 text-red-400 focus:outline-red-400' : 'border-gray-400'}`}
                />
                <button className="bg-[hsl(234,29%,20%)] text-white py-4 rounded-lg hover:bg-gradient-to-r hover:from-[hsl(346,100%,66%)] hover:to-[hsl(4,100%,67%)] hover:drop-shadow-[0_15px_15px_rgba(255,98,87,0.50)]">Subscribe to monthly newsletter</button>
            </form>
        </div>
    )
}

