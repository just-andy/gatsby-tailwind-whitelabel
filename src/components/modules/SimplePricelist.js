import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import prices from "../../data/simpleprices"

const Table = styled.table`
  ${tw` mx-auto border-solid border-1 border-gray-300 w-full lg:w-10/12 lg:my-8 `}
`

const TableRow = styled.tr`
${tw`border-solid border-b-1 border-gray-300`}

  &:nth-child(even) {
    ${tw`bg-primary-100`}
  }
`

const TableHead = styled.thead`
  ${tw`bg-primary-300 border-solid border-b-1 border-gray-300`}
`

const TableCell = styled.td`
  ${tw`p-2 md:p-4`}
`

const SimplePricelist = () => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th className="w-1/2 p-2 md:p-3 text-left">Treatment</th>
          <th className="w-1/4 p-2 md:p-3 text-left">Price</th>
          <th className="w-1/4 p-2 md:p-3 text-left">Time</th>
        </tr>
      </TableHead>
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
          <td colSpan="3" className="text-center text-gray-600 p-4">
            <b>Note:</b> Some of our skin treatments require a 24 hour patch test.
          </td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default SimplePricelist
