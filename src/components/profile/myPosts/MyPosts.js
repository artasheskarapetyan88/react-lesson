import React, {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import c from './MyPosts.module.css';
import Post from './posts/Post';
import {PostsSelectors, usePostsActions} from '../../../redux';
import {v4 as uuid} from 'uuid';
import axios from "axios";

function MyPosts() {
    let title = "Not found"
    const [validText, setValidText] = useState(false);
    const [sum, setSum] = useState(0);
    const postData = useSelector(PostsSelectors.getPostsList);
    const {setAddPost, removeAllPosts} = usePostsActions();
    let postsElements = postData.map((item) => (
        <Post key={item.id} message={item.message} count={item.likeCount} id={item.id}/>
    ));
    let newPostElement = React.createRef();
    const onAddPost = () => {
        setValidText(!newPostElement.current.value);
        if (newPostElement.current.value) {
            setAddPost({
                id: uuid(),
                message: newPostElement.current.value,
                likeCount: 0
            });
            newPostElement.current.value = '';
        }
    };
    const handelRemoveAll = () => {
        removeAllPosts([]);
    };
    useEffect(() => {
        setSum(postData.length);
    }, [postData]);

    const efsfs = async () => {

        try {
            const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users")
        } catch (err) {
            console.log(err, 777)
        }

    }

  useEffect(() => {
      efsfs();
  }, []);

    if (sum < 5 && sum !== 0) {
        title = "few"
    } else {
        title = "lava"
    }

    return (
        <div className={c.MyPosts}>
            <div className={c.myPostBlok}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={newPostElement?.current?.value}/>
                        {validText ? <span>warning</span> : null}
                    </div>
                    <span>{title}</span>

                    <div>
                        <button onClick={onAddPost}>Add Post</button>
                        <button onClick={handelRemoveAll}>Remove All Postsnpm start</button>
                    </div>
                </div>
            </div>
            <div className={c.Posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;
