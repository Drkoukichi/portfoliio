//import { useState } from 'react'

import koukichi_img from "./assets/NEWICON.png"
import github from "./assets/github-mark.svg"
import './App.css'

function App() {

  return (
    <>
    <div className='bgpage'>
      <div className='title flex'>
        <img className='title_img' src={koukichi_img}/>
        <div className='my_name' >
          <h1>Koukichi.net</h1>
          <p className='p'> Hi I'm Koshi Murata (村田 航志)</p>
        </div>
        <div className="title_img">
          <a href="https://github.com/Drkoukichi"><img className='github_img' src={github}/></a>
        </div>
      </div>
      <div className='b-1 flex'>
        <div className='body-left'>
          <div className = 'self_intro_title p2 pl0'>Profile</div>
          
          <ul className='self_intro_body ph1'>
            <u>
              <li>本名: 村田 航志 </li>
              <li>所属: 東京工科大学 コンピュータサイエンス学部</li>
              <li>趣味: ネットワーク構築、サーバー保守、ダーツ</li>
              <li>mail: <a href ="mailto:c0a2315029@edu.teu.ac.jp">c0a2315029@edu.teu.ac.jp</a></li>
            </u>  
              <p>pgp鍵は <a href = "https://keys.openpgp.org/search?q=c0a2315029@edu.teu.ac.jp">こちら</a>から</p>
            
          </ul>
        </div>
        <div className='body-right'>
          <div className = 'self_intro_title work p2 pl0'>Work</div>
          <ul className = 'self_intro_body ph1'>
            <li>2023年9月 サイバーエージェント教育事業部アルバイト入社</li>
            <p>小中高校生にxcodeを用いたiPhoneプログラミングを指導。他にもGoogleAppsScriptを用いた、社内ツールの開発、保守を行った。</p>
            <li>2023年5月 メディアロビー(有隣堂株式会社)アルバイト入社</li>
            <p>パソコンのトラブルシュート、新入生のパソコンのキッティング作業を行う</p>
          </ul>
        </div>
      </div>
      <div className="b-2 flex">
        <div className="body-left">
          <div className="self_intro_title skil-set p2 pl0">SkillSet</div>
        
          <div className="work pl0 ph1">
            <ul className="self_intro_body icons">
              <h2>Main</h2>
              <li>GoogleAppsScript/Clasp</li>
              <li>python</li>
              <li>TypeScript</li>
              <li>Network</li>
              <h2>Studying</h2>
              <li>React</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
        </div>

        <div className="body-right">
          <div className="volunteer">
            <div className="self_intro_title volunteer p2 pl0">Volunteer</div>
            <div className="work  pl0 ph1">
              <ul className="self_intro_body">
                <li>Pycon2024 運営スタッフ 2024年5月〜現在</li>
                <p>当日の参加者用Wi-Fiや配信設備の設計を行なっている</p>
              </ul>
            </div>
          </div>
          <div className="volunteer">
            <div className="self_intro_title volunteer p2 pl0">Study Now</div>
            <div className="work  pl0 ph1">
              <ul className="self_intro_body">
                <li>自宅でのサーバ構築並びに運用</li>
                <p>自宅にサーバを設置し、webサイトやNextCloudを運用</p>
                <li>サークルでのAS運用（準備中）</li>
                <p>AS番号とIPアドレスを取得しネットワークを広告する。</p>
                <p>現在JPNICとAS取得の交渉中</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
