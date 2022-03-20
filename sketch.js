
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var startButton, backgroundSquare;
var easyButton, hardButton;
var state = 'opening';
var choiceOneButton, choiceTwoButton, choiceThreeButton;
var tick, cross;
var nextButton;
var easyTwoChoiceOneButton, easyTwoChoiceTwoButton, easyTwoChoiceThreeButton;
var score = 0
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight*8);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	startButton = createButton('quiz');
  easyButton = createButton('easy');
  hardButton = createButton('hard');
  backgroundSquare = createSprite(displayWidth/2, displayHeight/2, 5, 5)
  backgroundSquare.shapeColor = 'blue'
  tick = loadImage('tick.png');
  cross = loadImage('cross.png');
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  fill('blue')
  ellipse(displayWidth/2, displayHeight/2, displayWidth/5);
  fill('white')
  textSize(25);
  text("Quizzical", displayWidth/2-50, displayHeight/2)
  textSize(15)
  text("Test your self for everything science,", displayWidth/2-120, displayHeight/2+40)
  text(" technology and math", displayWidth/2-80, displayHeight/2+60)
  
  startButton.position(displayWidth/2+20, displayHeight/2+100)
  startButton.mousePressed(()=>{
    state = 'quizzing'
  })
  easyButton.position(-500, -500);
  hardButton.position(-250, -250);
  if(state === 'quizzing'){
    startButton.hide();
    changeBackground();
  }
  //easyButton.hide();
  //hardButton.hide();
  drawSprites();
  if(backgroundSquare.width>=900 && backgroundSquare.height>=600){
    if(backgroundSquare.shapeColor === 'blue'){
    textSize(30)
    fill(255,0,0)
    text("Difficulty?", displayWidth/2-60, displayHeight/8);
  }
}
  theQuiz();
  //increaseScore();
  console.log(score)
}

function changeBackground(){
  if(backgroundSquare.width<=displayWidth*16+200 && backgroundSquare.height<=displayHeight*16){
  backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.width++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    backgroundSquare.height++
    
  }
  if(backgroundSquare.width>=200 && backgroundSquare.height>=132){
    if(backgroundSquare.shapeColor === "blue")
    easyButton.position(displayWidth/2-75, displayHeight/2);
    hardButton.position(displayWidth/2+25, displayHeight/2);
    easyButton.show();
    hardButton.show();
  }
}
function theQuiz(){
  easyButton.mousePressed(()=>{
    easyButton.position(-500, -500);
    backgroundSquare.shapeColor = "green";
    if(backgroundSquare.shapeColor === "green"){
      state = 1;
    }
  })
  if(state >= 1 && state <=199 || state === 'easy1correct' || state === 'easy1wrong'){
    hardButton.position(-500, -550)
    textSize(25);
    text('Question 1', displayWidth/2-75, 100)
    textSize(15)
    text('What is the area of AL concerned with the practical use of robots?', displayWidth/8, 150);
    choiceOneButton = createButton('Mathematical');
    choiceOneButton.position(displayWidth/8, 200);
    if(state === 1){
    choiceOneButton.mousePressed(()=>{
      state = 'easy1wrong';
    })
  }
    choiceTwoButton = createButton('Environmental Engineer');
    choiceTwoButton.position(displayWidth/4.3, 200);
    if(state === 1){
    choiceTwoButton.mousePressed(()=>{
      state = 'easy1wrong';
    })
  }
    choiceThreeButton = createButton('Robotics');
    choiceThreeButton.position(displayWidth/2.3, 200);
    if(state === 1){
    choiceThreeButton.mousePressed(()=>{
      state = 'easy1correct'
    })
  }
  }
  if(state==='easy1correct'){
    image(tick, displayWidth/2.2, 220);
    nextButton = createButton('next');
    nextButton.position(displayWidth/1.6, 300);
    nextButton.mousePressed(()=>{
      state = 2;
    })
    score = 1;
  }
  if(state === 'easy1wrong'){
    image(cross, displayWidth/5, 220);
    textSize(20)
    fill('yellow')
    text('Its Robotics!', displayWidth/2, 220);
    nextButton = createButton('next');
    nextButton.position(displayWidth/1.6, 300);
    nextButton.mousePressed(()=>{
      state = 2;
      nextButton.position(-550, -450);
      textSize(25);
      text('Question 2', displayWidth/2-75, 400)
      textSize(15)
      text('What is a laboratory?', displayWidth/8, 430);
    })
  }
  if(state === 2 || state === 'easy2wrong' || state === 'easy2correct'){
    textSize(25);
    text('Question 1', displayWidth/2-75, 100)
    textSize(15)
    text('What is the area of AL concerned with the practical use of robots?', displayWidth/8, 150);
    hardButton.position(-500, -550)
    textSize(25);
    text('Question 2', displayWidth/2-75, 400)
    textSize(15)
    text('What is a laboratory?', displayWidth/8, 430);
    easyTwoChoiceOneButton = createButton('Workplace for the conduct of scientific research');
    easyTwoChoiceOneButton.position(displayWidth/8, 460);
    if(state === 2){
      easyTwoChoiceOneButton.mousePressed(()=>{
        state = 'easy2correct';
        score = score + 1;
      })
    }
    easyTwoChoiceTwoButton = createButton('Place of the nature of mathematics');
    easyTwoChoiceTwoButton.position(displayWidth/2.5, 460);
    if(state === 2){
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 'easy2wrong';
    })
  }
  easyTwoChoiceThreeButton = createButton('The act of implementing the control of equipment');
    easyTwoChoiceThreeButton.position(displayWidth/1.7, 460);
    if(state === 2){
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 'easy2wrong'
    })
    }
  if(state==='easy2correct'){
    image(tick, displayWidth/2.2, 550);
    nextButton.position(displayWidth/1.6, 550);
    nextButton.mousePressed(()=>{
      state = 30;
    })
    if(score === 0){
      score = 1;
    }
    if(score === 1){
      score = 2;
    }
  }
  if(state === 'easy2wrong'){
    image(cross, displayWidth/5, 550);
    textSize(20)
    fill('yellow');
    text('Its a workplace for the conduct of scientific research!', displayWidth/8, 415)
    nextButton.position(displayWidth/1.6, 550);
    nextButton.mousePressed(()=>{
      state = 30;
    })
  }
  }
  if(state >= 30 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 2', displayWidth/2-75, 400)
    textSize(15)
    text('What is a laboratory?', displayWidth/8, 430);
    textSize(25);
    text('Question 3', displayWidth/2-75, 650)
    textSize(15)
    text('What is ecology?', displayWidth/11, 680);
    easyTwoChoiceOneButton = createButton('An approach for breaking down a large project into manageable chucks')
    easyTwoChoiceOneButton.position(displayWidth/11, 710);
    easyTwoChoiceTwoButton = createButton('The environment as it relates to living organisms')
    easyTwoChoiceTwoButton.position(displayWidth/2.25, 710);
    easyTwoChoiceThreeButton = createButton('Containing within itself the means of propulsion or movement')
    easyTwoChoiceThreeButton.position(displayWidth/1.45, 710)
    if(state === 30){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 31;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 32;
      score = score+1;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 33;
    })
  }
}
  if(state === 31){
    image(cross, displayWidth/8, 800);
    textSize(20);
    fill('yellow');
    text('Its the environment as it relates to living organisms!', displayWidth/8, 750)
    nextButton.position(displayWidth-150, 800);
    nextButton.mousePressed(()=>{
      state = 40;
    })
  }
  if(state === 32){
    image(tick, displayWidth/2, 800);
    nextButton.position(displayWidth-150, 800);
    nextButton.mousePressed(()=>{
      state = 40;
    })
  }
  if(state === 33){
    image(cross, displayWidth-50, 800);
    textSize(20);
    fill('yellow');
    text('Its the environment as it relates to living organisms!', displayWidth/2, 750)
    nextButton.position(displayWidth-150, 800);
    nextButton.mousePressed(()=>{
      state = 40;
    })
  }
  if(state >= 40 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 4', displayWidth/2-75, 900)
    textSize(15)
    text('What is the act of implementing control of an equipment?', displayWidth/11, 930);
    easyTwoChoiceOneButton = createButton('Design Process')
    easyTwoChoiceOneButton.position(displayWidth/11, 960);
    easyTwoChoiceTwoButton = createButton('Automation')
    easyTwoChoiceTwoButton.position(displayWidth/5, 960);
    easyTwoChoiceThreeButton = createButton('Biochemistry')
    easyTwoChoiceThreeButton.position(displayWidth/3.5, 960)
    if(state === 40){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 41;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 42;
      score = score+1;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 43;
    })
  }
}
  if(state === 41){
    image(cross, displayWidth/8, 1050);
    textSize(20);
    fill('yellow');
    text('Automation!', displayWidth/8, 1000)
    nextButton.position(displayWidth-150, 1050);
    nextButton.mousePressed(()=>{
      state = 50;
    })
  }
  if(state === 42){
    image(tick, displayWidth/4, 1050);
    nextButton.position(displayWidth-150, 1050);
    nextButton.mousePressed(()=>{
      state = 50;
    })
  }
  if(state === 43){
    image(cross, displayWidth/3, 1050);
    textSize(20);
    fill('yellow');
    text('Automation!', displayWidth/3, 1000)
    nextButton.position(displayWidth-150, 1050);
    nextButton.mousePressed(()=>{
      state = 50;
    })
  }
  if(state >= 50 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 5', displayWidth/2-75, 1150)
    textSize(15)
    text('What is the branch of engineering concerned with the design and construction and operation of nuclear reactors?', displayWidth/11, 1180);
    easyTwoChoiceOneButton = createButton('Biochemistry')
    easyTwoChoiceOneButton.position(displayWidth/9, 1210);
    easyTwoChoiceTwoButton = createButton('Automation')
    easyTwoChoiceTwoButton.position(displayWidth/4.5, 1210);
    easyTwoChoiceThreeButton = createButton('Nuclear Engineering')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1210)
    if(state === 50){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 51;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 52;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 53;
      score = score+1;
    })
  }
}
  if(state === 51){
    image(cross, displayWidth/8, 1300);
    textSize(20);
    fill('yellow');
    text('Its Nuclear Engineering!', displayWidth/8, 1250)
    nextButton.position(displayWidth-150, 1300);
    nextButton.mousePressed(()=>{
      state = 60;
    })
  }
  if(state === 52){
    image(cross, displayWidth/4, 1300);
    textSize(20);
    fill('yellow');
    text('Its Nuclear Engineering!', displayWidth/4, 1250)
    nextButton.position(displayWidth-150, 1300);
    nextButton.mousePressed(()=>{
      state = 60;
    })
  }
  if(state === 53){
    image(tick, displayWidth/3.5, 1300);
    nextButton.position(displayWidth-150, 1300);
    nextButton.mousePressed(()=>{
      state = 60;
    })
  }
  if(state >= 60 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 6', displayWidth/2-75, 1400)
    textSize(15)
    text('What is the approach for breaking down a large project into manageable chunks?', displayWidth/11, 1430);
    easyTwoChoiceOneButton = createButton('Design Process')
    easyTwoChoiceOneButton.position(displayWidth/9, 1460);
    easyTwoChoiceTwoButton = createButton('Ecology')
    easyTwoChoiceTwoButton.position(displayWidth/4.3, 1460);
    easyTwoChoiceThreeButton = createButton('Engineer')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1460)
    if(state === 60){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 61;
      score = score+1;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 62;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 63;
    })
  }
}
  if(state === 61){
    image(tick, displayWidth/8, 1550);
    nextButton.position(displayWidth-150, 1550);
    nextButton.mousePressed(()=>{
      state = 70;
    })
  }
  if(state === 62){
    image(cross, displayWidth/4, 1550);
    textSize(20);
    fill('yellow');
    text('The answer is - design process!', displayWidth/4, 1500);
    nextButton.position(displayWidth-150, 1550);
    nextButton.mousePressed(()=>{
      state = 70;
    })
  }
  if(state === 63){
    image(cross, displayWidth/3.5, 1550);
    textSize(20);
    fill('yellow');
    text('The answer is - design process!', displayWidth/3.5, 1500);
    nextButton.position(displayWidth-150, 1550);
    nextButton.mousePressed(()=>{
      state = 70;
    })
  }
  if(state >= 70 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 7', displayWidth/2-75, 1650)
    textSize(15)
    text('Who is a person who uses scientific knowledge to solve problems?', displayWidth/11, 1680);
    easyTwoChoiceOneButton = createButton('Design Process')
    easyTwoChoiceOneButton.position(displayWidth/9, 1710);
    easyTwoChoiceTwoButton = createButton('Nuclear Engineer')
    easyTwoChoiceTwoButton.position(displayWidth/4.55, 1710);
    easyTwoChoiceThreeButton = createButton('Engineer')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1710)
    if(state === 70){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 71;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 72;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 73;
      score = score+1;
    })
  }
}
  if(state === 71){
    image(cross, displayWidth/8, 1800);
    textSize(20);
    fill('yellow');
    text('Its an engineer!', displayWidth/8, 1750);
    nextButton.position(displayWidth-150, 1800);
    nextButton.mousePressed(()=>{
      state = 80;
    })
  }
  if(state === 72){
    image(cross, displayWidth/4, 1800);
    textSize(20);
    fill('yellow');
    text('Its an engineer!', displayWidth/4, 1750);
    nextButton.position(displayWidth-150, 1800);
    nextButton.mousePressed(()=>{
      state = 80;
    })
  }
  if(state === 73){
    image(tick, displayWidth/3, 1800);
    nextButton.position(displayWidth-150, 1800);
    nextButton.mousePressed(()=>{
      state = 80;
    })
  }
  if(state >= 80 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 8', displayWidth/2-75, 1900)
    textSize(15)
    text('Who is an expert on Geogrpahy?', displayWidth/11, 1930);
    easyTwoChoiceOneButton = createButton('Mathematician')
    easyTwoChoiceOneButton.position(displayWidth/9, 1960);
    easyTwoChoiceTwoButton = createButton('Geographer')
    easyTwoChoiceTwoButton.position(displayWidth/4.55, 1960);
    easyTwoChoiceThreeButton = createButton('Environmental Engineer')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1960)
    if(state === 80){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 81;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 82;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 83;
      score = score+1;
    })
  }
}
  if(state === 81){
    image(cross, displayWidth/8, 2050);
    textSize(20);
    fill('yellow');
    text('An environmental engineer!', displayWidth/8, 2000);
    nextButton.position(displayWidth-150, 2050);
    nextButton.mousePressed(()=>{
      state = 90;
    })
  }
  if(state === 82){
    image(cross, displayWidth/4, 2050);
    textSize(20);
    fill('yellow');
    text('An environmental engineer!', displayWidth/4, 2000);
    nextButton.position(displayWidth-150, 2050);
    nextButton.mousePressed(()=>{
      state = 90;
    })
  }
  if(state === 83){
    image(tick, displayWidth/3, 2050);
    nextButton.position(displayWidth-150, 2050);
    nextButton.mousePressed(()=>{
      state = 90;
    })
  }
  if(state >= 90 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 9', displayWidth/2-75, 2150)
    textSize(15)
    text('What is the branch of engineering that is concerned with projecting people from the effect of adverse environmental effect?', displayWidth/11, 2180);
    easyTwoChoiceOneButton = createButton('Environmental Engineering')
    easyTwoChoiceOneButton.position(displayWidth/9, 2210);
    easyTwoChoiceTwoButton = createButton('Ecology')
    easyTwoChoiceTwoButton.position(displayWidth/3.7, 2210);
    easyTwoChoiceThreeButton = createButton('Engineer')
    easyTwoChoiceThreeButton.position(displayWidth/3, 2210)
    if(state === 90){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 91;
      score = score+1;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 92;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 93;
    })
  }
}
  if(state === 91){
    image(tick, displayWidth/8, 2300);
    nextButton.position(displayWidth-150, 2300);
    nextButton.mousePressed(()=>{
      state = 100;
    })
  }
  if(state === 92){
    image(cross, displayWidth/4, 2300);
    textSize(20);
    fill('yellow');
    text('Environmental engineering!', displayWidth/4, 2250);
    nextButton.position(displayWidth-150, 2300);
    nextButton.mousePressed(()=>{
      state = 100;
    })
  }
  if(state === 93){
    image(cross, displayWidth/3, 2300);
    textSize(20);
    fill('yellow');
    text('An environmental engineer!', displayWidth/3, 2250);
    nextButton.position(displayWidth-150, 2300);
    nextButton.mousePressed(()=>{
      state = 100;
    })
  }
  if(state >= 100 && state <= 199){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 10', displayWidth/2-75, 2400)
    textSize(15)
    text('What is the principle by which the total energy remains constant in a system that is not subject to external influence?', displayWidth/11, 2430);
    easyTwoChoiceOneButton = createButton('Energy Conservation')
    easyTwoChoiceOneButton.position(displayWidth/9, 2460);
    easyTwoChoiceTwoButton = createButton('Ecology')
    easyTwoChoiceTwoButton.position(displayWidth/4, 2460);
    easyTwoChoiceThreeButton = createButton('Automation')
    easyTwoChoiceThreeButton.position(displayWidth/3, 2460)
    if(state === 100){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 101;
      score = score+1;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 102;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 103;
    })
  }
}
  if(state === 101){
    image(tick, displayWidth/8, 2550);
    nextButton.position(displayWidth-150, 2550);
    nextButton.mousePressed(()=>{
      state = 104;
    })
  }
  if(state === 102){
    image(cross, displayWidth/4, 2550);
    textSize(20);
    fill('yellow');
    text('Its energy conservation!', displayWidth/4, 2500);
    nextButton.position(displayWidth-150, 2550);
    nextButton.mousePressed(()=>{
      state = 104;
    })
  }
  if(state === 103){
    image(cross, displayWidth/3, 2550);
    textSize(20);
    fill('yellow');
    text('Its energy conservation!', displayWidth/3, 2500);
    nextButton.position(displayWidth-150, 2550);
    nextButton.mousePressed(()=>{
      state = 104;
    })
  }
  if(state === 104){
    fill(255,255,255)
    textSize(50)
    text('YOUR SCORE:', displayWidth/2-200, 2750)
    textSize(35)
    text(score+'/10', displayWidth/2-50, 2850)
    if(score>=8){
      textSize(25)
      text('Excellent!', displayWidth/2-50, 2950);
    }
    if(score>=6 && score <8){
      textSize(25)
      text('Good Job!', displayWidth/2-50, 2950);
    }
    if(score>3 && score<6){
      textSize(25)
      text('You can do better!', displayWidth/2-100, 2950);
    }
    if(score<=3){
      textSize(25)
      text('Work Harder!', displayWidth/2-50, 2950);
    }
    var turnHard = createButton('Hard')
    turnHard.position(displayWidth/4, 3050);
    var retryButton = createButton('Retry');
    retryButton.position(displayWidth-400, 3050);
    turnHard.mousePressed(()=>{
      state = 201;
    })
    retryButton.mousePressed(()=>{
      state = 1;
    })
  }
  hardButton.mousePressed(()=>{
    hardButton.position(-500, -500);
    backgroundSquare.shapeColor = "red";
    if(backgroundSquare.shapeColor === "red"){
      state = 201;
    }
  })
  if(state >= 201 || state === 'hard1correct' || state === 'hard1wrong'){
    easyButton.position(-500, -550)
    textSize(25);
    text('Question 1', displayWidth/2-75, 100)
    textSize(15)
    text('Animals that have a backbone fit into which category?', displayWidth/8, 150);
    choiceOneButton = createButton('Viruses');
    choiceOneButton.position(displayWidth/8, 200);
    if(state === 201){
    choiceOneButton.mousePressed(()=>{
      state = 'hard1wrong';
    })
  }
    choiceTwoButton = createButton('Vertebrates');
    choiceTwoButton.position(displayWidth/4.3, 200);
    if(state === 201){
    choiceTwoButton.mousePressed(()=>{
      state = 'hard1correct';
    })
  }
    choiceThreeButton = createButton('Bacteria');
    choiceThreeButton.position(displayWidth/3, 200);
    if(state === 201){
    choiceThreeButton.mousePressed(()=>{
      state = 'hard1wrong'
    })
  }
  }
  if(state==='hard1correct'){
    image(tick, displayWidth/2.2, 220);
    nextButton = createButton('next');
    nextButton.position(displayWidth/1.6, 300);
    nextButton.mousePressed(()=>{
      state = 202;
    })
    score = 1;
  }
  if(state === 'hard1wrong'){
    image(cross, displayWidth/5, 220);
    textSize(20)
    fill('yellow')
    text('Vertebrates!', displayWidth/2, 220);
    nextButton = createButton('next');
    nextButton.position(displayWidth/1.6, 300);
    nextButton.mousePressed(()=>{
      state = 202;
      nextButton.position(-550, -450);
      textSize(25);
      text('Question 2', displayWidth/2-75, 400)
      textSize(15)
      text('What is ML the symbol for?', displayWidth/8, 430);
    })
  }
  if(state === 202 || state === 'hard2wrong' || state === 'hard2correct'){
    textSize(25);
    text('Question 1', displayWidth/2-75, 100)
    textSize(15)
    text('Animals that have a backbone fit into which category?', displayWidth/8, 150);
    hardButton.position(-500, -550)
    textSize(25);
    text('Question 2', displayWidth/2-75, 400)
    textSize(15)
    text('What is ML the symbol for?', displayWidth/8, 430);
    easyTwoChoiceOneButton = createButton('Millilitres');
    easyTwoChoiceOneButton.position(displayWidth/8, 460);
    if(state === 202){
      easyTwoChoiceOneButton.mousePressed(()=>{
        state = 'hard2correct';
        //score = score + 1;
      })
    }
    easyTwoChoiceTwoButton = createButton('Magnetism');
    easyTwoChoiceTwoButton.position(displayWidth/4.5, 460);
    if(state === 202){
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 'hard2wrong';
    })
  }
  easyTwoChoiceThreeButton = createButton('Magnesium');
    easyTwoChoiceThreeButton.position(displayWidth/3, 460);
    if(state === 202){
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 'hard2wrong'
    })
    }
  if(state==='hard2correct'){
    image(tick, displayWidth/2.2, 550);
    nextButton.position(displayWidth/1.6, 550);
    nextButton.mousePressed(()=>{
      state = 230;
    })
    if(score === 0){
      score = 1;
    }
    if(score === 1){
      score = 2;
    }
  }
  if(state === 'hard2wrong'){
    image(cross, displayWidth/5, 550);
    textSize(20)
    fill('yellow');
    text('Millilitres!', displayWidth/8, 415)
    nextButton.position(displayWidth/1.6, 550);
    nextButton.mousePressed(()=>{
      state = 230;
    })
  }
  }
  if(state >= 230){
    easyButton.position(-500, -550);
    textSize(25);
    text('Question 2', displayWidth/2-75, 400)
    textSize(15)
    text('What is ML the symbol for?', displayWidth/8, 430);
    textSize(25);
    text('Question 3', displayWidth/2-75, 650)
    textSize(15)
    text('Which mode of transport did Robert Fulton commercialize?', displayWidth/11, 680);
    easyTwoChoiceOneButton = createButton('Covered Wagon')
    easyTwoChoiceOneButton.position(displayWidth/11, 710);
    easyTwoChoiceTwoButton = createButton('SteamBoat')
    easyTwoChoiceTwoButton.position(displayWidth/4.5, 710);
    easyTwoChoiceThreeButton = createButton('Rocket Ship')
    easyTwoChoiceThreeButton.position(displayWidth/3, 710)
    if(state === 230){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 231;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 232;
      score = score+1;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 233;
    })
  }
}
  if(state === 231){
    image(cross, displayWidth/8, 800);
    textSize(20);
    fill('yellow');
    text('The Steam Boat!', displayWidth/8, 750)
    nextButton.position(displayWidth-150, 800);
    nextButton.mousePressed(()=>{
      state = 240;
    })
  }
  if(state === 232){
    image(tick, displayWidth/2, 800);
    nextButton.position(displayWidth-150, 800);
    nextButton.mousePressed(()=>{
      state = 240;
    })
  }
  if(state === 233){
    image(cross, displayWidth-50, 800);
    textSize(20);
    fill('yellow');
    text('The Steam Boat!', displayWidth/2, 750)
    nextButton.position(displayWidth-150, 800);
    nextButton.mousePressed(()=>{
      state = 240;
    })
  }
  if(state >= 240){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 4', displayWidth/2-75, 900)
    textSize(15)
    text('Which element does O stand for?', displayWidth/11, 930);
    easyTwoChoiceOneButton = createButton('Oxygen')
    easyTwoChoiceOneButton.position(displayWidth/11, 960);
    easyTwoChoiceTwoButton = createButton('Osmium')
    easyTwoChoiceTwoButton.position(displayWidth/5, 960);
    easyTwoChoiceThreeButton = createButton('Oganesson')
    easyTwoChoiceThreeButton.position(displayWidth/3.5, 960)
    if(state === 240){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 241;
      score = score+1;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 242;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 243;
    })
  }
}
  if(state === 242){
    image(cross, displayWidth/4, 1050);
    textSize(20);
    fill('yellow');
    text('For Oxygen!', displayWidth/4, 100)
    nextButton.position(displayWidth-150, 1050);
    nextButton.mousePressed(()=>{
      state = 250;
    })
  }
  if(state === 241){
    image(tick, displayWidth/8, 1050);
    nextButton.position(displayWidth-150, 1050);
    nextButton.mousePressed(()=>{
      state = 250;
    })
  }
  if(state === 243){
    image(cross, displayWidth/3, 1050);
    textSize(20);
    fill('yellow');
    text('For Oxygen!', displayWidth/3, 1000)
    nextButton.position(displayWidth-150, 1050);
    nextButton.mousePressed(()=>{
      state = 250;
    })
  }
  if(state >= 250){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 5', displayWidth/2-75, 1150)
    textSize(15)
    text('Geometry is the study of _______', displayWidth/11, 1180);
    easyTwoChoiceOneButton = createButton('Shape')
    easyTwoChoiceOneButton.position(displayWidth/9, 1210);
    easyTwoChoiceTwoButton = createButton('Highway Design')
    easyTwoChoiceTwoButton.position(displayWidth/4.5, 1210);
    easyTwoChoiceThreeButton = createButton('The Human Form')
    easyTwoChoiceThreeButton.position(displayWidth/2.5, 1210)
    if(state === 250){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 251;
      score = score+1;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 252;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 253;
    })
  }
}
  if(state === 252){
    image(cross, displayWidth/4, 1300);
    textSize(20);
    fill('yellow');
    text('shapes!', displayWidth/4, 1250)
    nextButton.position(displayWidth-150, 1300);
    nextButton.mousePressed(()=>{
      state = 260;
    })
  }
  if(state === 253){
    image(cross, displayWidth/2, 1300);
    textSize(20);
    fill('yellow');
    text('shapes!', displayWidth/2, 1250)
    nextButton.position(displayWidth-150, 1300);
    nextButton.mousePressed(()=>{
      state = 260;
    })
  }
  if(state === 251){
    image(tick, displayWidth/8, 1300);
    nextButton.position(displayWidth-150, 1300);
    nextButton.mousePressed(()=>{
      state = 260;
    })
  }
  if(state >= 260){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 6', displayWidth/2-75, 1400)
    textSize(15)
    text('A mathematician who specializes in geometry is a ________', displayWidth/11, 1430);
    easyTwoChoiceOneButton = createButton('Geomagician')
    easyTwoChoiceOneButton.position(displayWidth/9, 1460);
    easyTwoChoiceTwoButton = createButton('Geometer')
    easyTwoChoiceTwoButton.position(displayWidth/4.3, 1460);
    easyTwoChoiceThreeButton = createButton('Geomatician')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1460)
    if(state === 260){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 261;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 262;
      score = score+1;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 263;
    })
  }
}
  if(state === 262){
    image(tick, displayWidth/4, 1550);
    nextButton.position(displayWidth-150, 1550);
    nextButton.mousePressed(()=>{
      state = 270;
    })
  }
  if(state === 261){
    image(cross, displayWidth/8, 1550);
    textSize(20);
    fill('yellow');
    text('A Geometer!', displayWidth/8, 1500);
    nextButton.position(displayWidth-150, 1550);
    nextButton.mousePressed(()=>{
      state = 270;
    })
  }
  if(state === 263){
    image(cross, displayWidth/3.5, 1550);
    textSize(20);
    fill('yellow');
    text('A geometer!', displayWidth/3.5, 1500);
    nextButton.position(displayWidth-150, 1550);
    nextButton.mousePressed(()=>{
      state = 270;
    })
  }
  if(state >= 270){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 7', displayWidth/2-75, 1650)
    textSize(15)
    text('Which planet in our Solar System is closest to the Sun?', displayWidth/11, 1680);
    easyTwoChoiceOneButton = createButton('Earth')
    easyTwoChoiceOneButton.position(displayWidth/9, 1710);
    easyTwoChoiceTwoButton = createButton('Venus')
    easyTwoChoiceTwoButton.position(displayWidth/4.55, 1710);
    easyTwoChoiceThreeButton = createButton('Mercury')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1710)
    if(state === 270){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 271;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 272;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 273;
      score = score+1;
    })
  }
}
  if(state === 271){
    image(cross, displayWidth/8, 1800);
    textSize(20);
    fill('yellow');
    text('Mercury, We live further away!', displayWidth/8, 1750);
    nextButton.position(displayWidth-150, 1800);
    nextButton.mousePressed(()=>{
      state = 280;
    })
  }
  if(state === 272){
    image(cross, displayWidth/4, 1800);
    textSize(20);
    fill('yellow');
    text('Mercury, not Venus!', displayWidth/4, 1750);
    nextButton.position(displayWidth-150, 1800);
    nextButton.mousePressed(()=>{
      state = 280;
    })
  }
  if(state === 273){
    image(tick, displayWidth/3, 1800);
    nextButton.position(displayWidth-150, 1800);
    nextButton.mousePressed(()=>{
      state = 280;
    })
  }
  if(state >= 280){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 8', displayWidth/2-75, 1900)
    textSize(15)
    text('What is a simple machine that consists of a rope and a wheel?', displayWidth/11, 1930);
    easyTwoChoiceOneButton = createButton('Trip wire')
    easyTwoChoiceOneButton.position(displayWidth/9, 1960);
    easyTwoChoiceTwoButton = createButton('Pulley')
    easyTwoChoiceTwoButton.position(displayWidth/4.55, 1960);
    easyTwoChoiceThreeButton = createButton('Wheel-O')
    easyTwoChoiceThreeButton.position(displayWidth/3, 1960)
    if(state === 280){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 281;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 282;
      score = score+1;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 283;
    })
  }
}
  if(state === 281){
    image(cross, displayWidth/8, 2050);
    textSize(20);
    fill('yellow');
    text('A pulley!', displayWidth/8, 2000);
    nextButton.position(displayWidth-150, 2050);
    nextButton.mousePressed(()=>{
      state = 290;
    })
  }
  if(state === 283){
    image(cross, displayWidth/2.5, 2050);
    textSize(20);
    fill('yellow');
    text('A pulley!', displayWidth/2.5, 2000);
    nextButton.position(displayWidth-150, 2050);
    nextButton.mousePressed(()=>{
      state = 290;
    })
  }
  if(state === 282){
    image(tick, displayWidth/4, 2050);
    nextButton.position(displayWidth-150, 2050);
    nextButton.mousePressed(()=>{
      state = 290;
    })
  }
  if(state >= 290){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 9', displayWidth/2-75, 2150)
    textSize(15)
    text('Which force is vital for keeping planets in their orbits?', displayWidth/11, 2180);
    easyTwoChoiceOneButton = createButton('Yaw')
    easyTwoChoiceOneButton.position(displayWidth/9, 2210);
    easyTwoChoiceTwoButton = createButton('Gravity')
    easyTwoChoiceTwoButton.position(displayWidth/4.5, 2210);
    easyTwoChoiceThreeButton = createButton('Kryptonite')
    easyTwoChoiceThreeButton.position(displayWidth/3, 2210)
    if(state === 290){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 291;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 292;
      score = score+1;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 293;
    })
  }
}
  if(state === 292){
    image(tick, displayWidth/4, 2300);
    nextButton.position(displayWidth-150, 2300);
    nextButton.mousePressed(()=>{
      state = 300;
    })
  }
  if(state === 291){
    image(cross, displayWidth/8, 2300);
    textSize(20);
    fill('yellow');
    text('Gravity!', displayWidth/8, 2250);
    nextButton.position(displayWidth-150, 2300);
    nextButton.mousePressed(()=>{
      state = 300;
    })
  }
  if(state === 293){
    image(cross, displayWidth/3, 2300);
    textSize(20);
    fill('yellow');
    text('Gravity!', displayWidth/3, 2250);
    nextButton.position(displayWidth-150, 2300);
    nextButton.mousePressed(()=>{
      state = 300;
    })
  }
  if(state >= 300){
    hardButton.position(-500, -550);
    textSize(25);
    text('Question 10', displayWidth/2-75, 2400)
    textSize(15)
    text('What is the fastest land animal on Earth?', displayWidth/11, 2430);
    easyTwoChoiceOneButton = createButton('Cheetah')
    easyTwoChoiceOneButton.position(displayWidth/9, 2460);
    easyTwoChoiceTwoButton = createButton('Carpenter Ant')
    easyTwoChoiceTwoButton.position(displayWidth/4.55, 2460);
    easyTwoChoiceThreeButton = createButton('Marlin')
    easyTwoChoiceThreeButton.position(displayWidth/3, 2460)
    if(state === 300){
    easyTwoChoiceOneButton.mousePressed(()=>{
      state = 301;
      score = score+1;
    })
    easyTwoChoiceTwoButton.mousePressed(()=>{
      state = 302;
    })
    easyTwoChoiceThreeButton.mousePressed(()=>{
      state = 303;
    })
  }
}
  if(state === 301){
    image(tick, displayWidth/8, 2550);
    nextButton.position(displayWidth-150, 2550);
    nextButton.mousePressed(()=>{
      state = 304;
    })
  }
  if(state === 302){
    image(cross, displayWidth/4, 2550);
    textSize(20);
    fill('yellow');
    text('The Cheetah is the fastest!', displayWidth/4, 2500);
    nextButton.position(displayWidth-150, 2550);
    nextButton.mousePressed(()=>{
      state = 304;
    })
  }
  if(state === 303){
    image(cross, displayWidth/3, 2550);
    textSize(20);
    fill('yellow');
    text('The Cheetah is the fastest!', displayWidth/3, 2500);
    nextButton.position(displayWidth-150, 2550);
    nextButton.mousePressed(()=>{
      state = 304;
    })
  }
  if(state === 304){
    fill(255,255,255)
    textSize(50)
    text('YOUR SCORE:', displayWidth/2-200, 2750)
    textSize(35)
    text(score+'/10', displayWidth/2-50, 2850)
    if(score>=8){
      textSize(25)
      text('Excellent!', displayWidth/2-50, 2950);
    }
    if(score>=6 && score <8){
      textSize(25)
      text('Good Job!', displayWidth/2-50, 2950);
    }
    if(score>3 && score<6){
      textSize(25)
      text('You can do better!', displayWidth/2-100, 2950);
    }
    if(score<=3){
      textSize(25)
      text('Work Harder!', displayWidth/2-50, 2950);
    }
    var turnEasy = createButton('Easy')
    turnEasy.position(displayWidth/4, 3050);
    var retryButton = createButton('Retry');
    retryButton.position(displayWidth-400, 3050);
    turnEasy.mousePressed(()=>{
      state = 1;
    })
    retryButton.mousePressed(()=>{
      state = 201;
    })
  }
}
/*function increaseScore(){
  if(state === 32){
    score = score+1;
  }
  if(state === 42){
    score = score+1;
  }
  if(state === 53){
    score = score+1;
  }
  if(state === 61){
    score = score+1;
  }
  if(state === 73){
    score = score+1;
  }
  if(state === 83){
    score = score+1;
  }
  if(state === 91){
    score = score+1;
  }
  if(state === 101){
    score = score+1;
  }
}*/