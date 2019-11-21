import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import prices from "../../data/simpleprices"

const Table = styled.table`
  ${tw`mt-4`}
  width: 100%;
`

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  &:nth-child(even) {
    background-color: #efefef;
  }
`

const TableCell = styled.td`
  ${tw`p-2 md:p-4`}
`

const SimplePricelist = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="w-1/2 text-left">Treatment</th>
          <th className="w-1/4 text-left">Price</th>
          <th className="w-1/4 text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{item.treatment}</TableCell>
              <TableCell>&pound; {item.price}</TableCell>
              <TableCell>{item.time} mins</TableCell>
            </TableRow>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="text-center py-4">
            Terms and conditions
          </td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default SimplePricelist
