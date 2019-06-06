import React from 'react';

const getYear = () => {
    const d = new Date();
    return d.getFullYear();
}

const user = {
    name : 'Ronit',
    surname : 'Chattopadhyay',
    age : 16
}

const Header = () => {
    return (
        <div>
            <div> First Name : {user.name}</div>
            <div> Last Name  : {user.surname}</div>
            <div> Age        : {user.age}</div>

            <div>
                Copy Right RC @ {getYear()}
            </div>
        </div>
    )
}

export default Header;