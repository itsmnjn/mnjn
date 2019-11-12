// @flow strict
import React from "react";
import styles from "./Content.module.scss";

type Props = {
  body: string,
  title: string,
  recording: string
};

const s3 = "https://dqyky9girakpy.cloudfront.net/";

const Content = ({ body, title, recording }: Props) => (
  <div className={styles["content"]}>
    <h1 className={styles["content__title"]}>{title}</h1>
    {recording && (
      <div className={styles["content__recording"]}>
        <audio controls>
          <source src={s3 + recording} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <sub>
          On the go? Listen to my recording (extra commentary included 🙂)
        </sub>
      </div>
    )}
    <div
      className={styles["content__body"]}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
