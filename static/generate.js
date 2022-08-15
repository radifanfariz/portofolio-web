const Tulisan = [
    {
        judul: {
            id: "judul",
            text: "MyTools App",
            content:
                [
                    {
                        subJudul: {
                            id: "sub-judul",
                            text: "MyTools SalesForce"
                        },
                        deskripsi: {
                            id: "list-1",
                            text: [
                                `Android application for Telkom Sales to visualize Optical Distribution Point
                (ODP) into map and to collect new customers data.`,
                                `Using Android Studio (Java), PHP (RESTful API), and MySQL`
                            ]
                        }

                    },
                    {
                        subJudul: {
                            id: "sub-judul-2",
                            text: "MyTools Technician"
                        },
                        deskripsi: {
                            id: "list-2",
                            text: [
                                `Android application for Telkom Sales to visualize Optical Distribution Point
                (ODP) into map and to collect new customers data.`,
                                `Using Android Studio (Java), PHP (RESTful API), and MySQL`
                            ]
                        }

                    },
                    {
                        subJudul: {
                            id: "sub-judul-3",
                            text: "MyTools Collections"
                        },
                        deskripsi: {
                            id: "list-3",
                            text: [
                                `Android application for Telkom Sales to visualize Optical Distribution Point
                (ODP) into map and to collect new customers data.`,
                                `Using Android Studio (Java), PHP (RESTful API), and MySQL`
                            ]
                        }

                    }
                ]
        },

        // judul: {
        //     id: "judul-x1",
        //     text: "Bot",
        //     content:
        //         [
        //             {
        //                 subJudul: {
        //                     id: "sub-judul-x1",
        //                     text: "Bot"
        //                 },
        //                 deskripsi: {
        //                     id: "list-x1",
        //                     text: [
        //                         `Android application for Telkom Sales to visualize Optical Distribution Point
        //         (ODP) into map and to collect new customers data.`,
        //                         `Using Android Studio (Java), PHP (RESTful API), and MySQL`
        //                     ]
        //                 }

        //             },
        //         ]
        // },
    },
]

const createTagText = (targetId, newtag, text) => {
    let tag = document.createElement(newtag)
    let node = document.createTextNode(text)
    tag.appendChild(node)
    let element = document.getElementById(targetId)
    element.appendChild(tag)
}

const generateElements = () => {
    Tulisan.forEach(element => {
        createTagText(element.judul.id, "span", element.judul.text)
        element.judul.content.forEach(subElement => {
            createTagText(subElement.subJudul.id, "span", subElement.subJudul.text)
            subElement.deskripsi.text.forEach(text => {
                createTagText(subElement.deskripsi.id, "li", text)
            })
        })
    })
}

generateElements()