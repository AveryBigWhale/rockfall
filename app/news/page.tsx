"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import world from '../../public/world.png'
import news1 from '@/public/gala.png';
import news2 from '@/public/school.png';
import news3 from '@/public/lecture.png';
import news4 from '@/public/medicine.png';

import newsData from './newsData.json';

// interface NewsItem {
//   category: string;
//   region: string;
//   title: string;
//   date: string;
//   imageUrl: string;
//   url: string;
// }

const newsImages = [news1, news2, news3, news4];

export default function NewsPage() {
  
  return (
    <div className="min-h-screen bg-white pt-0">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={world}
            alt="News Hero"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            掌握全球人權新聞及動態
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            探索我們持續更新的新聞、研究報告、專欄及影音
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* {newsItems.map((news, index) => (
              <Link key={index} className="group" href={news.url}> */}
            {newsData.map((news, index) => (
              <Link key={index} className="group" href={`/news/${news.id}`}>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      
                      src={newsImages[news.id -1]}
                      // src={news.imageUrl}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
  
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* <div className="absolute inset-0 p-6 flex flex-col justify-end"> */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-600">{news.category}</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-sm text-gray-600">{news.region}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-light transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-sm text-white/60">{news.date}</p>
                    </div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}