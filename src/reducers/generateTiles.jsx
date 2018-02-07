import _ from 'lodash';
import underscore from 'underscore';
import * as util from '../../helper/helper.js';

export default function generateTiles(data) {
    let [boardSizeX, boardSizeY, mineQuantity]  = data;
    boardSizeX = parseInt(boardSizeX)
    boardSizeY = parseInt(boardSizeY)
    mineQuantity = parseInt(mineQuantity)
    // console.log("dimension",boardSizeX, boardSizeY, mineQuantity)
    // create X by Y object with format of
    // { id: 1, pos: [0,0], isClicked: 0, isFlagged, 0, isMine: 1, adjency: [[0,1],[1,0],[1,1]], getMineNums:5, uiState:'default' }

    const f = (a,b) => [].concat(...a.map((x) => b.map((y) => [].concat(x,y))));
    const getValidAdjacencyList = util.getValidList(boardSizeX, boardSizeY);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const objectKeys = [ 'id', 'pos', 'isClicked', 'isFlagged', 'isMine', 'adjency', 'getMineNums', 'uiState' ];
    const tileLists = [];

    const id = _.range(boardSizeX * boardSizeY);
    const x =  _.range(boardSizeX);
    const y = _.range(boardSizeY);

    const pos = f(x,y);
    const isClicked = Array(boardSizeX * boardSizeY).fill(0);
    const isFlagged = Array(boardSizeX * boardSizeY).fill(0);
    const uiState = Array(boardSizeX * boardSizeY).fill('default');

    // sampling without replacement in order to generate *unique* Z counts of random indexes
    const randIndex = _.sampleSize(id, mineQuantity);
    const isMine = Array(boardSizeX * boardSizeY).fill(0).map((el,index) => (randIndex.includes(index)? 1 : 0));
    const adjency = pos.map(([a,b]) => getValidAdjacencyList(a,b));

    // console.log("id", id);
    // console.log("x", x);
    // console.log("y", y);
    // console.log("pos", pos);
    // console.log("adjency", adjency);

    // convert adjency positions and map them into boolean isMine
    const convertPtoN = adjency.map((list) => list.map(([x,y]) => randIndex.includes((x*boardSizeY)+(y))? 1 : 0));
    const getMineNums = convertPtoN.map((arr) => (arr.reduce(reducer)));

    const tileArrays = _.zip(id, pos, isClicked, isFlagged, isMine, adjency, getMineNums, uiState);
    tileArrays.forEach((item) => tileLists.push(underscore.object(objectKeys, item)));

    // console.log("ranindex", randIndex);
    // console.log("isMine", isMine);
    // console.log("isMine total sums");
    // console.log("adjency", adjency);
    // console.log("convertPtoN", convertPtoN);
    // console.log("getMineNums", getMineNums);
    // console.log('tielarrays generated', tileArrays);
    return tileLists
}
