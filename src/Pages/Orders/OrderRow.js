import React, { useEffect, useState } from 'react';

const OrderRow = ({ order,handleDelete,handleUpdate }) => {
    // console.group(order)
    const { serviceName, price, phone, email,_id, customer,service,status} = order;

    const [orderService,setOrderService] = useState({})

    useEffect(() =>{
        fetch(`https://genius-car-server-osfmg2fdu-kazee-siams-projects.vercel.app/service/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            { 
                            orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status? status: 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;