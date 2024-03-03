import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useMutation } from "react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";

export function PendingTeacher({ teacherData, refetch }) {
  const { token } = useAuthStore();
  const handleVerifyUser = (userId) => {
    return axiosInstance.patch(
      `/user/verify-user/${userId}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  const { mutate: verifyUser } = useMutation(handleVerifyUser, {
    onSuccess: () => {
      toast.success("User Verified");
      refetch();
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });
  return (
    <Table>
      <TableHeader className="bg-primaryColor-300 z-0  ">
        <TableRow className="">
          <TableHead className="text-center">Full Name</TableHead>
          <TableHead className="text-center">Email </TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" ">
        {teacherData?.length === 0 ? (
          "No pending data.."
        ) : (
          <>
            {teacherData?.map((teacher) => {
              const { email, fullName, status } = teacher;
              return (
                <TableRow
                  key={teacher._id}
                  className="border-b border-primaryColor-200"
                >
                  <TableCell className="font-medium ">{fullName}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>
                    {status === "UNVERIFIED" ? (
                      <Badge className="bg-red-200 text-primaryColor-800">
                        {status}
                      </Badge>
                    ) : (
                      <Badge className="bg-green-200 text-primaryColor-800">
                        {status}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex  w-full justify-center gap-2">
                    <button
                      onClick={() => {
                        verifyUser(teacher._id);
                      }}
                    >
                      Verify{" "}
                    </button>
                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              );
            })}{" "}
          </>
        )}
      </TableBody>
    </Table>
  );
}
