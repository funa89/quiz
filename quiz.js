const quiz = [
  {
    question: '茶の湯を提唱したのは？',
    answers: [
      '柳宗悦',
      '千宗易',
      '足利義満',
      '明智光秀'
    ],
    correct:'千宗易'
  }, {
    question: '茶祖と呼ばれる人物は？',
    answers: [
      '丿貫',
      '織田信長',
      '武野紹鷗',
      '村田珠光'
    ],
    correct:'村田珠光'
  }, {
    question: '裏千家茶道16代家元は？',
    answers: [
      '坐忘斎',
      '玄々斎',
      '無限斎',
      '鵬雲斎'
    ],
      correct:'坐忘斎'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0; //何問正解したかを出す

// const question = '茶の湯を提唱したのは？'
// const answers = [
//   '柳宗悦',
//   '千宗易',
//   '足利義満',
//   '明智光秀'
// ];
// const correct = '千宗易';


//定数の文字列をHTMLに反映させる

const $button = document.getElementsByTagName('button'); //←constで短くして繰り返しのものを見やすくする
const buttonLength = $button.length;

// $button[0].textContent = answers[0] ;
// $button[1].textContent = answers[1] ;
// $button[2].textContent = answers[2] ;
// $button[3].textContent = answers[3] ;

//↓リファクタリング クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question ;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


//ボタンをクリックしたら正誤判定
// $button[0].addEventListener('click', () => {
//   if (correct === $button[0].textContent) {
//     window.alert('正解');
//   } else {
//     window.alert('不正解')
//   }
// });
// $button[1].addEventListener('click', () => {
//   if (correct === $button[1].textContent) {
//     window.alert('正解');
//   } else {
//     window.alert('不正解')
//   }
// });
// $button[2].addEventListener('click', () => {
//   if (correct === $button[2].textContent) {
//     window.alert('正解');
//   } else {
//     window.alert('不正解')
//   }
// });
// $button[3].addEventListener('click', () => {
//   if (correct === $button[3].textContent) {
//     window.alert('正解');
//   } else {
//     window.alert('不正解')
//   }
// });
//リファクタリング↓

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

 let handlerIndex = 0;
 while (handlerIndex < buttonLength) {
   $button[handlerIndex].addEventListener('click', (e) => {
     clickHandler(e);
   });
   handlerIndex++;
 }

//  $button[0].addEventListener('click', (e) => {
//    clickHandler(e);
//   });
//  $button[1].addEventListener('click', (e) => {
//    clickHandler(e);
//   });
//  $button[2].addEventListener('click', (e) => {
//    clickHandler(e);
//   });
//  $button[3].addEventListener('click', (e) => {
//    clickHandler(e);
//   });