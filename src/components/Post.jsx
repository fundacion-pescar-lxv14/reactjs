export const Post = ({
    title, 
    username, 
    images:{original:{webp, mp4}}
    }) => 
    <article>
        <video src={mp4}>
            <source src={webp} type="image/webp"/>
            <source src={mp4} type="video/mp4" />
        </video>
        <h3>{title}</h3>
        <p>{username}</p>
    </article>