import Link from 'next/link'
import Typed from 'react-typed'
import Image from 'next/image'
import Diamond from '../static/diamond_black.png'
import DiamondTwo from '../static/diamond_black_2.png'
import Crescent from '../static/crescent_yellow.png'
import Ava from '../static/avatar.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="flex justify-evenly items-center h-18 font-['lemon'] text-xl font-extrabold rounded-xl bg-white text-black m-5 ">
                    <Link href={'#about'}>
                        <a>  <div className="hover:underline hover:opacity-25 p-3">About</div></a>
                    </Link>
                    <Link href={'#work'}>
                        <a>  <div className="hover:underline hover:opacity-25 p-3">Work</div></a>
                    </Link>
                    <Link href={'#skills'}>
                        <a>  <div className="hover:underline hover:opacity-25 p-3">Skills</div></a>
                    </Link>
                    <Link href={'#projects'}>
                        <a>  <div className="hover:underline hover:opacity-25 p-3">Projects</div></a>
                    </Link>
                    <Link href={'#contact'}>
                        <a>  <div className="hover:underline hover:opacity-25 p-3">Contact</div></a>
                    </Link>
                </div>
            </nav>
            <div className="flex justify-center">
                <div className="flex max-w-xl p-5 text-white font-semibold text-3xl mt-10 font-['lemon']">Radifan Fariz</div>
            </div>
            <div className="flex justify-center items-end h-40">
                <div className="text-center bg-white text-black max-w-xl w-max text-5xl font-['Consolas'] font-semibold capitalize">
                    <Typed strings={[
                        'Welcome to My Portofolio Web'
                    ]} typeSpeed={50} backSpeed={50} loop />
                </div>
            </div>
            <div className="flex justify-evenly mt-10">
            <Image className="" src={Diamond.src} alt={"Logo"} width={150} height={150} />
            <Image className="" src={Crescent.src} alt={"Logo"} width={150} height={150} />
            <Image className="" src={DiamondTwo.src} alt={"Logo"} width={150} height={150} />
            </div>
        </header>
    )
}

export default Header