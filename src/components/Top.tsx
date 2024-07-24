//import { useState } from 'react'

import { Link } from "react-router-dom";
import koukichi_img from "./../assets/NEWICON.png";
import github from "./../assets/github-mark.svg";
import styles from "./css/Top.module.scss";

function Top() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.bgpage}>
          <div className={`${styles.title}`}>
            <img
              className={styles.titleimg}
              alt="koukichi's Icon"
              src={koukichi_img}
            />
            <div className={styles.myname}>
              <h1>Koukichi.net</h1>
              <p className="p"> Hi I'm Koshi Murata (村田 航志)</p>
            </div>
            <div className={styles.title_img}>
              <a href="https://github.com/Drkoukichi">
                <img className="github_img" alt="Github Icon" src={github} />
              </a>
            </div>
          </div>
          <div className={`${styles.flex}`}>
            <div className={styles.bodyleft}>
              <div className={`${styles.selfintrotitle}`}>Profile</div>

              <ul className={`${styles.selfintrobody}${styles.ph0}`}>
                <u>
                  <li>本名: 村田 航志 </li>
                  <li>所属: 東京工科大学 コンピュータサイエンス学部</li>
                  <li>趣味: ネットワーク構築、サーバー保守、ダーツ</li>
                  <li>mail: c0a2315029@edu.teu.ac.jp</li>
                </u>
                <p>
                  pgp鍵は{" "}
                  <a href="https://keys.openpgp.org/search?q=c0a2315029@edu.teu.ac.jp">
                    こちら
                  </a>
                  から
                </p>
              </ul>
            </div>
            <div className={styles.bodyright}>
              <div className={`${styles.selfintrotitle} `}>Work</div>
              <ul className={`${styles.selfintrobody} ${styles.ph0}`}>
                <li>2023年9月 サイバーエージェント教育事業部アルバイト入社</li>
                <p>
                  小中高校生にxcodeを用いたiPhoneプログラミングを指導。他にもGoogleAppsScriptを用いた、社内ツールの開発、保守を行った。
                </p>
                <li>2023年5月 メディアロビー(有隣堂株式会社)アルバイト入社</li>
                <p>
                  パソコンのトラブルシュート、新入生のパソコンのキッティング作業を行う
                </p>
              </ul>
            </div>
          </div>
          <div className={`${styles.b2} ${styles.flex}`}>
            <div className={styles.bodyleft}>
              <div className={`${styles.selfintrotitle}`}>SkillSet</div>

              <div className={`${styles.pl0}${styles.ph0}`}>
                <ul className={`${styles.self_intro_body}${styles.icons}`}>
                  <h2>Main</h2>
                  <li>GoogleAppsScript/Clasp</li>
                  <li>python</li>
                  <li>TypeScript</li>
                  <li>Network</li>
                  <h2>Studying</h2>
                  <li>React</li>
                  <li>Swift</li>
                  <Link to="/css">
                    <li>CSS</li>
                  </Link>
                  <li>Adobe Illustrator</li>
                </ul>
              </div>
            </div>

            <div className={styles.bodyright}>
              <div className={styles.volunteer}>
                <div className={`${styles.selfintrotitle}`}>Volunteer</div>
                <div
                  className={`
                ${styles.pl0}${styles.ph0}`}
                >
                  <ul className={styles.selfintrobody}>
                    <li>Pycon2024 運営スタッフ 2024年5月〜現在</li>
                    <p>当日の参加者用Wi-Fiや配信設備の設計を行なっている。</p>
                  </ul>
                </div>
              </div>
              <div className={styles.volunteer}>
                <div className={`${styles.selfintrotitle} `}>Study Now</div>
                <div className={`${styles.pl0}${styles.ph1}`}>
                  <ul className={styles.selfintrobody}>
                    <li>自宅でのサーバ構築並びに運用</li>
                    <p>自宅にサーバを設置し、このwebサイトやNextCloudを運用</p>
                    <li>サークルでのAS運用（準備中）</li>
                    <p>AS番号とIPアドレスを取得しネットワークを広告する。</p>
                    <p>現在JPNICとAS取得の交渉中</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
