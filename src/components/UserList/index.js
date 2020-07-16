import React, {useState} from 'react';
import update from 'immutability-helper';
import { NavLink } from 'react-router-dom';


function UserList(){
    
    const users = [
        '0',
        '1',
        '2',
        '3',
        '4'
      ]; 
      const [usersList, setList] = useState(users);
      const list = () => {
        const pushList = update(usersList);
        setList(pushList);
      }
      // console.log(usersList);
    return (
        <ul>
        {usersList.map((val, key) => (
            <li value={key} className=""><NavLink to={val}>key is -{key}, val is -{val}</NavLink></li>
        ))}
        </ul>

    )
};
export default UserList;
