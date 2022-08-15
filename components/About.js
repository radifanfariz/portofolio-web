import Image from "next/image"
import Profile from "../static/profile.jpeg"

const About = () => {
    return (
        <main id="about" className="mt-20">
            <div className="flex h-auto justify-center pt-14">
                <div className="flex w-[800px] flex-col bg-white m-10 rounded-3xl">
                    <div className="flex justify-center items-center font-['courier']">
                        <div className="text-4xl text-black p-5 rounded-full font-semibold font-['lemon']">About</div>
                    </div>
                    <div className="flex justify-center pt-5">
                        <Image className="rounded-full object-cover object-top max-w-full h-auto" src={Profile.src} alt={"Logo"} width={150} height={150} />
                    </div>
                    <div className="p-5">
                        <div className="text-3xl xl:text-xl text-left font-sans py-5 px-5 text-black">
                            My Name is Radifan Fariz. I graduated in Computer Science with 3.65 GPA. I define myself as
                            Programmer/Developer and for now i’m more experienced in android apps
                            development. I started seriously learning and developing android apps
                            when internship in PT. Telkom Regional 1 Sumatera. After finished my
                            internship, i got contract to develop some android apps for PT. Telkom
                            Regional 1 Sumatera. So from when i started my internship and i’ve
                            completed my contract from PT. Telkom Regional 1 Sumatera until now, i
                            already have more than 2 years of experience in android apps development.
                            Throughout the time that i worked in android apps development, i also
                            learned and enhanced some skills like PHP, Python, Flutter, Node.js, etc.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About