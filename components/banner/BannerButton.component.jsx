import React from "react";
import Link from "next/link";

import styles from "../../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

import ChevronSVG from "../ChevronSVG.component";

import { Button } from "react-bootstrap";

export default function BannerButton({
    link,
    image,
    name,
    style
}) {
  return (
    <Link href={link} key={link} passHref>
      <a target="_blank">
        <Button
          className={styles.customRandomButton}
          style={style}
        >
          <img className={styles.biliIcon} src={image} /> {name}{" "}
          <ChevronSVG />
        </Button>
      </a>
    </Link>
  );
}
