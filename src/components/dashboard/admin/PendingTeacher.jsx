import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Verified",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Verified",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Verified",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Pending",
  },
  {
    name: "Meghraj Giri",
    email: "meghraj56@gmail.com",
    status: "Verified",
  },
];

export function PendingTeacher() {
  return (
    <Table>
      {/* <TableCaption className="caption-top h-8 font-semibold  items-center ">
        List of Pending Teachers
      </TableCaption> */}
      <TableHeader className="bg-primaryColor-300 z-0 ">
        <TableRow className="">
          <TableHead className="text-center">Full Name</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" ">
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.id}
            className="border-b border-primaryColor-200"
          >
            <TableCell className="font-medium ">{invoice.name}</TableCell>

            <TableCell>{invoice.email}</TableCell>
            <TableCell>
              {invoice.status === "Verified" ? (
                <Badge className="bg-green-200 text-primaryColor-800">
                  {invoice.status}
                </Badge>
              ) : (
                <Badge className="bg-red-200 text-primaryColor-800">
                  {invoice.status}
                </Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
