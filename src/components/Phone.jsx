import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    const {id, name,price,description,image} = phone;
    return (
        <div>
            <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
        </tr>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{description}</td>
            <td><img src={image} alt="iPhone 11" width="100"/></td>
        </tr>
    </table>
        </div>
    );
};

export default Phone;