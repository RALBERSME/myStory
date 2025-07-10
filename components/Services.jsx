import css from "../styles/Services.module.css";
import Store1 from "../assets/store1.jpg";
import Store2 from "../assets/store2.png";
import Store3 from "../assets/store3.png";
import Image from "next/image";
export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT YOU CAN EXPECT</span>
        <span>My favourite books</span>
        <span>Ready to be explored</span>
      </div>
      <div className={css.services}>
        <div className={css.features}>
          <div className={css.ImageWrapper}>
            <Image
              className={css.store1}
              src={Store1}
              alt=""
              width={315}
              heigth={300}
            />
          </div>
          <span>Easy to get</span>
          <span>Just a few clicks to start reading</span>
        </div>

        <div className={css.features}>
          <div className={css.ImageWrapper}>
            <Image src={Store3} alt="" width={350} heigth={300} />
          </div>
          <span>Easy to select</span>
          <span>Informative cover</span>
        </div>
        <div className={css.features}>
          <div className={css.ImageWrapper}>
            <Image src={Store2} alt="" width={350} heigth={300} />
          </div>
          <span>Easy to read</span>
          <span>Take your time to relax and enjoy</span>
        </div>
      </div>
    </>
  );
}
