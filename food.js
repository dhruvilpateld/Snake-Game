import { onSnake,expandSnake } from "./snake.js";
import { getGridPosition } from "./grid.js";
import { updateScore } from "./game.js";

let food=randomFoodPosition()
let EXPANSION_RATE=3;

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food=randomFoodPosition()
        updateScore()
    }
}

export function draw(gameboard){
    let foodElement=document.createElement('div')
    foodElement.style.gridRowStart=food.y
    foodElement.style.gridColumnStart=food.x
    foodElement.classList.add('food')
    gameboard.appendChild(foodElement)
}

function randomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition=getGridPosition()
    }
    return newFoodPosition
}