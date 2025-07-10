import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { useStore } from "../store/store";
import Link from "next/link";

export default function Header() {
  const items = useStore((state) => state.cart.books.length);

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>myStories</span>
      </div>
      <ul className={css.menu}>
        <li>Home</li>

        <li>
          <Link href="#stories">
            <span>Stories</span>
          </Link>
        </li>
        <li>
          <Link href="#booksTrips">
            <span> Books & Trips</span>
          </Link>
        </li>
      </ul>
      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <FaCartShopping size={35} color="#2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
