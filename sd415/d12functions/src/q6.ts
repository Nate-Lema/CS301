function calcDistance(x1:number,y1:number,x2:number,y2:number):number{
    let d = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) );
    return d;
}
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5).toFixed(2));