import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    name: "Meghraj Giri",
    id: "25139",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25140",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25141",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25142",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25143",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25144",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25145",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25146",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25147",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25148",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
  {
    name: "Meghraj Giri",
    id: "25149",
    email: "meghraj56@gmail.com",
    phoneno: "9820832843",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption className="caption-top h-8 font-semibold  items-center">
        List of Students
      </TableCaption>
      <TableHeader className="bg-primaryColor-300 z-0 ">
        <TableRow className="">
          <TableHead className="text-center">Students</TableHead>
          <TableHead className="text-center">ID</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-right">Phone Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" ">
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.id}
            className="border-b border-primaryColor-200"
          >
            <TableCell className="font-medium ">{invoice.name}</TableCell>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell className="text-right">{invoice.phoneno}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
