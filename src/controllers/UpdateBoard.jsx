export const UpdateBoard = (arr, cx, cy, value) => 
    arr.map((row,ri) => row.map((cell,ci) => 
    ri === Number(cx) && ci === Number(cy) ? 
    value : cell 
))