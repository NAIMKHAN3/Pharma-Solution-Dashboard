import React from 'react';
import { useGetCustomersQuery } from '../app/features/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {MdDelete} from "react-icons/md"
import { removeUser, setUsers } from '../app/features/customers/customersSlice';

const Customers = () => {

    const users = useSelector(state => state.customers.users)

    console.log(users)
    const dispatch = useDispatch()


    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <div>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Company</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(({ id, name, email, address, username, phone, website, company }) => <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{address?.city}</td>
                            <td>{phone}</td>
                            <td>{company.name}</td>
                            <td>{website}</td>
                            <td onClick={()=> {deleteUser(id)}}> <MdDelete className='mx-auto text-red-500 cursor-pointer' size={30}></MdDelete> </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Customers;