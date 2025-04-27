"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import world from '../../public/world.png'
import news1 from '../../public/address1.png';
import news2 from '../../public/sun-grass-kids.png';
import news3 from '../../public/walking.png';

import newsData from './newsData.json';

// interface NewsItem {
//   category: string;
//   region: string;
//   title: string;
//   date: string;
//   imageUrl: string;
//   url: string;
// }

const newsImages = [news1, news2, news3];

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


      <section className="py-12">
        <div className="container mx-auto px-6 space-y-8">
          {newsData.map((news, index) => (
            <Link key={index} href={`/news/${news.id}`} className="block">
              <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* 左側圖片 */}
                <div className="relative w-full md:w-1/4 h-60 md:h-auto">
                  <Image
                    src={newsImages[news.id - 1]}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 右側文字 */}
                <div className="flex flex-col justify-between p-6 md:w-3/4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{news.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {news.description.join(' ').slice(0, 100)}...
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs mt-4">{news.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}