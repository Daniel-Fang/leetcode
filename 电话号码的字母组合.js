// leetcode 17 description
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let arr = [];
    let result = [];
    let len = digits.length;
    if(len === 0) return [];
    for(let i=0; i<len; i++) {
        let cur = digits.charAt(i);
        arr.push(map[+cur]);
    }
    if(len === 1) return arr[0].split('');
    let j=0;
    while(arr.length >= 2) {
        arr.splice(0, 2, help(arr[j], arr[j+1]));
    }

    return arr[0];
};

function help(str1, str2) {
    let result = [];
    for(let i=0; i<str1.length; i++) {
        for(let j=0; j<str2.length; j++) {
            result.push(str1[i]+str2[j]);
        }
    }
    return result;
}