import React from 'react';
import Card from './Card';

const CardList = ({dogs}) => {
    const CardComponent = dogs.map((user,i) => {
        return (<Card id={dogs[i].id} name={dogs[i].name} email={dogs[i].email}/>
    );
        })
    return (
        <div>
        {CardComponent}
        </div>
    );
}

export default CardList;