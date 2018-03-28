import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return (
        <div>
            { 
                robots.map(person => {
                    return (
                        <Card key={ person.id } 
                            id={ person.id } 
                            name={ person.name } 
                            email={ person.email } 
                            picture={ person.picture } 
                        />
                    )
                })
            }
        </div>    
    )
};

export default CardList;
