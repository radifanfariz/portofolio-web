import Image from "next/image"
import aboutContents from "../contents/about_contents"
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
                            {aboutContents}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About