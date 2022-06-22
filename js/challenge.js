let minus=document.getElementById("minus");
let plus=document.getElementById("plus");
let heart=document.getElementById("heart");
let pause=document.getElementById("pause");
let commentForm=document.querySelector("form");
let counter = document.querySelector('#counter')
let likes = document.querySelector('.likes');
let counterTimer;
let countUp = 0;
let likeCount = 0;
let oldCount;


runCounter();
function runCounter(){
  if(!counterTimer){
    counterTimer = setInterval(startCount, 1000);
  }
}

function startCount(){
  countUp++;
  counter.textContent = countUp;
  // console.log(countUp) 

  
}

minus.addEventListener('click',()=>{
  countUp--;
  counter.textContent = countUp;
});
plus.addEventListener('click',()=>{
  countUp++;
  counter.textContent = countUp;
});


heart.addEventListener('click', handleLike);

function handleLike(){
  oldCount = countUp;

  let likeList = document.createElement('li');
  if(oldCount !== countUp){
    likeCount = 0;
    likeCount++;
    likeList.innerHTML = `<p>${countUp} has been liked ${likeCount} times</p>`;
    likes.appendChild(likeList);
    console.log(oldCount + "old")
  } else {
    likeCount++;
    likeList.innerHTML = `<p>${countUp} has been liked ${likeCount} times</p>`;
    likes.append(likeList);
    console.log(oldCount + "new")
  }
  // let oldCount = countUp;
  
  }


// function increment(){
//   countUp++;
// }

// function decrement(){
//   countUp--;
// }

