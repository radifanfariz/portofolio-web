import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image'
import projectContentImages from "../../contents/project_content_images";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const addComponents = (index) => {

    return (
        <PreviewSlider key={`preview-${index}`} imageList={projectContentImages[index].images} />
    )
}

const uniqueId = () => {
    return "id" + Math.random().toString(16).slice(2)
}



const PreviewSlider = ({ imageList }) => {
    return (
        <div className="mx-3">
            <PhotoProvider>
                <Swiper navigation={true} modules={[Navigation]} spaceBetween={-50} slidesPerView={2} className="mySwiper rounded-[100px] border-4">
                    {
                        imageList.map((images) =>
                            images.src.map((item) => {
                                console.log(images)
                                return (
                                    <SwiperSlide key={images.title}>
                                        <div className='w-[350px] h-[800px] relative ml-10 '>
                                            <PhotoView src={item}>
                                                <a className="cursor-pointer">
                                                    <Image className='object-cover' layout='fill' src={item} alt='template' />
                                                    <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center text-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">{images.title}</div>
                                                </a>
                                            </PhotoView>
                                        </div>
                                    </SwiperSlide>
                                )
                            })

                        )
                    }
                </Swiper>
            </PhotoProvider>
        </div>
    )
}

export { addComponents, PreviewSlider }