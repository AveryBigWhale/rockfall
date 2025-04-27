"use client";

// import Hero from '@/components/Hero'
// // import Header from '@/components/Header'
// import DonateSection from '@/components/DonateSection'
// // import Footer from '@/components/Footer'

import Link from 'next/link';
import Image from "next/image"; // Add StaticImageData import
// { StaticImageData }
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import newsData from '@/app/news/newsData.json';
// import policyData from '@/app/policy/policyData.json';
import banner from "../public/banner.png"; // 新增導入
// import 'swiper/css';
import "swiper/swiper-bundle.css";
import news1 from '../public/address1.png';
import news2 from '../public/sun-grass-kids.png';
import news3 from '../public/walking.png';

// import defaultImg from "../public/default.png"; // 新增導入
const newsImages = [news1, news2, news3];
// const policyImages = [education, budget, health, court];

export default function Home() {
  return (
    <div className="bg-white relative ">
      
      {/* Hero Section */}
      <div className="relative w-full h-72 h-[100vh]"
        // style={{
        //   // position: 'absolute',
        //   // width: '100%',
        //   // height: '100%',
        //   // backgroundImage: "url('https://averybigwhale.github.io/entry/public/puzzle-bg.png')",
        //   // backgroundImage: "url('/puzzle-bg.png')",
        //   backgroundImage: `url(${ImageLoader({ src: '/banner.png' })})`,
        //   backgroundSize: 'cover',
        //   backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
        //   backgroundPosition: 'center',
        // }}
        >
        <Image
          // src="../public/banner.png"
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="與自然同行，為人心守望"
        />

      </div>

      {/* 最新動態 */}
      <div className="text-intertidalDarkMain">
        <Section title="最新動態" data={newsData} />
      </div>
      {/* 政策宣傳 */}
      {/* <div className="text-intertidalDarkMain">
        <Section title="政策宣傳" data={policyData} />
      </div> */}
    </div>
    // <>
     
    //   <Hero />
    //   <DonateSection />

    // </>
  )
}

type NewsItem = {
  id: number;
  date: string;
  title: string;
  description: string[];
  subtitle?: string[];
  texts?: string[];
  imageUrl: string;
};

type SectionProps = {
  title: string;
  data: NewsItem[];
};

function Section({ title, data }: SectionProps) {
  let cat = ""

  if (title === "最新動態") {
    cat = "news"
  } else {
    cat = "policy"
  }
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-intertidalDarkMain flex items-center mb-4">
        <span className="mr-2">{title === "最新動態" ? "📰" : "📢"}</span> {title}
        {/* {title === "最新動態" ? (
          <Image src={newspaperIcon} alt="Newspaper Icon" width={24} height={24} className="mr-2" />
        ) : (
          <Image src={loudspeakerIcon} alt="Newspaper Icon" width={24} height={24} className="mr-2" />
        )}
        {title} */}
      </h2>
      <Swiper 
        className="my-swiper" 
        spaceBetween={20} 
        slidesPerView={1} // Default to 1 slide
        navigation 
        // pagination={{ clickable: true }} 
        modules={[Navigation, Pagination]} 
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on small screens
          },
          768: {
            slidesPerView: 3, // 3 slides on medium screens
          },
        }}
      >

          {data.map((item, index) => (
          //  {newsData.map((item, index) => (
            <SwiperSlide key={index}>
  
              <Link key={item.id} href={`/${cat}/${item.id}`}> 
                <div className="bg-white rounded-2xl shadow-md h-1/2 p-0 m-0">
                {title === "最新動態" ? (
                  <Image
                    src={newsImages[item.id -1]}
                    // src={defaultImg}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-2xl" 
                    alt={item.title}
                  />
                    ) : (
                  <Image
                    src={newsImages[item.id -1]}
                    // src={defaultImg}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-2xl" 
                    alt={item.title}
                  />
                  )}
                  
                  <div className="p-4">
                    <div className="text-sm text-[#001f3f] mb-1">{item.date}</div>
                    <h3 className="text-lg text-[#001f3f] font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700"
                      style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%', // 確保最大寬度不超過父容器
                      }}>
                      {item.description}</p>
                  </div>
                </div>
              </Link> 
            </SwiperSlide>
          ))}
          
      </Swiper>
    </div>
  );
}