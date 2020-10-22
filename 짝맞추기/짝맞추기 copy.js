document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function () {
        card.classList.add('flipped');        
    });
});

// <body>
//     <div class="card">
//         <div class="card-inner">
//             <div class = 'card-front'>
//                 앞
//             </div>
//             <div class = 'card-back'>
//                 뒤
//             </div>
//         </div>
//     </div>
//     <script src ="짝맞추기.js"></script>
// </body>

위 1 ~ 5 line의 JS 코드와 아래의 html 코드를 함께쓰면 화면에 
겹쳐져 있는 카드 하나를 구현할 수 있다.
하지만 이 강의에서는 html 태그를 삭제하고 이를 JS요소로 추가하여 진행한다


var 가로 = 4;
var 세로 = 3;

function 카드세팅(가로, 세로) {
    for (var i = 0; i< 가로 * 세로; i += 1){
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        document.body.appendChild(card);
    }  
}

카드세팅(가로, 세로);

4 x 3 카드 게임을 만들기 위해 가로, 세로 변수를 선언한다.
위 30 ~ 42 라인 까지가 하나의 card를 JS를 이용해 만들고
우리 원하는 갯수 만큼 필요하기에 for 반목문을 사용해준다.
또한 CSS에서 일렬로 표시되는것을 변경하기 위해 
CSS에서 card 안의 display를 인라인 블럭으로 지정해준다.

function 카드세팅(가로, 세로) {
    for (var i = 0; i< 가로 * 세로; i += 1){
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function (c) {
            card.addEventListener('click', function () {
                c.classList.toggle('flipped');
            });
        })(card);
        document.body.appendChild(card);
    }  
}
또한 클릭이벤트(비동기) 와 for 반복문의 만남으로 클로저 문제가 발생!
(클릭하는 카드가 아닌 마지막 카드만 뒤짚힘)
다양한 방법이 있지만, 67 ~ 71 라인과 같이 68 클릭이벤트와 69 토글 이벤트를 
67 즉시 실행 함수로 한번 감싸주면 클로저 문제가 해결이 가능하다
// 여기서 toggle 이란 스위치 같은 개념으로 on 상태면 -> off로
// off 상태면 --> on으로 바꿔주는 역할을 한다 중요!!

var 색깔후보 = ['red', 'red', 'orange','orange','green','green','yellow','yellow','white','white','pink','pink'];
var 색깔 = [];

for (var i = 0; 색깔후보.length > 0; i +=1) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
}
console.log(색깔);

상단 코드창에 해당 코드를 추가하여 총 12개의 카드 뒷면 색을 랜덤 지정해준다.
