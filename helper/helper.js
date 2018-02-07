export function getValidList(boardX, boardY) {
    function isValidTile(x, y) {
        if (x < 0 || y < 0 || y >= boardY || x >= boardX) {
            return false;
        }
        return true;
    }

    return function getValidAdjacencyList(x, y) {
        var N = [x ,y+1],
            S = [x, y-1],
            W = [x-1,y],
            E = [x+1,y],
            NE = [x+1,y+1],
            NW = [x-1,y+1],
            SW = [x-1,y-1],
            SE = [x+1,y-1];

        var adjacencyList = [N, S, W, E, NE, NW, SW, SE];
        var validAdjacency = [];
        var posX, posY, direction;

        //iterate to see it is a valid
        for (var i = 0; i < adjacencyList.length; i++) {
            direction = adjacencyList[i];
            posX = direction[0];
            posY = direction[1];

            if (isValidTile(posX,posY)) {
                  validAdjacency.push(direction);
            }
        }
        return validAdjacency;
    }
}

export function countNearMines (adjList, mineList) {
    var numMines = 0;
    var posX, posY, direction;
    var mineX, mineY, mine;

    for (var i = 0; i < adjList.length; i++) {
        direction = adjList[i];
        posX = direction[0];
        posY = direction[1];

        if (isMine(posX, posY, mineList)) {
            numMines++;
        }

    }

    return numMines;
}

export function isMine(x, y, list) {
    var mineX, mineY;

    for (var i = 0; i < list.length; i++) {

        mineX = list[i][0];
        mineY = list[i][1];

        if (mineX == x && mineY == y) {
            return true;
        }
    }

    return false;
}
