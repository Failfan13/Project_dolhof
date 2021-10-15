const maze = document.querySelector('#maze');
const start = [0,25];
const end = [49,25];
const decide = [];
const rightPath = [];
let a = 0;
let done = 0;

const checkMove = (col, row) => {
    let dir= 0;
    let originalArr = [col+1, row, col, row-1, col, row+1, col-1, row];
    let arr = [col, row-1, col-1, row, col, row+1, col+1, row];
//check crossroad
    for(i=0;i<arr.length;i+=2){
        if (!maze.children[arr[i]] || !maze.children[arr[i]].children[arr[i+1]]) {   
        } else if (!maze.children[arr[i]].children[arr[i+1]].className.includes('star') && !maze.children[arr[i]].children[arr[i+1]].className.includes('gelopen')) {
            dir++;
            if (dir == 2) {
                decide.push(col.toString()+' '+row.toString());
            }
        } 
    }
//move
    for(i=0;i<arr.length;i+=2){
        if (!maze.children[arr[i]]) {
        }
        else if (!maze.children[arr[i]].children[arr[i+1]].className.includes('star') && !maze.children[arr[i]].children[arr[i+1]].className.includes('gelopen')) {
            maze.children[col].children[row].className = maze.children[col].children[row].className + ' gelopen';
            rightPath.push(parseInt(maze.children[arr[i]].children[arr[i+1]].dataset.row).toString()+' '+parseInt(maze.children[arr[i]].children[arr[i+1]].dataset.col).toString());
            if(parseInt(maze.children[arr[i]].children[arr[i+1]].dataset.row) == end[0] && parseInt(maze.children[arr[i]].children[arr[i+1]].dataset.col) == end[1]){
                return checkMove();
            }
            checkMove(parseInt(maze.children[arr[i]].children[arr[i+1]].dataset.row), parseInt(maze.children[arr[i]].children[arr[i+1]].dataset.col));
        } else if (dir <= 0) {
            let lastPoint = decide[decide.length -1];
            decide.pop(decide[decide.length -1]);
            rightPath.splice(rightPath.indexOf(lastPoint)+1, rightPath.length - 1);
            return checkMove(parseInt(lastPoint.split(" ")[0]), parseInt(lastPoint.split(" ")[1]));
        }
        if (!col && !row) {
            if(done == 0) {
                for(i=0;i<rightPath.length;i++){
                    maze.children[parseInt(rightPath[i].split(" ")[0])].children[parseInt(rightPath[i].split(" ")[1])].className += ' green';
                }
            }
        }
        a++;
    }
};
checkMove(start[0],start[1]);

/* Compressed 
const maze=document.querySelector("#maze"),start=[0,25],end=[49,25],decide=[],rightPath=[];let a=0,done=0;
const checkMove=(e,t)=>{let r=0;var n=[e,t-1,e-1,t,e,t+1,e+1,t];for(i=0;i<n.length;i+=2)
    maze.children[n[i]]&&maze.children[n[i]].children[n[i+1]]&&(maze.children[n[i]].children[n[i+1]].className.includes("star")
    ||maze.children[n[i]].children[n[i+1]].className.includes("gelopen")||(r++,2==r&&decide.push(e.toString()+" "+t.toString())));for(i=0;i<n.length;i+=2)
    {if(maze.children[n[i]])if(maze.children[n[i]].children[n[i+1]].className.includes("star")||maze.children[n[i]].children[n[i+1]].className.includes("gelopen"))
    {if(r<=0){let e=decide[decide.length-1];return decide.pop(decide[decide.length-1]),rightPath.splice(rightPath.indexOf(e)+1,rightPath.length-1),checkMove(parseInt(e.split(" ")[0])
    ,parseInt(e.split(" ")[1]))}}else{if(maze.children[e].children[t].className=maze.children[e].children[t].className+" gelopen",
    rightPath.push(parseInt(maze.children[n[i]].children[n[i+1]].dataset.row).toString()+" "+parseInt(maze.children[n[i]].children[n[i+1]].dataset.col).toString()),
    parseInt(maze.children[n[i]].children[n[i+1]].dataset.row)==end[0]&&parseInt(maze.children[n[i]].children[n[i+1]].dataset.col)==end[1])return checkMove();
    checkMove(parseInt(maze.children[n[i]].children[n[i+1]].dataset.row),parseInt(maze.children[n[i]].children[n[i+1]].dataset.col))}else;if(!e&&!t&&0==done)
    for(i=0;i<rightPath.length;i++)maze.children[parseInt(rightPath[i].split(" ")[0])].children[parseInt(rightPath[i].split(" ")[1])].className+=" green";a++}};checkMove(start[0],start[1]);
*/