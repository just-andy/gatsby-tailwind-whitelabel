import React from 'react'
import prices from "../../data/simpleprices"


const ResponsivePricelist = () => {
    return (
    <div className="Rtable Rtable--collapse">
        {/** Header **/}
         <div className="Rtable-row Rtable-row--head">
          <div className="Rtable-cell treatment-cell column-heading">Treatment</div>
          <div className="Rtable-cell time-cell column-heading">Time</div>
          <div className="Rtable-cell price-cell column-heading">Price</div>
        </div>
      {/** Row **/}
      {prices.map((item, index) => {

        const rowStyle = (i) => {
         return (i % 2) ? "Rtable-row" : "Rtable-row is-striped";
        }

        return (
        <div key={index} className={rowStyle(index)}>
          <div className="Rtable-cell treatment-cell">
            <div className="Rtable-cell--heading">Treatment</div>
            <div className="Rtable-cell--content">{item.treatment}</div>
          </div>
          <div className="Rtable-cell time-cell">
            <div className="Rtable-cell--heading">Time</div>
            <div className="Rtable-cell--content">{item.time} mins</div>
          </div>
          <div className="Rtable-cell price-cell">
            <div className="Rtable-cell--heading">Price</div>
            <div className="Rtable-cell--content">&pound; {item.price}</div>
          </div>
        </div>
        )})}
      {/** Row */}
      <div className="Rtable-cell text-center text-gray-600">
          Some treatements require a 24 hour patch test
      </div>
    </div>
    )
}

export default ResponsivePricelist