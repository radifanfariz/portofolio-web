import Link from "next/link"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"



const Contacts = () => {
    return (
        <main id="contact">
            <div className="flex h-auto justify-center mt-20 mb-10">
                <div className="flex w-[800px] flex-col mt-10 rounded-3xl">
                    <div className="flex justify-center items-start font-['courier']">
                        <div className="text-4xl text-white px-5 mt-5 rounded-full font-semibold font-['lemon']">Contacts</div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-xl text-white mb-10 mt-20">
                        <div className="flex h-36 w-44 justify-between items-center text-7xl ">
                            <Link href="https://www.instagram.com/radifan_fariz/">
                                <a className="hover:opacity-25" target="_blank">
                                    <AiFillInstagram className="text-6xl" />
                                </a>
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=6285156248033">
                                <a className="hover:opacity-25" target="_blank">
                                    <IoLogoWhatsapp className="text-6xl" />
                                </a>
                            </Link>
                        </div>
                        <div className="text-3xl text-center mb-5">Jl.Raja Junjungan Lubis No.88 Pandan, Tapanuli Tengah, Sumatera Utara
                        </div>
                        <div className="text-3xl">082211208329 | radifanfariz@gmail.com</div>
                    </div>
                    <div className="flex justify-center font-semibold pt-20 pb-10 text-xl text-white">Copyright © 2022 radifanfariz, Inc. All rights reserved.</div>
                </div>
            </div>
        </main>
    )
}

export default Contacts