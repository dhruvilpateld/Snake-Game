import { getInputDirection } from "./input.js"

export const SNAKE_SPEED=9
const snakeBody=[{x:11,y:11}]
let NewSegments=0

export function update(){
    addSegments()
    const InputDirection=getInputDirection()
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]}
    }
    snakeBody[0].x+=InputDirection.x
    snakeBody[0].y+=InputDirection.y
}

export function draw(gameboard){
    snakeBody.forEach((segment,index)=>{
        let snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        if(index==0){
            snakeElement.classList.add('head')
        }
        gameboard.appendChild(snakeElement)
    })
}

export function snakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeHead(),{ignoreHead:true})
}

export function expandSnake(amount){
    NewSegments+=amount
}

export function onSnake(position,{ignoreHead=false}={}){
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index==0) return false
        return equalPositions(segment,position)
    })
}

function equalPositions(pos1,pos2){
    return pos1.x==pos2.x && pos1.y==pos2.y
}

function addSegments(){
    for(let i=0;i<NewSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    NewSegments=0
}