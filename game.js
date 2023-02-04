import { SNAKE_SPEED,draw as drawSnake,update as updateSnake,snakeHead,snakeIntersection } from "./snake.js"
import {draw as drawFood,update as updateFood} from "./food.js"
import { OutsideGridPostion } from "./grid.js"

let LastRenderTime=0
const gameboard=document.getElementById('game-board')
let gameOver=false;
let score=0
let HighScore=localStorage.getItem('HighScore')
let HighScoreVal
if(HighScore==null){
    HighScoreVal=0
    localStorage.setItem('HighScore',JSON.stringify(HighScoreVal))
}
else{
    HighScoreVal=JSON.parse(HighScore)
}
hiscorecount.innerHTML="High Score:"+HighScoreVal

function main(currentTime){
    if(gameOver){
        if(confirm('You lose.Press okay to restart')){
            window.location='/'
        }
        return
    }

    const SecondsSinceLastRender=(currentTime-LastRenderTime)/1000
    window.requestAnimationFrame(main)
    if(SecondsSinceLastRender<1/SNAKE_SPEED) return
    LastRenderTime=currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameboard.innerHTML=''
    drawSnake(gameboard)
    drawFood(gameboard)
}

function checkDeath(){
    gameOver=OutsideGridPostion(snakeHead()) || snakeIntersection()
}

export function updateScore(){
    
    score+=1
    scorecount.innerHTML="Score:"+JSON.stringify(score)
    if(score>HighScore){
        HighScoreVal=score
        localStorage.setItem('HighScore',JSON.stringify(HighScoreVal))
        hiscorecount.innerHTML="High Score:"+HighScoreVal
    }
    
}
