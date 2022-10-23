/*-------------------------------------Create a main matrix--------------------------------------------*/
class Matrix {
    // Protected variables so we can use them in another class but not outside
    protected _rows: number;
    protected _columns: number = 0;
    protected _matrix: number[][];

    // Give al array to the constructor
    constructor(matrix: number[][]) {
        this._rows = matrix.length;
        if (matrix.every(i => i.length === matrix[0].length)) {
            this._columns = matrix[0].length;
        }
        else {
            console.log("La matriz es asimetrica, todas las filas deben contener el mismo número de columnas")
        }
        this._matrix = matrix;
    }


    /*-------------------------------------Get the rows number method--------------------------------------------*/
    rowsNum() {
        return this._matrix.length;
    }

    /*-------------------------------------Get the columns number method--------------------------------------------*/
    columnsNum() {
        return this._matrix[0].length;
    }

    /*-------------------------------------Set a value inside the matrix--------------------------------------------*/
    setElement(x: number, y: number, value: number) {
        this._matrix[x][y] = value;
        return this._matrix
    }

    /*-------------------------------------Sum of matrix--------------------------------------------*/
    sum(matrixB: number[][]) {
        // The order of both matrix need to be the same, otherwhise it is not gonna work
        if (this._rows === matrixB.length && this._columns === matrixB[0].length) {
            // Create a matrix to store the result matrix
            let resultSum: number[][] = new Array(this._rows).fill(0).map(() => new Array(this._columns).fill(0))
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < this._columns; j++) {
                    // Fill the result matrix with the sum of each element of the two matrix
                    resultSum[i][j] = this._matrix[i][j] + matrixB[i][j]
                }
            }
            return resultSum
        }
        else {
            console.log("NOOP")
        }
    }

    /*-------------------------------------Multiplication of matrix--------------------------------------------*/
    mult(matrixB: number[][]) {
        // The numbber of columns of the first matrix have to be the same as the number of rows of the second matrix
        // Also all the rows have to have the same amount of columns
        if (this._columns === matrixB.length) {
            // Create a result matrix to store the product result matrix
            let resultMult: number[][] = new Array(this._rows).fill(0).map(() => new Array(matrixB[0].length).fill(0));
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < matrixB[0].length; j++) {
                    for (let k = 0; k < this._columns; k++) {
                        // Searching patrons with an example small matrix, the dot product will be this way:
                        resultMult[i][j] += this._matrix[i][k] * matrixB[k][j]
                    }
                }
            }
            return resultMult
        }
        else {
            console.log("NOOP")
        }

    }


    /*-------------------------------------Setter--------------------------------------------*/

    public set matrix(matrix: number[][]) {
        this._matrix = matrix;
    }

    /*-------------------------------------Getter--------------------------------------------*/
    public get matrix() {
        return this._matrix
    }
}

/*-------------------------------------MatrixB--------------------------------------------*/
class MatrixB extends Matrix {
    constructor(matrix: number[][]) {
        super(matrix)
    }
}


/*--------------------------------------------------Tests-------------------------------------------------------------------*/

const mainMatrix = new Matrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8]
])
const matrixB = new MatrixB([
    [9, 10, 11, 12],
    [13, 14, 15, 16]
])

console.log("The main matrix has", mainMatrix.rowsNum(), "rows")
console.log("The main matrix has", mainMatrix.columnsNum(), "rows")
console.log("The sum of the main matrix and the matrix B is:", mainMatrix.sum(matrixB.matrix))


const Amatrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
])
const Bmatrix = new MatrixB([
    [1, 2],
    [3, 4],
    [5, 6]
])

console.log("The matrix A has: ", Amatrix.rowsNum(), "rows")
console.log("The matrix B has: ", Bmatrix.columnsNum(), "columns")

console.log("The result of the dot product of the matrix A and B is: ", Amatrix.mult(Bmatrix.matrix))



