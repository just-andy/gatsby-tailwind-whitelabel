import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import prices from "../../data/simpleprices"


const TableRow = styled.tr`
${tw`border-solid border-b-1 border-gray-300`}

  &:nth-child(even) {
    ${tw`bg-primary-100`}
  }
`

const SimplePricelist = () => {
  return (
    <table className=" mx-auto border-solid border-1 border-gray-300 w-full lg:w-10/12 lg:my-8 ">
      <thead className="bg-primary-300 border-solid border-b-1 border-gray-300">
        <tr>
          <th className="w-1/2 p-2 md:p-3 text-left">Treatment</th>
          <th className="w-1/4 p-2 md:p-3 text-left">Price</th>
          <th className="w-1/4 p-2 md:p-3 text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((item, index) => {
          return (
            <TableRow key={index}>
              <td className="p-2 md:p-4">{item.treatment}</td>
              <td className="p-2 md:p-4">&pound; {item.price}</td>
              <td className="p-2 md:p-4">{item.time} mins</td>
            </TableRow>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="text-center text-gray-600 p-4">
            <b>Note:</b> Some of our skin treatments require a 24 hour patch test.
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default SimplePricelist
