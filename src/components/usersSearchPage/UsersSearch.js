import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {PostsSearchSelectors, usePostsSearchActions} from "../../redux"
import style from "./UsersSearch.module.css"

const PAGE_SIZE = 10;
const CURRENT_PAGE = 1
const UsersSearch = () => {
    const {setPosts} = usePostsSearchActions()
    const posts = useSelector(PostsSearchSelectors.getPosts)
    const [page, setPage] = useState(CURRENT_PAGE)
    const [search, setSearch] = useState("")
    const paginationCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const getPostsList = async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_count=${PAGE_SIZE}&title_like=${search}`)
        setPosts(data.data)
    }
    useEffect(() => {
        getPostsList()
    }, [page, search])
    const handleChange = (event) => {
        if (page > 1) {
            setPage(CURRENT_PAGE)

        }
        setSearch(event.target.value)
    }

    const handleClick = (page) => {
        setPage(page)
    }


    return (
        <div className={style.wrapper}>
            <h2>Users Table</h2>
            <div className={style.searchWrapper}>
                <input onChange={handleChange}/>
            </div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Desctyption</th>
                </tr>
                {posts.map(({body, title}) => {
                    return (
                        <tr>
                            <td>{title}</td>
                            <td>{body}</td>
                        </tr>
                    )
                })}


            </table>

            <div className={style.pagination}>
                <a href="#">&laquo;</a>

                {paginationCount.map(item => {
                    return (
                        <a href="#" onClick={() => handleClick(item)} className={item === page && style.active}>{item}</a>

                    )
                })}
            </div>
        </div>
    )
}
export default UsersSearch