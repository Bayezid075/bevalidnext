import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutPic from "../../public/1.jpg";
export default function page() {
  return (
    <div className={styles.container}>
      <h1> About Page </h1>
      <Image
        src={aboutPic}
        alt="about picture"
        width={800}
        style={{
          borderRadius: "50px",
          margin: "0% 24%",
        }}
      />
      <h3 style={{ margin: "2% 24%" }}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        repellendus doloremque, voluptas distinctio ad impedit quos aliquid
        officiis? Iure cumque quasi hic iste asperiores! Dolore nemo tenetur
        commodi sequi debitis excepturi ad quod placeat praesentium ullam
        dolores cupiditate culpa, fugit officia facilis quia suscipit modi dolor
        animi iste. Pariatur earum voluptatum eaque hic eos veniam, aspernatur
        adipisci, eum magnam doloremque omnis temporibus. Nihil aut cumque
        voluptatum sed blanditiis quas quia odio labore nam eos molestias
        maiores error, nesciunt nobis enim veritatis doloremque. Quisquam sed
        veritatis voluptate. Sint minus labore beatae culpa nostrum, sequi
        error, debitis est magnam minima iure asperiores.{" "}
      </h3>
    </div>
  );
}
