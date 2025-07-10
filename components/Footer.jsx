import css from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <>
      <div className={css.container}>
        Reinhild's myStories - copyright &copy; 2025 all rights reserved
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>myStories</span>
      </div>
    </>
  );
}
