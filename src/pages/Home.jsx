import NewsletterForm from "../components/NewsletterForm"
import SignupInfo from "../components/Signup_info"
import imageSignupMobile from '../assets/images/illustration-sign-up-mobile.svg'
import imageSignupDesktop from '../assets/images/illustration-sign-up-desktop.svg'

export default function home() {
    return(
        <div className='font-RobotoRegular text-[hsl(234,29%,20%)] lg:flex lg:justify-center lg:items-center lg:w-fit lg:bg-white lg:m-auto lg:p-5 lg:rounded-3xl lg:gap-5'>
            <div className="lg:order-2">
                <img src={imageSignupMobile} alt="illustration-sign-up-mobile" className=' w-full h-full lg:hidden' />
                <img src={imageSignupDesktop} alt="illustration-sign-up-mobile" className=' w-full h-full hidden lg:flex' />
            </div>
            <div className='px-5 lg:order-1 lg:px-10'>
                <SignupInfo/>
                <NewsletterForm/>
            </div>
        </div>
    )
}