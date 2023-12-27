export const Video = ({
    original,
    fixed_height_downsampled,
    fixed_width_small,
    ...props
    }) => 
    <video autoPlay muted loop {...props}>
        <source src={original.mp4}/>
        <source src={fixed_height_downsampled.mp4}/>
        <source src={fixed_width_small.mp4}/>
    </video>

export const Image = ({fixed_height_downsampled,...props}) => 
    <img src={fixed_height_downsampled.url} {...props}/>