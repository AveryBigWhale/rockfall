import { FC } from 'react'

// interface DonateOption {
//   amount: number
//   title: string
//   description: string
// }

const DonateSection: FC = () => {
//   const donateOptions: DonateOption[] = [
//     {
//       amount: 2000,
//       title: "「人權，沒有人可以從你身上奪走」",
//       description: "研究資源深入當地(如阿富汗)，持續監督並揭露不人道行為"
//     },
//     {
//       amount: 1500,
//       title: "「成為你想看到的改變」",
//       description: "向各國政府施壓，以終止侵害暴民人權的行為"
//     },
//     {
//       amount: 800,
//       title: "「每個一個地方的非正義是每個正義的威脅」",
//       description: "給一個家，就援救出的下一個明天"
//     },
//     {
//       amount: 500,
//       title: "「一個孩子，一位老師，一本書，一支筆可以改變世界」",
//       description: "發起全球倡議活動，引起國際關注並凝聚力量"
//     }
//   ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">「我們不是錯誤的產物。」——U人少女 Rina 的心聲，正在改寫未來的座標</h2>
            <div className="prose max-w-none">
            
              <p>「我只是想像其他人一樣去學校，為什麼我不行？」 </p>
              <br />
              <p>16歲的 Rina 是 exhibit O 疫苗接種世代中的一員。由於基因重組造成外觀差異，她與其他 U人 一樣，被標註為「不穩定因子」，多次申請入學皆遭拒。這些決定並非基於學術能力，而是出於對「社會風險」的推論與偏見。 </p>
              <br />
              <p>自 U人 被制度劃為「特殊群體」以來，他們的教育選擇、職涯發展、居住自由與日常行動皆受到不同程度的限制與監管。在潮間黨政策主導下，許多原設為補償與保護的機構，反而逐漸演變為收編與隔離的手段。</p>
              <br />
              <p>然而，U人 並非沉默的群體。他們正在發聲、組織、學習。他們拒絕被定義為錯誤，更不接受以「補償」之名交換沉默。 </p>
              <br />
              <p>「我們成了這場科技奇蹟的副作用。可這不是我們的錯，也不是我們的終點。」
                <br></br>
              ——U人 教師 Yuto，現為社區教育行動發起人之一。</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">重新想像公平，而非遺憾的修補</h2>
            <div className="prose max-w-none">
            
              <p>國際U人援助聯盟於2130年啟動「無聲者之聲」行動，目標不只是伸張正義，而是推動具體改革：恢復U人公民權、保障教育自由、反對基因歧視立法缺口，並要求 Current Effect 與潮間黨政府面對歷史責任。
              </p>
              <p>我們不募捐同情，我們號召關注與行動。每一筆支持，不是施捨，而是站在歷史的正確一邊。</p>
              <p>讓下一代的 Rina，不再需要為了上學而辯護自己的存在。</p>
            </div>
          </div>
          {/* <div className="space-y-8">
            <h2 className="text-3xl font-bold">請為U人伸出你的援手</h2>
            <div className="prose max-w-none">
            
            <p>國際U人援助聯盟自2138年發起「無聲者之聲」行動，持續倡議全球認可U人基本人權，並敦促 current effect 企業及潮間黨政府承擔歷史責任。唯有國際社會共同關注，方能迫使主流體制正視這群被遺忘的孩子。</p>

            <p>你的一筆捐款，或許就能讓下一位U人孩子走進教室、擁有名字、擁有未來。</p>
            </div>
          </div>
           */}
          {/* Right Column */}
          {/* <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">請對阿富汗女性伸出你的援手</h3>
            <div className="space-y-4">
              {donateOptions.map((option, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-lg mb-2">{option.title}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <span className="text-xl font-bold">${option.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default DonateSection