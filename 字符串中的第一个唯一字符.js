// leetcode 387 description
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。
// 如果不存在，则返回 -1。
// ETAG hashmap
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         let cur = s.charAt(i);
//         if (s.indexOf(cur) === s.lastIndexOf(cur)) {
//             return i;
//         }
//     }
//     return -1;
// };


var firstUniqChar = function(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        let cur = s.charAt(i);
        if (hash[cur] === undefined) {
            hash[cur] = true;
        } else {
            hash[cur] = false;
        }
    }

    for (let j = 0; j < s.length; j++) {
        let cur = s.charAt(j);
        if (hash[cur]) {
            return j;
        }
    }

    return -1;
}