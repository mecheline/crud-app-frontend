import { type FC, type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;
