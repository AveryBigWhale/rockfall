"use client"

import React from 'react';
// import ImageLoader from '@/components/ImageLoader';

import banner from '../../public/banner-about.png';

import peace from '../../public/peace.png';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              // backgroundImage: banner.src 
              backgroundImage: `url(${banner.src})`,
              //  `url(${ImageLoader({ src: banner.src })})`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            U Foundation<br/>
            
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl">
          為被遺忘者發聲，為被排除者築起未來。
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              U foundation 的衷旨
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            U Foundation 成立於 2136 年，初衷為彌補因接種疫苗 O 而出現基因異變的族群——即被社會稱為「U人」——所遭受的社會不公與醫療排除。
            <br/>
            <br/>
            這群人不是錯誤的產物，而是科技文明洪流中，被主流價值遺落在潮間帶的一群人。他們曾是實驗的副作用、統計中的異數、制度眼中的風險。但我們知道，他們是真實的、活生生的、有尊嚴的人。

            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
            我們的使命
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-4">人權倡議</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我們致力於爭取 U人 作為完整社會成員的基本權利——受教、就業、自由遷徙與公共參與。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">教育扶持</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  透過 U 學計畫，我們為年幼 U人 提供基礎教育資源，建立去污名化、強調多樣性的學習環境。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">醫療支持</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我們持續監測疫苗 O 影響，爭取對 U人 提供非歧視性醫療照護與心理輔導。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">社會融合計劃</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  舉辦工作坊、公眾教育與藝術展演，讓主流社會真正看見 U人 的能力與故事。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-32 min-h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${peace.src})`
        }}
      >
        {/* Add overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-100 font-bold mb-12 text-center shadow-black text-shadow-lg">
              我們的立場
            </h2>
            
            <div className="space-y-12">
              <div>
                <p className="text-lg text-gray-100 leading-relaxed shadow-black text-shadow-lg">
                  U Foundation 並非反科技，而是反對一種僅為少數人服務、將失敗責任轉嫁給「不合格者」的科技運作方式。
                  我們反對潮間黨將基因穩定性作為社會價值的唯一指標，反對任何形式的科技階級化。
                  <br/><br/>
                  我們相信，即使我們無法選擇身體的構造，我們依然有權選擇人生的方向。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*       
      <section className="py-20 bg-white"
        style={{
          // backgroundImage: banner.src 
          backgroundImage: `url(${peace.src})`,
          //  `url(${ImageLoader({ src: banner.src })})`,
        }}>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
            我們的立場
            </h2>
            
            <div className="space-y-12">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                U Foundation 並非反科技，而是反對一種僅為少數人服務、將失敗責任轉嫁給「不合格者」的科技運作方式。
                我們反對潮間黨將基因穩定性作為社會價值的唯一指標，反對任何形式的科技階級化。

                我們相信，即使我們無法選擇身體的構造，我們依然有權選擇人生的方向。
                </p>
              </div>

            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}