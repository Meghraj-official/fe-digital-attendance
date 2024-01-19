import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    name: "Binod Khatri",
    id: "1",
  },
  {
    name: "Binod Khatri",
    id: "2",
  },
  {
    name: "Binod Khatri",
    id: "3",
  },
  {
    name: "Binod Khatri",
    id: "4",
  },
  {
    name: "Binod Khatri",
    id: "5",
  },
  {
    name: "Binod Khatri",
    id: "6",
  },
  {
    name: "Binod Khatri",
    id: "7",
  },
  {
    name: "Binod Khatri",
    id: "8",
  },
  {
    name: "Binod Khatri",
    id: "9",
  },
  {
    name: "Binod Khatri",
    id: "10",
  },
  {
    name: "Binod Khatri",
    id: "11",
  },
];

export function SubjectTable() {
  return (
    <Table className="">
      <TableHeader className="bg-primaryColor-300 z-0 ">
        <TableRow className="flex  mt-5 flex-row justify-between items-center">
          <TableHead className="text-center">Subject Name</TableHead>
          <TableHead className="text-center">Subject ID </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="flex w-full justify-around flex-col ">
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.id}
            className="border-b border-primaryColor-200 flex justify-between"
          >
            <TableCell className="font-medium ">{invoice.name}</TableCell>

            <TableCell>{invoice.id} </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
