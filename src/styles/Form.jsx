export const form = (display='flex', gap='.5rem', margin='auto') => ({
    display,
    gap,
    margin,
})

export const col = (maxWidth='540px') => ({
    ...form('grid'),
    maxWidth,
})
export const row = (wrap=true) => ({
    ...form(),
    flexWrap: wrap ? "wrap" : "nowrap",
})
export const textArea = (rows='5rem', cols='10rem')=> ({
    minWidth: cols,
    minHeight: rows,
})