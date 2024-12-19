import { type ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Header(props: HeaderProps) {
  const { image, children } = props;

  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
