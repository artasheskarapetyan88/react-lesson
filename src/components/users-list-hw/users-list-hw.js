import React, {useEffect, useState} from "react";
import style from "./Users-list-hw.module.css"
import axios from "axios";
import {useFbUsersActions, FbUsersSelectors} from "../../redux"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";

const LIMIT = 10;
const UsersListHw = () => {
    const navigator = useNavigate();
    const {setFbUsers} = useFbUsersActions()
    const users = useSelector(FbUsersSelectors.getFbUsers)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const usersData = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setFbUsers(data)
    }

    useEffect(() => {
        usersData()
    }, [])
    const getUsersWithPagination = async () => {
        const {data} = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${LIMIT}`)
        setTotalCount(data.totalCount)
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true)
        getUsersWithPagination();
    }, [page, LIMIT])

    const renderPagination = () => {
        return (
            <>
                <span style={{margin: "12px", cursor: "pointer"}} onClick={() => {
                    setPage(1)
                }}>{1}</span>
                <span style={{margin: "12px", cursor: "pointer"}} onClick={() => {
                    setPage(2)
                }}>{2}</span>
                <span style={{margin: "12px", cursor: "pointer"}} onClick={() => {
                    setPage(3)
                }}>{3}</span>
                <span style={{margin: "12px", cursor: "pointer"}} onClick={() => {
                    setPage(4)
                }}>{4}</span>
                <span style={{margin: "12px", cursor: "pointer"}} onClick={() => {
                    setPage(5)
                }}>{5}</span>
            </>
        )
    }

    return (
        <>
            <div>
                {renderPagination()}
            </div>
            {loading && <div className={style.loader}></div> }
            <h2 className={style.header}>User Profile Card</h2>
            <div className={style.cardWrapper}>
                {!loading && users.map(({id, name, username, email, phone, address, website}) => (
                    <div className={style.card}>
                        <img
                            src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"/>
                        <h3>{name}</h3>
                        <h3> {username}</h3>
                        <p className={style.title}>{address.street}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{website}</p>
                        <button onClick={() => {
                            navigator(`/userPosts/${id}`)
                        }}>posts
                        </button>
                    </div>
                ))
                }
            </div>
        </>

    );

}


export default UsersListHw;