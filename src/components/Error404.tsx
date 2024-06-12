import ErrImg from './../assets/404.png'

function Error404(){
    return(
        <div>
            <h1>404 Not Found</h1>
            <p>お探しのページは見つかりませんでした。</p>
            <img width={800} src={ErrImg} alt="404 Not Found" />
        </div>
    )
}

export default Error404;