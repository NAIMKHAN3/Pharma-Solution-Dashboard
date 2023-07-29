import React from 'react';
import { useGetCustomersQuery } from '../app/features/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {MdDelete} from "react-icons/md"
import { removeUser, setUsers } from '../app/features/customers/customersSlice';
import { toast } from 'react-hot-toast';

const Customers = () => {

    const users = useSelector(state => state.customers.users)

    console.log(users)
    const dispatch = useDispatch()


    const deleteUser = (id) => {
        dispatch(removeUser(id))
        toast.success("User Deleted Successfully")
    }

    return (
        <div className=' bg-white p-5 m-5 rounded-xl overflow-scroll text-[#424e79]'>
            <table class="table-auto ">
                <thead>
                    <tr>
                        <th  className='p-2 border'>Id</th>
                        <th  className='p-2 border'>Name</th>
                        <th  className='p-2 border'>User Name</th>
                        <th  className='p-2 border'>Email</th>
                        <th  className='p-2 border'>Phone</th>
                        <th  className='p-2 border'>Address</th>
                        <th  className='p-2 border'>Company</th>
                        <th  className='p-2 border'>Website</th>
                        <th  className='p-2 border'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(({ id, name, email, address, username, phone, website, company }, i) => <tr key={id} className={`${id % 2 === 1 ? "bg-white" : "bg-green-50"}`}>
                            <td className="p-2 border">{id}</td>
                            <td className="p-2 border">{name}</td>
                            <td className="p-2 border">{username}</td>
                            <td className="p-2 border">{email}</td>
                            <td className="p-2 border">{phone}</td>
                            <td className="p-2 border">{address?.city}</td>
                            <td className="p-2 border">{company.name}</td>
                            <td className="p-2 border">{website}</td>
                            <td className="p-2 border" onClick={()=> {deleteUser(id)}}> <MdDelete className='mx-auto text-red-500 cursor-pointer' size={30}></MdDelete> </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Customers;