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
        } else if (i + 1 == n && arr[i] != s) {
            return -1;
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
const A = [142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89, 107, 41, 
    143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132, 109, 
    145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 
    125, 73, 71, 30, 178, 174, 98, 113];
const N = A.length;
const S = 665;

console.log(subarraySum(A, N, S));
//TEST BUG