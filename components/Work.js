import "swiper/css";
import "swiper/css/navigation";
import { addComponents } from "./subcomponents/ViewWorks";


const Work = () => {
    return (
        <main id="work">
            <div className="flex h-auto justify-center mb-5">
                <div className="flex w-[800px] flex-col bg-white mt-10 rounded-3xl">
                    <div className="flex justify-center items-center font-['courier']">
                        <div className="text-4xl text-black px-5 mt-5 rounded-full font-semibold font-['lemon']">Work</div>
                    </div>
                    <div className="flex justify-center px-20">
                        <div className="flex flex-col items-center mb-10 justify-center text-xl">
                            {addComponents()}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Work