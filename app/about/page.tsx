"use client"

import React from 'react';
// import ImageLoader from '@/components/ImageLoader';

import banner from '../../public/banner-about.png';

import peace from '../../public/banner.png';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white h-[50vh]"
        style={{
          // backgroundImage: banner.src 
          backgroundImage: `url(${banner.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          //  `url(${ImageLoader({ src: banner.src })})`,
        }}>
        
      </section>
      <section>
        <div className="container mx-auto px-6 pt-20 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              關於落石黨
            </h2>

            <div className="space-y-12">
              
              <div>
                <h3 className="text-xl font-bold mb-4">創黨背景與理念</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  落石黨成立於對生化科技失控深感憂慮的時代，我們相信科技發展應當以「倫理優先、自然共存、審慎推進」為基本準則，為子孫留下一個仍能呼吸與思考的未來。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">使命與願景</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我們致力於守護社會穩健發展，促成科技與人文、自然的重新平衡。落石黨追求一個尊重生命本質、珍惜自然節奏的未來文明。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">核心主張</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  包括生化科技監管、教育體系人文復興、生態修復計畫，以及社區共生網絡的建立，都是我們推動的重要政策。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">行動方式</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  落石黨透過立法倡議、公共教育、社會對話推動變革。我們堅信，科技應服務於全體人類，而非成為少數利益集團的工具。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">呼籲</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  每一位關心未來的人，都可以成為落石黨的一員。讓我們一起為文明設下溫柔而堅定的界限，守護世世代代的希望。
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