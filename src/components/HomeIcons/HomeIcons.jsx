import Image from 'next/image';
import "./HomeIcon.css";

const HomeIcons = () => {
  const icons = [
    '/icon1.png',
    '/icon2.png',
    '/icon3.png',
    '/icon4.png',
    '/icon5.png',
    '/icon6.png',
    '/icon7.png',
  ];
  return (
    <div className="Iconsmain">
        <p className="Iconsmain-para"> 100+ Companie&apos;s that <span className="IconsSpanHead">have trusted us</span></p>
    <div className="icons-wrapperIcons">
      {icons.map((iconSrc, index) => (
        <div key={index} className="Iconsicon-container">
          <Image src={iconSrc} alt={`Icon ${index + 1}`} width={100} height={100} className="icon-Icons" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default HomeIcons;
