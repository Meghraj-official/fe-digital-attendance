import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PropTypes from "prop-types";
import TableSkeleton from "../common/TableSkeleton";

const TableComponent = (props) => {
  const { tableHeader, tableBody, actions, isLoading } = props;

  const tableRef = useRef(null);

  const [tableHeight, setTableHeight] = useState("0");

  useEffect(() => {
    const calculateTableHeight = () => {
      if (tableRef.current) {
        const screenHeight = window.innerHeight;
        const offsetAboveTable = tableRef.current.getBoundingClientRect().top;
        const remainingHeight = screenHeight - offsetAboveTable;

        setTableHeight(`${remainingHeight - 60}` + "px");
      }
    };

    // Call the function once when the component mounts
    calculateTableHeight();
  }, []);

  return (
    <>
      <div
        ref={tableRef}
        style={{ maxHeight: tableHeight, minHeight: tableHeight }}
        className={`overflow-y-auto border border-gray-300 scrollbar relative overflow-x-auto`}
      >
        <Table>
          <TableHeader className="bg-primaryColor-300 w-full sticky -top-1">
            <TableRow>
              {tableHeader.map((header, index) => (
                <TableHead
                  key={index}
                  className={`text-left flex-nowrap min-w-[200px]`}
                >
                  {header.label}
                </TableHead>
              ))}
              {/* {status && <TableHead className="text-left">Status</TableHead>} */}
              {actions && <TableHead className="text-left">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          {isLoading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={5}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {!tableBody || tableBody.length === 0 ? (
                <>
                  <TableRow>
                    <TableCell colSpan={5} rowSpan={5}>
                      No Data Found
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                <>
                  {tableBody?.map((body) => (
                    <TableRow key={body._id}>
                      {tableHeader?.map((row, index) => (
                        <TableCell
                          key={index}
                          className="text-left flex-nowrap min-w-fit"
                        >
                          {row?.component
                            ? row?.component(body)
                            : body?.[row?.accessorKey]}
                        </TableCell>
                      ))}
                      {/* {status && status(body)} */}
                      {actions && actions(body)}
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
};

TableComponent.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.object),
  tableBody: PropTypes.array,

  actions: PropTypes.node,
};

export default TableComponent;
