const nested = [1,[2,[3,[4,[5]]]]]
function flattendeep(arr){
    let stack = [...arr];
    let result = [];
    while(stack.length>0){ 
        let current = stack.pop();
        if(Array.isArray(current)){
            for(let i = current.length-1;i>=0;i--){
                stack.push(current[i]);
            }
        }else{
            result.push(current);
        }   
    }
}


// here the while is taken to decrease the length[] we are pop,push methods
// here we deleted [] firstly then its push to the array funtion of the argument current