import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import prices from "../../data/simpleprices"

const Table = styled.table`
  ${tw`table-fixed`}
`

const SimplePricelist = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Treatment</th>
          <th className="w-1/4 px-4 py-2">Price</th>
          <th className="w-1/4 px-4 py-2">Time</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((item, index) => {
          return (
            <tr key={index}>
              <td className="border px-4 py-2">{item.treatment}</td>
              <td className="border px-4 py-2">&pound; {item.price}</td>
              <td className="border px-4 py-2">{item.time} minutes</td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="text-gray text-center py-4">
            {" "}
            Terms and conditions
          </td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default SimplePricelist
