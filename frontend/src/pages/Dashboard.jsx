



import { useSelector } from 'react-redux'




import React from 'react'


const Dashboard = () => {

    const { userInfo } = useSelector((state) => state.auth)


    return (
        <div>
            <h1>Welcome, {userInfo.first_name} </h1>
        </div>
    )
}

export default Dashboard