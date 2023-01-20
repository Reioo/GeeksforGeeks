/* PSEUDO CODE
Declare variable that stores sum of array elements
Loop through given array
Check if first number is equal to needed sum
Add frist two elements and check sum:
    if sums are equal:
        get indexes of sum elements (element + 1)
        return those indexes
    else if: given sum is smaller than sum from array elements
        move on to second element and repeat previous steps
If there's no such sum return - 1
*/

function subarraySum(arr, n, s) {
    let result = [];
    let trySum = 0;
    for (let i = 0; i < n; i++) {
        console.log('arr[i] ' + arr[i]);
        if (arr[i] == s) {
            return i + 1;
        } else if (arr[i] > s) {
            continue;
        } else {
            trySum += arr[i];
            if (i + 1 != n) {
                for (let j = i + 1; j < n; j++) {
                    trySum += arr[j];
                    console.log('trySum: ' + trySum);
                    if (trySum == s) {
                        result[0] = i + 1;
                        result[1] = j + 1;
                        return result;
                    } else if (trySum > s) {
                        break;
                    } else {
                        continue;
                    }
                }
                trySum = 0; //Reset sum to go on to next first index
            }
        }
    }
    return -1;
}
const A = [1,2,3,7,5];
const N = A.length;
const S = 12;

console.log(subarraySum(A, N, S));