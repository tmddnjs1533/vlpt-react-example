import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch)

    // useEffect(() => {
    //     console.log('user 값이 설정됨')
    //     console.log(user)
    //     return () => {
    //         console.log('user가 바뀌기 전...')
    //         console.log(user)
    //     }
    // },[user])
    //
    // useEffect(() => {
    //     console.log('아무튼 뭔가 바뀜')
    // })



    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id})
                }}
            >{user.username}</b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id: user.id })
            }}>삭제</button>
        </div>
    )
})



function UserList({ users }) {

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default React.memo(UserList);