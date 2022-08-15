import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import Image from 'next/image'
import ProjectImages from "./ContentImages";

const addComponents = (index) => {

    return (
        <PreviewSlider key={uniqueId()} imageList={ProjectImages[index].images} />
    )
}

const uniqueId = () => {
    return "id" + Math.random().toString(16).slice(2)
}



const PreviewSlider = ({ imageList }) => {
    return (
        <div className="mx-3">
            <Swiper key={uniqueId} navigation={true} modules={[Navigation]} spaceBetween={-350} slidesPerView={2} className="mySwiper rounded-[100px] border-4">
                {
                    imageList.map((images) =>
                        images.src.map((item) => {
                            console.log(images)
                            return (
                                <SwiperSlide key={uniqueId()}>
                                    <div key={uniqueId()} className='w-[200px] h-[400px] relative ml-10 '>
                                        <Image key={uniqueId()} className='' layout='fill' src={item} alt='template' />
                                        <div key={uniqueId()} className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center text-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">{images.title}</div>
                                    </div>
                                </SwiperSlide>
                            )
                        })

                    )
                }
            </Swiper>
        </div>
    )
}

export { addComponents, PreviewSlider }