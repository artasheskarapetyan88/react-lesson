import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

function PostComents() {
    const [comments, setComments] = useState([])
    const [currentPost, setCurrentPost] = useState({})
    const {postId} = useParams()
    const getComments = async () => {
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        setCurrentPost(post.data)
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        setComments(data)
    }
    useEffect(() => {
        getComments()
    }, [postId])

    return (
        <div>
            <h3>{currentPost.title}</h3>
            <p>{currentPost.body}</p>
            <ul>

                {
                    comments.map(({body, id}) => {
                        return (
                            <li key={id}>
                                {body}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PostComents