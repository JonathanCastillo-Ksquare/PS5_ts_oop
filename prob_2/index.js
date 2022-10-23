"use strict";
class Matrix {
    constructor(matrix) {
        this._columns = 0;
        this._rows = matrix.length;
        if (matrix.every(i => i.length === matrix[0].length)) {
            this._columns = matrix[0].length;
        }
        else {
            console.log("La matriz es asimetrica, todas las filas deben contener el mismo número de columnas");
        }
        this._matrix = matrix;
    }
    rowsNum() {
        return this._matrix.length;
    }
    columnsNum() {
        return this._matrix[0].length;
    }
    setElement(x, y, value) {
        this._matrix[x][y] = value;
        return this._matrix;
    }
    sum(matrixB) {
        if (this._rows === matrixB.length && this._columns === matrixB[0].length) {
            let resultSum = new Array(this._rows).fill(0).map(() => new Array(this._columns).fill(0));
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < this._columns; j++) {
                    resultSum[i][j] = this._matrix[i][j] + matrixB[i][j];
                }
            }
            return resultSum;
        }
        else {
            console.log("NOOP");
        }
    }
    mult(matrixB) {
        if (this._columns === matrixB.length) {
            let resultMult = new Array(this._rows).fill(0).map(() => new Array(matrixB[0].length).fill(0));
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < matrixB[0].length; j++) {
                    for (let k = 0; k < this._columns; k++) {
                        resultMult[i][j] += this._matrix[i][k] * matrixB[k][j];
                    }
                }
            }
            return resultMult;
        }
        else {
            console.log("NOOP");
        }
    }
    set matrix(matrix) {
        this._matrix = matrix;
    }
    get matrix() {
        return this._matrix;
    }
}
class MatrixB extends Matrix {
    constructor(matrix) {
        super(matrix);
    }
}
const mainMatrix = new Matrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8]
]);
const matrixB = new MatrixB([
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);
console.log("The main matrix has", mainMatrix.rowsNum(), "rows");
console.log("The main matrix has", mainMatrix.columnsNum(), "rows");
console.log("The sum of the main matrix and the matrix B is:", mainMatrix.sum(matrixB.matrix));
const Amatrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
]);
const Bmatrix = new MatrixB([
    [1, 2],
    [3, 4],
    [5, 6]
]);
console.log("The matrix A has: ", Amatrix.rowsNum(), "rows");
console.log("The matrix B has: ", Bmatrix.columnsNum(), "columns");
console.log("The result of the dot product of the matrix A and B is: ", Amatrix.mult(Bmatrix.matrix));
