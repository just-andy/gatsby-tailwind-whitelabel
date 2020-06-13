import React from 'react'
import CardItem from '../elements/CardItem'

import services from '../../data/services'

const CardList = () => {
    return (
        <div className="flex flex-wrap my-8">
            {services.map((service, index) => {
                return (
                  <CardItem key={index} name={service.name} filename={service.filename} alt={service.name} text={service.text}  />
                )
            })}
        </div>
    )
}

export default CardList