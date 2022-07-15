function getNeighbors(row, col, graph) {
  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  const neighborArr = [];
  if (row > 0 && graph[row - 1][col] === 1) {
    neighborArr.push([row - 1, col]);
  }
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighborArr.push([row + 1, col]);
  }
  if (col > 0 && graph[row][col - 1] === 1) {
    neighborArr.push([row, col - 1]);
  }
  if (col < graph[col].length - 1 && graph[row][col + 1] === 1) {
    neighborArr.push([row, col + 1]);
  }
  console.log(neighborArr + ` <---arr`);
  return neighborArr;
}

// matrix = [
//     0 1 2 3 4
//  0 [1,1,1,0,0],
//  1 [0,1,1,0,1],
//  2 [0,1,1,0,1],
// ]

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
}

module.exports = [getNeighbors, islandSize];
