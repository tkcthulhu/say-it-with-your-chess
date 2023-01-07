import white_bishop from '../img/white_bishop.png'
import white_king from '../img/white_king.png'
import white_knight from '../img/white_knight.png'
import white_pawn from '../img/white_pawn.png'
import white_queen from '../img/white_queen.png'
import white_rook from '../img/white_rook.png'
import black_bishop from '../img/black_bishop.png'
import black_king from '../img/black_king.png'
import black_knight from '../img/black_knight.png'
import black_pawn from '../img/black_pawn.png'
import black_queen from '../img/black_queen.png'
import black_rook from '../img/black_rook.png'

function Board() {   

    let board = [
        [4,2,3,5,6,3,2,4],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [-1,-1,-1,-1,-1,-1,-1,-1],
        [-4,-2,-3,-5,-6,-3,-2,-4]
    ]

    let renderBoard = []    

    let columnLetterValue = ''

    function piece(pieceValue) {
        switch(pieceValue) {
            default:
                return ''
            case -6:
                return black_king;
            case -5:
                return black_queen;
            case -4:
                return black_rook;
            case -3:
                return black_bishop;
            case -2:
                return black_knight;
            case -1:
                return black_pawn;
            case 1:
                return white_pawn;
            case 2:
                return white_knight;
            case 3:
                return white_bishop;
            case 4:
                return white_rook;
            case 5:
                return white_queen;
            case 6:
                return white_king;         
        }
    }

    function columnLetter(square) {
        switch(square) {
            default:
                break;
            case 0:
                columnLetterValue = 'A'
                break
            case 1:
                columnLetterValue = 'B'
                break
            case 2:
                columnLetterValue = 'C'
                break
            case 3:
                columnLetterValue = 'D'
                break
            case 4:
                columnLetterValue = 'E'
                break
            case 5:
                columnLetterValue = 'F'
                break
            case 6:
                columnLetterValue = 'G'
                break
            case 7:
                columnLetterValue = 'H'
                break
        }

        return columnLetterValue

    }

    for (let i = board.length; i >= 0; i--) {

        let this_row = []

        for (const square in board[i]) {

                let this_square = Number(square)
                this_row.push(
                    <div className={`col d-flex justify-content-center ${(this_square + i) % 2 ? 'W' : 'B'} square`} onClick={() => console.log(columnLetter(this_square),i+1)} key={`${columnLetter(this_square)}${i+1}`}>
                        {board[i][this_square] ? <img src={piece(board[i][this_square])} alt="" className='piece'/> : ''}
                    </div>
                )
        }

        renderBoard.push(
            <div className="row justify-content-center" key={i}>
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