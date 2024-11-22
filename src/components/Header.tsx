import React, { type FC, type PropsWithChildren, type ReactNode } from "react";

// type Props = {
//   image: { src: string; alt: string };
//   children: ReactNode;
// };

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
