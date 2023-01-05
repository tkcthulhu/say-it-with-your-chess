function Board() {   

    let board = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ]

    let renderBoard = []

    for (let i = board.length; i >= 0; i--) {

        let this_row = []

        for (const square in board[i]) {

            if ((Number(square) + i) % 2) {
                this_row.push(
                    <div className="col-1 B square"></div>
                )
            } else {
                this_row.push(
                    <div className="col-1 W square"></div>
                )
            }

        }

        renderBoard.push(
            <div className="row justify-content-center">
                {this_row}
            </div>
        )

    }

    return(
        <div className="container chessboard">
            {renderBoard}
        </div>
    )

}

export default Board