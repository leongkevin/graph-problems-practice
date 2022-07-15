function getNeighbors(row, col, graph) {
  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  //const neighborArr = [];
  // // if(graph[row-1] !== undefined && graph[row-1][col] === 1){
  // if (row >= 0 && graph[row - 1][col] === 1) {
  //   neighborArr.push([row - 1, col]);
  // }
  // if (row <= graph.length - 1 && graph[row + 1][col] === 1) {
  //   neighborArr.push([row + 1, col]);
  // }
  // if (col >= 0 && graph[row][col - 1] === 1) {
  //   neighborArr.push([row, col - 1]);
  // }
  // if (col <= graph[col].length - 1 && graph[row][col + 1] === 1) {
  //   neighborArr.push([row, col + 1]);
  // }
  // console.log(neighborArr + ` <--- console.log`);
  // return neighborArr;
    //crate an array to host the neighbors.
    const neighborArr = [];
    // we need to becareful and make sure the row doesn't go out of bounds as well as the value of the neighbor has to be 1.
    if (graph[row - 1] !== undefined && graph[row - 1][col] === 1) {
      neighborArr.push([row - 1, col])
    }

    // Check bottom
    if (graph[row + 1] !== undefined && graph[row + 1][col] === 1) {
      neighborArr.push([row + 1, col])
    }
    // Check left
    if (graph[row][col - 1] !== undefined && graph[row][col - 1] === 1) {
      neighborArr.push([row, col - 1])
    }

    // Check right
    if (graph[row][col + 1] !== undefined && graph[row][col + 1] === 1) {
      neighborArr.push([row, col + 1])
    }
    // Return neighbors
    return neighborArr;
    // Your code here
}

// graph = [
//      0 1 2 3 4
// i 0 [1,1,1,0,0],
// i 1 [0,1,1,0,1],
// i 2 [0,1,1,0,1],
// ]
//      j j j j j

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here
   // Create a visited set to store visited nodes
    const visitedSet = new Set();


    // Create a stack, put the starting node in the stack.
    // here we will create a stack and the item we add to the stack is an array that contains the coordinates for the node on the graph [row, col]
    const startNode = [row, col]
    const stack = [startNode]; //stack = [[row, col]]

    // Put the stringified starting node in visited
    //this is the tricky part, analyze why we CANNOT just add an array of [row,col]
    //instead we have to create a hash like string w/ interpolation
    visitedSet.add(`${row},${col}`)

    // Initialize size to 0
    let size = 0;
    // While the stack is not empty,
    while (stack.length > 0) {
      // Pop the first node
      let currentNode = stack.pop(); //i.e. currentNode = [1,1]
      let currentRow = currentNode[0];
      let currentCol = currentNode[1];

      // DO THE THING (increment size by 1)
      size += 1;
      // Then push all the UNVISITED neighbors on top of the stack
      // HINT: This is what your helper function `getNeighbors` is for
      const neighborArr = getNeighbors(currentRow, currentCol, graph);
      for (let i = 0; i < neighborArr.length; i++) {
        const neighborEl = neighborArr[i]; //i.e. neighborEl = [1,2]
        // HINT: Remember, you're storing your visited nodes as strings!
        // WHY will !visitedSet.has(neighborEl) fail?
        if (!visitedSet.has(`${neighborEl[0]},${neighborEl[1]}`)) {
          // and mark them as visited
          // WHY will  visitedSet.add(neighborEl) fail?
          visitedSet.add(`${neighborEl[0]},${neighborEl[1]}`);
          stack.push(neighborEl);
        }
      }

    }
    // return size
    return size;
}

module.exports = [getNeighbors, islandSize];
