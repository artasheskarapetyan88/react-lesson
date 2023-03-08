import React, {useState, useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios";
import s from "./styles.module.css"
import style from "../../Users-list-hw.module.css";



function UserPosts() {
    const navigator = useNavigate()
    const [posts, setPosts] = useState([])
    const {userId} = useParams();
    const getPosts = async () => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        setPosts(data)
    }
    useEffect(() => {
        getPosts()

    }, [userId])

    return (
        <>
            <h2 className={style.header}>User Posts</h2>
            <div className={s.cardWrapper}>
                {
                    posts.map(({id,title, body}) => {
                        return (
                            <div className={s.card}>
                                <h3>{title}</h3>
                                <p>{body}</p>
                                <button onClick={()=>{
                                navigator(`/postComments/${id}`)
                                }
                                }>Coments</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default UserPosts;
