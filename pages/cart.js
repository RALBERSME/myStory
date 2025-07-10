import { useStore } from "../store/store";
import Layout from "../components/Layout";
import css from "../styles/Cart.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import toast, { Toaster } from "react-hot-toast";
export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removeBook = useStore((state) => state.removeBook);
  const handleRemove = (i) => {
    removeBook(i);
    toast.error("Story removed");
  };
  const total = () => CartData.books.reduce((a, b) => a + b.time, 0);

  async function handlePrint() {
    const html2pdf = await require("html2pdf.js");

    const element = document.getElementById("survey");
    html2pdf(element, {
      margin: 1,
    });
  }
  return (
    <Layout>
      <div className={css.container} id="survey">
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Book</th>
                <th>Title</th>

                <th data-html2canvas-ignore>Reading Time in hours</th>
                <th>Available on Small Devices ?</th>
                <th>Available on Large Devives ?</th>
                <th>Weblink</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={css.tbody}>
              {CartData.books.length > 0 &&
                CartData.books.map((book, i) => {
                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          data-html2canvas-ignore
                          src={Logo}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                        />
                      </td>
                      <td>{book.title}</td>

                      <td data-html2canvas-ignore>{book.time}</td>
                      <td>
                        {book.smallScreen === true
                          ? "available"
                          : "not available"}
                      </td>

                      <td>available</td>
                      <td>{book.url}</td>
                      <td
                        style={{
                          color: "var(--themeRed)",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleRemove(i)}
                        data-html2canvas-ignore
                      >
                        x
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart} data-html2canvas-ignore>
          <span>Cart</span>
          <div className={css.CartDetails}>
            <div>
              <span>Number of stories selected:</span>
              <span>{CartData.books.length}</span>
            </div>
            <div>
              <span>Total reading time in hours:</span>
              <span>{total()}</span>
            </div>
          </div>
          <div className={css.buttons}>
            <button onClick={handlePrint} className="btn">
              Print Survey as .pdf
            </button>
            <Link className={css.back} href="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
}
