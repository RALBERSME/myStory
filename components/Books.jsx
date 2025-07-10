"use client";
import css from "../styles/Books.module.css";
// import { BOOKS_DATA } from "../pages/bookData";
// import { BOOK_DATA } from "../pages/singleBookData";
import Romantic from "../assets/romantic.jpg";
import Crime from "../assets/crime.jpg";
import Thriller from "../assets/thriller.jpg";
import Cruise from "../assets/cruise.jpg";
import Trip from "../assets/trip.jpg";
import Image from "next/image";
import Book from "../components/Book";
import { useState } from "react";
export default function Books() {
  const [imageIndex, setImageIndex] = useState(0);
  const storeArray = [Romantic, Crime, Thriller, Cruise, Trip];
  const BOOK_DATA = [
    {
      id: 0,
      title: "Life only begins beyond the atlantic",
      url: "https://ralbersme.github.io/myRomance/",
      details:
        "This romance novel is about how 17-year-old Irish woman Maeve Gallagher, who immigrated to the United States with her mother and brother, finds her own path. During Prohibition in 1921, she finds a job at a Manhattan speakeasy. There she meets Desmond O'Brian, who completely turns her life plans upside down.",
      time: 1.5,
      smallScreen: true,
    },
    {
      id: 1,
      title: "The McGregor File",
      url: "https://ralbersme.github.io/myCrime/",
      details:
        "In this crime novel, star detective McGreggor opens his investigation files exclusively for you. Learn about his legendary tricks and gimmicks, which he uses to seemingly effortlessly thwart the crooks.",
      time: 0.5,
      smallScreen: false,
    },
    {
      id: 2,
      title: "Human traffickers show no mercy",
      url: "https://ralbersme.github.io/myThrill/",
      details:
        "Typesetter Hardy Hudson accidentally becomes entangled in mafia-related dealings that become life-threatening. A hard-hitting thriller in which Hardy`s life hangs on a knife edge.",
      time: 1.0,
      smallScreen: false,
    },
    {
      id: 3,
      title: "The moated castle",
      url: "https://ralbersme.github.io/mySummer/",
      details:
        "In 1926, Marta works as a maid at Count von Zynstein's castle. She quickly discovers the strange machinations taking place there. In this gripping thriller, Marta puts her life in danger to uncover the truth. Will she succeed?",
      time: 1.75,
      smallScreen: true,
    },
    {
      id: 4,
      title: "A luxury cruise on the «RMS Lusitania» ",
      url: "https://ralbersme.github.io/myOceanLiner",
      details:
        "Immerse yourself in the 1915 cruise on the RMS Lusitania. The ship, operating under the British Cunard Line, departed New York Harbor on Saturday, May 1, 1915, bound for Liverpool with 1,258 passengers and 701 crew members (a total of 1,367 men, 463 women, and 129 children). Experience the voyage firsthand.",
      time: 2.5,
      smallScreen: false,
    },
    {
      id: 5,
      title: "Joy on the Rhine",
      url: "https://ralbersme.github.io/myCity",
      details: `Take a trip to Cologne Cathedral, which at 157.38 meters is the third tallest church in the world. Get to know many aspects of this Rhenish carnival capital, including the Cologne dialect.`,
      time: 0.75,
      smallScreen: false,
    },
    {
      id: 6,
      title: "The legendary ancient Egypt",
      url: "https://ralbersme.github.io/myAncientTimes",
      details: `Visit ancient Egypt, learn to read hieroglyphs, and discover the secrets of the 12 Mystery Temples on the Nile, the Sphinx, and the Valley of the Kings. Read about the cult of Isis and Osiris, the Eye of Horus, astrology and astronomy, and many pharaohs. How did ancient knowledge reach the Greeks and the Romans?`,
      time: 1.25,
      smallScreen: false,
    },
    {
      id: 7,
      title: "The previous murder on the «Orient Express»",
      url: "https://ralbersme-my-orient.pages.dev/",
      details:
        "Board the legendary «Orient Express» from Paris to Constantinople and witness a crime. Since this crime novel begins in 1920, when the Moreau couple boards the train in Paris, all your knowledge of Agatha Christie's «Murder on the Orient Express» won't help you, as it wasn't written until 1936. Can the crime be solved?",
      time: 1.0,
      smallScreen: true,
    },
    {
      id: 8,
      title: "The colorful life in Argentina",
      url: "https://ralbersme.github.io/myVacation",
      details:
        "Get to know the diverse sides of Argentina. In addition to gaining deeper insights into the country's political development and welcoming Evita Peron, you'll also enjoy tango and South American music. Excursions to Tierra del Fuego make this trip incredibly interesting.",
      time: 1.15,
      smallScreen: false,
    },
    {
      id: 9,
      title: "A trip on luxury cruise ship «SS Île de France»",
      url: "https://ralbersme.github.io/myLuxury",
      details:
        "Join us as a passenger on July 25th, 1956 on the cruise ship «SS Île de France»  and experience an exciting voyage from New York to France. World War II is over, and the ship is back in top shape, radiantly luxurious, and full of hope as it sets sail. An exciting journey begins.",
      time: 1.5,
      smallScreen: false,
    },
    {
      id: 10,
      title: "The great mystery of «S.S. Bremen»",
      url: "https://ralbersme.github.io/myHistory",
      details:
        "Come aboard and travel with the S.S. Bremen, a German ocean liner constructed for the Norddeutscher Lloyd Line (NDL), on its trip from northern Germany to New York at the end of August 1939. World War II has not yet begun, but all the signs are already in the air. Will the luxury ship be able to return to Bremerhaven in time before the war begins? An exciting journey that is a race against time.",
      time: 1.5,
      smallScreen: false,
    },
  ];
  const BOOKS_DATA = [
    {
      id: 0,
      title: "Romantic stories",
      appetizer: `an enchanting love story `,
    },
    {
      id: 1,
      title: "Crime novels",
      appetizer: `a gripping crime novel`,
    },
    {
      id: 2,
      title: "Thrillers",
      appetizer: `a thriller that won't let you go!`,
    },
    {
      id: 3,
      title: "Cruises",
      appetizer: `about unforgettable adventures`,
    },
    {
      id: 4,
      title: "Short Trips",
      appetizer: `about breathtaking places`,
    },
  ];
  return (
    <div className={css.container}>
      <div className={css.heading} id="stories">
        <span>My Stories</span>
        <span>Books & Trips that </span>
        <span>Shall inspire you</span>
      </div>
      <div className={css.product}>
        {BOOKS_DATA.map((singleBook, id) => {
          return (
            <div className={css.book} key={id}>
              <div className={css.ImageWrapper}>
                <Image
                  width={280}
                  height={280}
                  style={{ borderRadius: "50%" }}
                  src={storeArray[id]}
                  alt=""
                />
              </div>
              <span>{singleBook.title}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>Read </span>
                <span className={css.appetizer}> {singleBook.appetizer}</span>
              </span>
              <span id="booksTrips" onClick={() => setImageIndex(id - 1)}>
                scroll down to find related stories
              </span>
            </div>
          );
        })}
      </div>

      {BOOK_DATA.map((oneBook, index) => {
        return <Book oneBook={oneBook} id={index} key={index} />;
      })}
    </div>
  );
}
