import css from "../styles/Hero.module.css";
import Heart from "../assets/heart.png";
import Image from "next/image";
import HeroBook from "../assets/hero_book.png";
import { IoMailUnreadOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";
export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.heartDiv}>
          <span>Cute entertainment</span>
          <Image
            src={Heart}
            alt="heart"
            width={40}
            height={38}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div className={css.heroText}>
          <span>Get the most interesting</span>Leisure Fun
          <span></span>
          <span>
            from <span style={{ color: "var(--themeRed)" }}>myStories</span>
          </span>
        </div>
        <span className={css.miniText}>
          I let my fingers wander over the keyboard to create the most beautiful
          websites.
        </span>
        <button disabled className={`btn ${css.btn}`}>
          Just scroll down
        </button>
      </div>
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image
            className={css.heroBook}
            src={HeroBook}
            alt="book"
            width={600}
            height={450}
          />
        </div>
        <div className={css.Contact}>
          <span>
            <a
              href="https://tigertabby.github.io/Tigertabby3.github.io/"
              target="_blanc"
            >
              Contact me
            </a>
          </span>
          <div>
            <IoMailUnreadOutline size={40} />
          </div>
        </div>
        <div className={css.Book}>
          <a href="https://ralbersme-my-summer.pages.dev" target="_blanc">
            <div>
              <Image src={Logo} alt="book" width={100} height={60} />
            </div>
          </a>

          <div className={css.details}>
            <a href="https://ralbersme-my-summer.pages.dev" target="_blanc">
              <span style={{ color: "var(--themeRed)" }}>new </span>
              <span>Thriller</span>
              <br />
              <span>1.75h reading time</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
