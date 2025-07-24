import "@/styles/header.scss"

// import { useTranslation } from 'react-i18next';

// export default function Header() {
//     const { t, i18n } = useTranslation();

//   // 切换语言示例
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };
//     return (
//         <>
//         <header className="header">
//                 <div className="inner fsc">
//                     <div className="logo fcc">Huang</div>
//                     <div className="menu fsc">
//                         <div className="menu_item">Facebook</div>
//                         <div className="menu_item">Instagram</div>
//                         <div className="menu_item">Line</div>
//                         <div className="menu_item">WhatsApp</div>
//                         <div className="menu_item">Wechat</div>
                
//                     </div>
//                 </div>
//         </header>
//         </>
//     );
// }
// import { useState } from 'react';
// import { FaFacebookF, FaInstagram, FaLine, FaWhatsapp, FaWeixin } from 'react-icons/fa';

// const contacts = [
//   { name: 'Facebook', icon: <FaFacebookF />, info: 'facebook.com/yourpage' },
//   { name: 'Instagram', icon: <FaInstagram />, info: '@yourinstagram' },
//   { name: 'Line', icon: <FaLine />, info: 'yourlineid' },
//   { name: 'WhatsApp', icon: <FaWhatsapp />, info: '+66 9876 5432' },
//   { name: 'Wechat', icon: <FaWeixin />, info: 'yourwechatid' },
// ];

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLine, FaWhatsapp, FaWeixin } from 'react-icons/fa';

const contacts = [
  { name: 'Facebook', icon: <FaFacebookF  color="red"/>, info: 'facebook.com/yourpage' },
  { name: 'Instagram', icon: <FaInstagram color="red" />, info: '@yourinstagram' },
  { name: 'Line', icon: <FaLine  color="red"/>, info: 'yourlineid' },
  { name: 'WhatsApp', icon: <FaWhatsapp  color="red"/>, info: '+66 9876 5432' },
  { name: 'Wechat', icon: <FaWeixin color="red"/>, info: 'yourwechatid' },
];

export default function Header() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lockedIndex, setLockedIndex] = useState(null);

  const handleClick = (index) => {
    // 点击时切换锁定状态，且只能锁定一个，点击同一项取消锁定
    setLockedIndex(prev => (prev === index ? null : index));
    // 点击时取消悬浮状态，避免悬浮和锁定冲突
    setHoverIndex(null);
  };

  const handleMouseEnter = (index) => {
    if (lockedIndex === null) {
      setHoverIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (lockedIndex === null) {
      setHoverIndex(null);
    }
  };

  return (
    <header className="header">
      <div className="inner fsc">
        <div className="logo fcc">Huang</div>
        <div className="menu fsc">
          {contacts.map((item, index) => (
            <div
              key={item.name}
              className="menu_item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              style={{ position: 'relative', cursor: 'pointer', userSelect: 'text' }}
            >
              {item.icon}
              {(hoverIndex === index || lockedIndex === index) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    fontSize: '12px',
                    zIndex: 10,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                    userSelect: 'text',
                  }}
                >
                  {item.info}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}