// components/NavBar.tsx

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={styles.navContainer}>
      <div style={styles.navContent}>
        {/* 左側品牌文字 */}
        <div style={styles.brand}>落石黨</div>
        {/* 右側連結清單 */}
        <div style={styles.links}>
          <Link href="/about" style={styles.linkItem}>
            關於落石黨
          </Link>
          <Link href="/news" style={styles.linkItem}>
            最新消息
          </Link>
          <Link href="/policy" style={styles.linkItem}>
            政策宣傳
          </Link>
          <Link href="/donation" style={styles.linkItem}>
            小額捐款
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navContainer: {
    backgroundColor: '#E8F8E8', // 可依需求調整顏色
    padding: '1rem',
    borderBottom: '1px solid #ccc'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  links: {
    display: 'flex',
    gap: '1rem'
  },
  linkItem: {
    textDecoration: 'none',
    color: '#333'
  }
};