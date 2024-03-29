import Link from "next/link"
import { GoLogoGithub } from "react-icons/go"
import { AiFillGithub } from "react-icons/ai"
import projectContents from "../../contents/project_contents"

const addContent = (index) => {

    let contentComponents = []


    projectContents.texts[index].content.map((data,index) => {
        contentComponents.push(
            <ViewTextList key={`projectContent${index}`} src={data.subJudul.src} subTitle={data.subJudul.text} content={data.deskripsi.text} />
        )
    })

    return (
        contentComponents
    )
}

const getTittle = (index) => {

    return projectContents.texts[index].judul.text
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
                {content.map((element,index) =>
                    <li key={`element${index}`}>{element}</li>
                )}
            </ul>
        </>
    )
}

export { addContent, getTittle, ViewTextList }