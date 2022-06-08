import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

import { Button, Col } from "react-bootstrap";

import imageLoader from "../../utils/ImageLoader";

import { config } from "../../config/constants";
import { getCursor } from "../../utils/utils";

import BannerButton from "./BannerButton.component";

export default function Banner({ songCount }) {
  const netEaseMusicComponent = (id) => {
    return id ? (
      <Link href={"https://music.163.com/#/artist?id=" + id} passHref>
        <a
          target="_blank"
          style={{
            marginRight: "1rem",
            cursor: getCursor(),
          }}
          title={config.Name + "的网易云音乐主页"}
        >
          <Image
            loader={imageLoader}
            src="./assets/icon/163_music.ico"
            alt={config.Name + "的网易云音乐主页链接"}
            width={24}
            height={24}
          />
        </a>
      </Link>
    ) : (
      ""
    );
  };

  const qqMusicComponent = (id) => {
    return id ? (
      <Link href={"https://y.qq.com/n/ryqq/singer/" + id} passHref>
        <a
          target="_blank"
          style={{
            cursor: getCursor(),
          }}
          title={config.Name + "的QQ音乐主页"}
        >
          <Image
            loader={imageLoader}
            src="./assets/icon/qq_music.ico"
            alt={config.Name + "的QQ音乐主页链接"}
            width={24}
            height={24}
          />
        </a>
      </Link>
    ) : (
      ""
    );
  };

  return (
    <Col className={styles.titleCol}>
      <div className={"pt-3 " + styles.titleBox}>
        <Image
          loader={imageLoader}
          className={styles.avatar}
          src="./assets/images/banner_image.webp"
          width={250}
          height={250}
        />
        <h1 className={"display-6 text-center pt-3 " + styles.grandTitle}>
          {config.Name}
        </h1>
        <h1 className={"display-6 text-center " + styles.grandTitle}>
          和她拿手的<b>{songCount}</b>首歌
        </h1>
        <p className="text-center py-3 mb-xl-5 text-muted">
          可以点击歌名复制哦
        </p>
      </div>
      <div className={styles.introBox}>
        <div className={styles.introBoxInnerDiv}>
          <div className={styles.introTitle}>
            <h5>{config.BannerTitle}</h5>

            {/* 网易云 & QQ音乐按钮 如果未填写 id 则不会展示 */}
            <div className="d-flex">
              {netEaseMusicComponent(config.NetEaseMusicId)}
              {qqMusicComponent(config.QQMusicId)}
            </div>

          </div>
          {/* 首页文本 */}
          {config.BannerContent.map((cnt) => {
            return <p className={styles.introParagraph} key={cnt}>{cnt}</p>;
          })}

          {/* 首页自定义按钮 */}
          <div className="d-flex flex-nowrap justify-content-evenly">
            {config.CustomButtons.map((btn) => {
              return (
                <BannerButton
                  key={btn.link}
                  link={btn.link}
                  image={btn.image}
                  name={btn.name}
                  style={{ marginTop: 0, border: "2px solid #DFD1E3" }}
                ></BannerButton>
              );
            })}
          </div>
        </div>
      </div>
    </Col>
  );
}
