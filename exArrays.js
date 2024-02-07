'use strict';

const juliaData1 = [3, 4, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const testData1 = [juliaData1, kateData1];
const testData2 = [juliaData2, kateData2];

const juliaData1Copy = [...juliaData1];
juliaData1Copy.splice(1, -2);
console.log(juliaData1Copy);