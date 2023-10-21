"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

type CustomTableProps = {
  keyTitle: string;
  valueTitle: string;
  data: [string, number][];
};

const CustomTable = ({ keyTitle, valueTitle, data }: CustomTableProps) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>{keyTitle}</Th>
            <Th>{valueTitle}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(([key, value]) => (
            <Tr key={key}>
              <Td>{key}</Td>
              <Td>{value}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
