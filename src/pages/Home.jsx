import NewsletterForm from "../components/NewsletterForm"
import SignupInfo from "../components/Signup_info"
import imageSignupMobile from '../assets/images/illustration-sign-up-mobile.svg'

export default function home() {
    return(
        <div className='font-RobotoRegular text-[hsl(234,29%,20%)]'>
            <div>
                <img src={imageSignupMobile} alt="illustration-sign-up-mobile" className=' w-full h-full' />
            </div>
            <div className=' px-5'>
                <SignupInfo/>
                <NewsletterForm/>
            </div>
        </div>
    )
}