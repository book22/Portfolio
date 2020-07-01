import React from 'react';
import Item from './Item';

class Main extends React.Component {
  render() {
    const itemList = [
      {
        id:"https://book22.github.io/button_game/",
        name: 'Button Game',
        image: '../image/buttn_.png',
        introduction: '順番に数字を押していくゲームです。',
      },
      {
        id: 'https://book22.github.io/QuizApp/',
        name: 'Quiz Game',
        image: '../image/animal_quiz_neko_maru.png',
        introduction: '三択問題のクイズゲームです。',
      },
      {
        id: 'https://book22.github.io/SlotMachine/',
        name: 'Slot Machine',
        image: '../image/money_slot_machine.png',
        introduction: 'スロットゲームです。',
      },
      {
        id: 'https://book22.github.io/TypingGame/',
        name: 'Typing Game',
        image: '../image/computer_typing_hayai.png',
        introduction: '単語を入力するゲームです。',
      },
    ];
    
    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Welcome</h1>
            <h3 id="about-section" >ABOUT</h3>
            <img src="../image/image.jpeg" alt="写真" />
            <p>
            はじめまして。本條祐一朗と申します。<br/>平成12年生まれの20歳、大学3年生です。<br/>
            エンジニアの経験としては長期インターンでweb制作に携わりました。<br/>現在は主にJavaScriptの理解を深めれるように、挑戦しています。<br/>
            高校時代では野球部に入り、大阪ベスト４まで進出した経験があります。<br/>その体力を活かし、これからも技術を伸ばし続けれるように精進します！</p>
          </div>
          <div className='item-container'>
            <h3 id="gemes-section">JavaScript Games</h3>
            <div className="cards">
            {itemList.map((itemList) => {
              return (
                <Item
                  id={itemList.id}
                  name={itemList.name}
                  image={itemList.image}
                  introduction={itemList.introduction}
                />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
