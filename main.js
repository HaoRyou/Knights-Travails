const rows = 8;
const columns = 8;

const move = [
    [-2,1],
    [-1,2],
    [1,2],
    [2,1],
    [-2,-1],
    [-1,-2],
    [1,-2],
    [2,-1] 
]


class knight{
    constructor(x,y, path = []){
        this.columns = x;
        this.rows = y;
        this.path = [...path, [x,y]];
    }
}

function isValid(x, y, visited){
    return (
        x >= 0 && x < columns &&
        y >= 0 && y < rows &&
        !visited[y][x]
    );
}

function knightMove(start, end){
    const visited = Array.from({ length: rows }, () => Array(columns).fill(false));

    const queue = [];
    const [startX, startY] = start;
    const [endX, endY] = end;
    queue.push(new Knight(startX, startY));

    while(queue.length > 0){
        const current = queue.shift();
        const { x, y, path } = current;

        // If reached the destination
        if(x === endX && y === endY){
            console.log("Shortest path:", path);
            return path;
        }

        // Mark as visited
        visited[y][x] = true;

        for(let [dx, dy] of moves){
            const newX = x + dx;
            const newY = y + dy;

            if(isValid(newX, newY, visited)){
                queue.push(new Knight(newX, newY, path));
            }
        }
    }

    return null; // No path found
}


