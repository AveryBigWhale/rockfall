import Link from 'next/link'
import ImageLoader from '../components/ImageLoader';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4 flex flex-col items-center ">
            <h3 className="text-xl font-bold">U Foundation</h3>
            <p className="text-gray-400">
              支持 U 人社群，創造公平正義的世界
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4  flex flex-col items-center text-center">
            <h3 className="text-xl font-bold">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  關於我們
                </Link>
              </li>
              {/* <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  專案計畫
                </Link>
              </li> */}
              
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  最新消息
                </Link>
              </li>
            </ul>
          </div>
            
          <div className="flex justify-end">
            <div className="mr-2 relative w-36 h-36 rounded-full overflow-hidden shadow-lg"
                style={{
                backgroundImage: `url(${ImageLoader({ src: '/icon.svg' })})`,
                backgroundSize: 'cover',
                // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
                backgroundPosition: 'center',
            }} />
          </div>
            

          {/* Contact Info */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-bold">聯絡資訊</h3>
            <div className="text-gray-400 space-y-2">
              <p>105 臺北市松山區八德路三段36號7樓</p>
              <p>電話：(02) 2709-3968</p>
              <p>Email：info@ufoundation.org</p>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} U Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}