export const createBoard = (rows = 3, cols = 3) => {
    const board = []
    for(let f = 0; f < rows; f++) {
        const row = []
        for(let c = 0; c < cols; c++) row.push("")
        board.push(row)
    }
    return board
}