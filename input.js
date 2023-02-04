let inputDirection={x:0,y:0}
let LastInputDirection={x:0,y:0}

window.addEventListener('keydown',e=>{
    switch(e.key){
        case 'ArrowUp':
            if(LastInputDirection.y!=0) return
            inputDirection={x:0,y:-1}
            break
        case 'ArrowDown':
            if(LastInputDirection.y!=0) return
            inputDirection={x:0,y:1}
            break    
        case 'ArrowLeft':
            if(LastInputDirection.x!=0) return
            inputDirection={x:-1,y:0}
            break
        case 'ArrowRight':
            if(LastInputDirection.x!=0) return
            inputDirection={x:1,y:0}
            break                
    }
})

export function getInputDirection(){
    LastInputDirection=inputDirection
    return inputDirection
}