import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user,logOut } = useContext(AuthContext)
    // console.log(user)
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch(`https://genius-car-server-osfmg2fdu-kazee-siams-projects.vercel.app/orders?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logOut()
                }
              return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email,logOut])


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this order')
        if (proceed) {
            fetch(`https://genius-car-server-osfmg2fdu-kazee-siams-projects.vercel.app/orders/${id}`, {
                method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('genius-token')}`
                    }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){
                        alert('deleted succesfully')
                        const restOrders = orders.filter(order => order._id !== id)
                        setOrders(restOrders)
                    }

                })
        }
    }

    const handleUpdate = (id) =>{
        fetch(`https://genius-car-server-osfmg2fdu-kazee-siams-projects.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body:JSON.stringify({status:'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = orders.filter(order => order._id !== id)
                const approving = orders.find(order => order._id === id)
                approving.status = 'Approved'
                const newOrders = [approving, ...remaining]
                setOrders(newOrders)
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow handleUpdate={handleUpdate} handleDelete={handleDelete} order={order} key={order._id}></OrderRow>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default Orders;