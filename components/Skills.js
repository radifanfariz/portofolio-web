import Link from 'next/link'
import Image from 'next/image'


const LogoProg = {
    "Java": "/static/java.svg",
    "Kotlin": "/static/kotlin.svg",
    "Javascript": "/static/javascript.svg",
    "Flutter": "/static/flutter.svg",
    "Android": "/static/android.svg",
    "Node.js": "/static/node-js.svg",
    "React.js": "/static/react-js.svg",
    "Csharp": "/static/c-sharp.svg",
    "PHP": "/static/php.svg",
    "Python": "/static/python.svg",

}

const uniqueId = () => {
    return "id" + Math.random().toString(16).slice(2)
}

const Skills = () => {
    let listComponent = []
    for (const key in LogoProg) {
        if (Object.hasOwnProperty.call(LogoProg, key)) {
            listComponent.push(
                <div key={uniqueId()} className="flex flex-col justify-center px-2">
                    <div className="flex justify-center hover:opacity-25">
                        <Image src={LogoProg[key]} height={50} width={50} />
                    </div>
                    <div className="flex w-14 justify-center items-center font-semibold">{key}</div>
                </div>
            )

        }
    }

    return (
        <main id="skills">
            <div className="flex h-auto justify-center mb-5">
                <div className="flex w-[800px] flex-col bg-white mt-10 rounded-3xl">
                    <div className="flex justify-center items-center font-['courier']">
                        <div className="text-4xl text-black px-5 mt-5 rounded-full font-semibold font-['lemon']">Skills</div>
                    </div>
                    <div className="flex flex-wrap justify-center my-10">
                        <div className="flex flex-col">
                            <div className="flex">
                                {listComponent}
                            </div>
                            {/* if there is additional data to add */}
                            <div className="flex justify-center pt-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Skills