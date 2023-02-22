import { addContent, getTittle } from "./subcomponents/ViewText";
import { addComponents } from "./subcomponents/PreviewSlider";


const Projects = () => {
    return(
        <main id="projects">
        <div className="flex h-auto justify-center mb-10">
            <div className="flex w-[800px] flex-col bg-white mt-10 rounded-3xl">
                <div className="flex justify-center items-center font-['courier']">
                    <div className="text-4xl text-black p-5 rounded-full font-semibold font-['lemon']">Projects</div>
                </div>
                <div className="flex justify-center mb-7">
                    <div className="text-2xl font-semibold font-['tommy'] bg-black text-white rounded-xl p-3">{getTittle(0)}</div>
                </div>
                {addComponents(0)}
                <div className="mx-6 text-justify font-sans py-5 px-5 text-black">
                    {addContent(0)}
                </div>
            </div>
        </div>
        <div className="flex h-auto justify-center">
            <div className="flex w-[800px] flex-col bg-white mt-3 rounded-3xl">
                <div className="flex justify-center mb-7 mt-10">
                    <div className="text-2xl font-semibold font-['tommy'] bg-black text-white rounded-xl p-3">{getTittle(1)}</div>
                </div>
                {addComponents(1)}
                <div className="mx-6 text-justify font-sans py-5 px-5 text-black">
                    {addContent(1)}
                </div>
            </div>
        </div>
        <div className="flex h-auto justify-center">
            <div className="flex w-[800px] flex-col bg-white mt-3 rounded-3xl">
                <div className="flex justify-center mb-7 mt-10">
                    <div className="text-2xl font-semibold font-['tommy'] bg-black text-white rounded-xl p-3">{getTittle(2)}</div>
                </div>
                {addComponents(2)}
                <div className="mx-6 text-justify font-sans py-5 px-5 text-black">
                    {addContent(2)}
                </div>
            </div>
        </div>
        <div className="flex h-auto justify-center">
            <div className="flex w-[800px] flex-col bg-white mt-3 rounded-3xl">
                <div className="flex justify-center mb-7 mt-10">
                    <div className="text-2xl font-semibold font-['tommy'] bg-black text-white rounded-xl p-3">{getTittle(3)}</div>
                </div>
                {addComponents(3)}
                <div className="mx-6 text-justify font-sans py-5 px-5 text-black">
                    {addContent(3)}
                </div>
            </div>
        </div>
        <div className="flex h-auto justify-center">
            <div className="flex w-[800px] flex-col bg-white mt-3 rounded-3xl">
                <div className="flex justify-center mb-7 mt-10">
                    <div className="text-2xl font-semibold font-['tommy'] bg-black text-white rounded-xl p-3">{getTittle(4)}</div>
                </div>
                {addComponents(4)}
                <div className="mx-6 text-justify font-sans py-5 px-5 text-black">
                    {addContent(4)}
                </div>
            </div>
        </div>
        <div className="flex h-auto justify-center">
            <div className="flex w-[800px] flex-col bg-white mt-3 rounded-3xl">
                <div className="flex justify-center mb-7 mt-10">
                    <div className="text-2xl font-semibold font-['tommy'] bg-black text-white rounded-xl p-3">{getTittle(4)}</div>
                </div>
                {addComponents(5)}
                <div className="mx-6 text-justify font-sans py-5 px-5 text-black">
                    {addContent(5)}
                </div>
            </div>
        </div>
    </main>
    )
}

export default Projects