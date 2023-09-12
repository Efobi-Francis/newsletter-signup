import iconList from '../assets/images/icon-list.svg'

export default function signupInfo() {
    return(
        <div>
            <h1 className=' font-RobotoBold text-[2.5rem] lg:text-[3.5rem] mt-6 mb-4 lg:mt-0'>Stay updated!</h1>
            <p className=' lg:hidden text-base mb-6 whitespace-pre-line'>Join 60,000+ product managers receiving 
                monthly updates on:
            </p>
            <p className='hidden lg:block text-base mb-6 whitespace-pre-line'>Join 60,000+ product managers receiving 
                monthly <br /> updates on:
            </p>
            <div className='pr-2'>
                <div className='flex items-start mb-4'>
                    <div>
                        <img src={iconList} alt="icon-list"/>
                    </div>
                    <span className=' pl-4 whitespace-pre-line'>Product discovery and building what
                        matters
                    </span>
                </div>
                <div className='flex items-start mb-4'>
                    <div>
                        <img src={iconList} alt="icon-list"/>
                    </div>
                    <span className=' pl-4 whitespace-pre-line'>Measuring to ensure updates are a    
                        success
                    </span>
                </div>
                <div className='flex items-start'>
                    <div>
                        <img src={iconList} alt="icon-list"/>
                    </div>
                    <span className=' pl-4'>And much more!</span>
                </div>
            </div>
        </div>
    )
}