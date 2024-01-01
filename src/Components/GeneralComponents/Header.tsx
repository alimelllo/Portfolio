import Image from 'next/image';
import logo from '../../../public/images/NeonHubLogo.webp';


const Header = () => {



    return (
        <header className='w-full h-[5rem] md:py-2 z-30 flex flex-row items-center'>
            <div className='w-full flex z-40 h-[80%] flex-row justify-between'>
                <div className='w-4/12 flex'>
                    <div className='flex w-5/12 items-center md:w-full'>
                        <Image alt={'Neon Hub'} src={logo} />
                    </div>
                </div>


                <div className='w-4/12 text-[gray] md:hidden font-[Vazir] text-[1.25rem] flex flex-row items-center justify-center '>
                    <button className='w-3/12 h-[70%] hover:text-[#ffffff] transition-all duration-200'>دسته</button>
                    <button className='w-3/12 h-[70%] hover:text-[#ffffff] transition-all duration-200'>محصولات</button>
                    <button className='w-3/12 h-[70%] hover:text-[#ffffff] transition-all duration-200'>درباره ما</button>
                </div>


                <div className='w-4/12 text-[gray]  justify-end font-[Vazir] text-[1.25rem] md:text-[1rem] flex flex-row items-center pr-5 '>
                    <div className='bg-[#344995] h-[80%] w-4/12 flex items-center md:w-full rounded-[5px] hover:text-[#ffffff] '>
                        <button className='bg-black hover:bg-transparent h-[90%] transition-all duration-200 text-[#f1c2ca] w-[95%] text-center mx-auto hover:text-white'>ثبت نام / ورود</button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;