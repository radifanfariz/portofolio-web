import { data } from "autoprefixer"
import Link from "next/link"
import Tulisan from "./ContentTexts"
import { GoLogoGithub } from "react-icons/go"
import { AiFillGithub } from "react-icons/ai"

const addContent = (index) => {

    let contentComponents = []


    Tulisan.texts[index].content.map((data) => {
        contentComponents.push(
            <ViewTextList key={uniqueId()} src={data.subJudul.src} subTitle={data.subJudul.text} content={data.deskripsi.text} />
        )
    })

    return (
        contentComponents
    )
}

const getTittle = (index) => {

    return Tulisan.texts[index].judul.text
}

const uniqueId = () => {
    return "id" + Math.random().toString(16).slice(2)
}

// const ViewTextTitle = ({title}) => {
//     return (
//         <>

//         </>
//     )
// }

const ViewTextList = ({ subTitle, src, content }) => {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-4xl xl:text-xl font-bold">
                    {subTitle}
                </h1>
                <Link href={`${src}`} passHref={true}>
                    <a className="flex items-center ml-3 bg-gray-100 px-3 rounded-full hover:opacity-25 shadow-xl" target={"_blank"}>
                        <AiFillGithub className="text-2xl" />
                        <GoLogoGithub className="ml-1 text-5xl" />
                    </a>
                </Link>
            </div>
            <ul className="text-3xl xl:text-xl text-left p-2 list-disc">
                {content.map(element =>
                    <li key={uniqueId()}>{element}</li>
                )}
            </ul>
        </>
    )
}

export { addContent, getTittle, ViewTextList }