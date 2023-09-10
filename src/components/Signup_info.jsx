import iconList from '../assets/images/icon-list.svg'

export default function signupInfo() {
    return(
        <div>
            <h1 className=' font-RobotoBold text-[2.5rem] mt-6 mb-4'>Stay updated!</h1>
            <p className=' text-base mb-6 whitespace-pre-line'>Join 60,000+ product managers receiving 
                monthly updates on:
            </p>
            <div>
                <div className='flex items-start mb-4'>
                    <div>
                        <img src={iconList} alt="icon-list"/>
                    </div>
                    <span className=' pl-4'>Product discovery and building what <br />
                        matters
                    </span>
                </div>
                <div className='flex items-start mb-4'>
                    <div>
                        <img src={iconList} alt="icon-list"/>
                    </div>
                    <span className=' pl-4'>Measuring to ensure updates are a <br />
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