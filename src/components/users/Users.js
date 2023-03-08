import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {UsersSelectors,useUsersInfoActions} from "../../redux";
import style from "./users.module.css"
import {useState} from "react";
import axios from "axios";

const Users = () => {
    const {addresUpdate,setUsers} = useUsersInfoActions()
    const users = useSelector(UsersSelectors.getUsersInfo);
    const [inputIsOpen,setInputIsOpen] = useState("")
    const [text,setText] = useState("")

    const getUsers = async() =>{
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(data)
        }catch (e){
            alert("texi e unecel sxal")
        }



    }
    useEffect(() =>{
        getUsers()
    },[])
  const  openInput = (id,address) =>{
      setInputIsOpen(id)
      setText(address)
  }
  const handelChange = (e) => {
    setText(e.target.value)
  }

  const addressUpdate = ()=>{
        if (!text){
            return
        }
      const data = users.map(item =>{
          if(inputIsOpen === item.id){
              item.address.street = text
          }
          return item
      })
      addresUpdate(data)
      setInputIsOpen("")
  }

    return (
        <div className={style.wrapper}>
            {users.map(({name, username, address, email,id}) => (
                <div key={id} className={style.card}>
                    {/*<img src={img ? img : "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"}/>*/}
                    <h1>{name} {username}</h1>
                    <div>
                    <p className={style.title}>{address.street}</p>
                        {inputIsOpen === id ?<div>
                             <input defaultValue={text} onChange={handelChange}/>
                                {!text ? <p className={style.errore}>Addres field is recuared</p>:null}
                            <button onClick={addressUpdate}>Change</button>
                        </div>:<button onClick={() => openInput(id,address.street)}>edit</button> }


                    </div>
                    <p>{email}</p>

                    <p>
                        <button>Contact</button>
                    </p>
                </div>
            ))}
        </div>

    );
}

export default Users;