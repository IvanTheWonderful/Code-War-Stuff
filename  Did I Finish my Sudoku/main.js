function doneOrNot(board){
    var result = "Finished!"
    var checkerRow = {}
    var checkerColumn = {}
    var checkerRegion = {}
    var board_copy_1 = [[],[],[],[],[],[],[],[],[]]
    var board_copy_2 = [[],[],[],[],[],[],[],[],[]]
    // deep copy "board"
    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 9; x++) {
            board_copy_1[i][x] = board[i][x]
            board_copy_2[i][x] = board[i][x]
        }
    }

    // 1. create a new nested array of columns
    var columns = []
    var eachColumn = []

    for (let i = 0; i < 9; i++) {
        // remove the first item in each row and put them in array "eachColumn"
        for (let x = 0; x < 9; x++) {
            eachColumn[x] = board_copy_1[x].shift()
        }
        // assign the value of eachColumn to columns[i], then clear "eachColumn" for next column
        columns[i] = eachColumn
        eachColumn = []
    }

    // 2. create a new nested array of regions
    var regions = [[],[],[],[],[],[],[],[],[]]

    for (let i = 0; i < 9; i = i + 3) {
        for (let x = 0; x < 3; x++) {
            // remove the first 3 items from "board_copy_2[x]" and add them into "regions[i]"
            regions[i] = regions[i].concat(board_copy_2[x].splice(0, 3))
            // remove the next 3 items from "board_copy_2[x]" and add them into "regions[i + 1]"
            regions[i + 1] = regions[i + 1].concat(board_copy_2[x].splice(0, 3))
            // remove the last 3 items from "board_copy_2[x]" and add them into "regions[i + 2]"
            regions[i + 2] = regions[i + 2].concat(board_copy_2[x].splice(0, 3))
        }
        // now the first 3 arraies in "board_copy_2" are empty, remove them for next iteration
        board_copy_2.splice(0, 3)
    }

    // 3. scan each row, column, and region for violation
    for (let i = 0; i < 9; i++) {
        // check each number to see if there if a duplicate
        for (let x = 0; x < 9; x++) {
            if (board[i][x] == null || board[i][x] < 1 || board[i][x] > 9 || !(Number.isInteger(board[i][x]))) {
                result = "Try again!"
            } else {
                // if the "checker" doesn't have this number, then create a key value pair, where this number is the key and true is its value
                if (checkerColumn[columns[i][x]] || checkerRow[board[i][x]] || checkerRegion[regions[i][x]]) {
                    result = "Try again!"
                }

                if (checkerRow[board[i][x]] == undefined) {
                    checkerRow[board[i][x]] = true
                }
    
                if (checkerColumn[columns[i][x]] == undefined) {
                    checkerColumn[columns[i][x]] = true
                }
                
                if (checkerRegion[regions[i][x]] == undefined) {
                    checkerRegion[regions[i][x]] = true
                }
            }
        }
        // clear the objects for checking next row, column, and region
        checkerRow = new Object
        checkerColumn = new Object
        checkerRegion = new Object
    }
    return result
}

console.log(doneOrNot([ 
    [ 1, 3, 2, 4, 9, 8, 7, 5, 6 ],
    [ 5, 7, 9, 2, 6, 1, 3, 8, 4 ],
    [ 4, 6, 8, 3, 7, 5, 2, 1, 9 ],
    [ 6, 4, 3, 5, 2, 1, 9, 8, 7 ],
    [ 1, 5, 8, 7, 9, 3, 4, 2, 6 ],
    [ 7, 9, 2, 8, 4, 6, 5, 3, 1 ],
    [ 2, 1, 4, 3, 6, 5, 8, 7, 9 ],
    [ 9, 3, 5, 8, 1, 7, 6, 4, 2 ],
    [ 6, 8, 7, 9, 2, 4, 1, 3, 5 ] 
]))

// console.log(doneOrNot([
// [5, 3, 4, 6, 7, 8, 9, 1, 2], 
// [6, 7, 2, 1, 9, 5, 3, 4, 8],
// [1, 9, 8, 3, 4, 2, 5, 6, 7],
// [8, 5, 9, 7, 6, 1, 4, 2, 3],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 6, 1, 5, 3, 7, 2, 8, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]]))