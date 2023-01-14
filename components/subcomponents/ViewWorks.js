import workContents from "../../contents/work_contents"


<<<<<<< HEAD
=======

const addComponents = () => {
>>>>>>> bb9a3da755bfe95975cdbb47d0a1c7fb97d936a4

// const addComponents = () => {

<<<<<<< HEAD
//     let contentComponents = []

//     workContents.works.map((data) => {
//         contentComponents.push(
//             <ViewWorks key={data.id} tahun={data.tahun} warna={data.warna} title={data.title} texts={data.texts} />
//         )
//     })
=======
    workContents.works.map((data) => {
        contentComponents.push(
            <ViewWorks key={data.id} tahun={data.tahun} warna={data.warna} title={data.title} texts={data.texts} />
        )
    })
>>>>>>> bb9a3da755bfe95975cdbb47d0a1c7fb97d936a4


//     return (
//         contentComponents
//     )
// }

// const uniqueId = () => {
//     return "id" + Math.random().toString(16).slice(2)
// }


const ViewWorks = ({ warna, tahun, title, texts }) => {
    return (
        <div className="flex mt-5">
            <div className="flex">
                <div className="mr-10 w-5 font-bold">{tahun}</div>
                <div className={`w-2 rounded-full ${warna}`}></div>
            </div>
            <div className="text-3xl xl:text-xl flex flex-col justify-start pl-6">
                <div className="font-bold">{title}</div>
                <div className="">
                    <ul className="list-disc pl-5">
                        {texts.map((item,index) =>
                            <li key={`desc${index}`}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ViewWorks