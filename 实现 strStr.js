// leetcode 28 description
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
// 如果不存在，则返回  -1。
// ETAG KMP
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var myStrStr = function(haystack, needle) {
    let len1 = haystack.length;
    let len2 = needle.length;
    if(!haystack.includes(needle)) return -1;
    if(len2 === 0) return 0;
    let index = 0;
    while(index + len2 <= len1) {
        if(haystack.slice(index, index+len2) === needle) return index;
        else {
            let pos = needle.split('').lastIndexOf(haystack[index+len2]);
            if(pos === -1) {
                index = index + len2 + 1;
            }else {

                index = index +  len2 - pos;
            }
        }
    }
    return -1;
};