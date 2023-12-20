export const check=(ref,arr) => 
    ref !== "" && arr?.every(item => item === ref)
    
export const GetWinner = (arr) => {
    for (let n = 0; n < arr.length; n++) {
        const rows = check(arr[n][0], arr[n])
        const cols = check(arr[0][n], arr.map(row => row[n]))
        const d1 = check(arr[0][0], arr.map((row, i) => row[i]))
        const d2 = check(arr[0][arr[0].length - 1], arr.map((row, i) => row[arr[0].length-(i+1)]))
        return rows || cols || d1 || d2
    }
}