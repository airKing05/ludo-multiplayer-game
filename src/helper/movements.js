export function move(x, y, pawn) {

    // check for home entry points
    if (x === 0 && y === 7 ) {
        return [1, 0];
    }

    if (x === 0 && y === -7 ) {
        return [-1, 0];
    }

    if (x === 7 && y === 0 ) {
        return [0, -1];
    }

    if (x === -7 && y === 0 ) {
        return [0, 1];
    }


    // check for diagonal movement points
    if (x=== -1 && y === -2) {
        return [-1, 1];
    }

    if (x=== -2 && y === 1) {
        return [1, 1];
    }

    if (x=== 1 && y === 2) {
        return [1, -1];
    }

    if (x=== 2 && y === -1) {
        return [-1, -1];
    }


    // check for corners rotation
    if ((x === -7 && y === -1) || (x === -1 && y === -7)) {
        return [0, 1];
    }

    if ((x === -7 && y === 1) || (x === -1 && y === 7)) {
        return [1, 0];
    }

    if ((x === 1 && y === 7) || (x === 7 && y === 1)) {
        return [0, -1];
    }

    if ((x === 7 && y === -1) || (x === 1 && y === -7)) {
        return [1, 0];
    }


    // normal movement
    if (x === -1) {
        return [0, 1];
    } else if (x === -1) {
        return [0, -1];
    } else if (y === 1) {
        return [1, 0];
    } else if (y === -1) {
        return [-1, 0];
    }
    return [0, 0];
}


