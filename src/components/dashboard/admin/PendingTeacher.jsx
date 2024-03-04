import { useMutation } from "react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";
import TableComponent from "@/components/Table";
import { Badge } from "@/components/ui/badge";

export function PendingTeacher({ teacherData, refetch, isLoading }) {
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
  const handleDeleteUser = (userId) => {
    return axiosInstance.delete(
      `/user/delete/${userId}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  const { mutate: verifyUser, isLoading: isVerifying } = useMutation(
    handleVerifyUser,
    {
      onSuccess: () => {
        toast.success("User Verified");
        refetch();
      },
      onError: (error) => {
        toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
      },
    }
  );
  const { mutate: deleteUser, isLoading: isDeleting } = useMutation(
    handleDeleteUser,
    {
      onSuccess: () => {
        toast.success("User Deleted");
        refetch();
      },
      onError: (error) => {
        toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
      },
    }
  );
  const Status = (rowData) => {
    return (
      <div>
        {rowData?.isOtpVerified ? (
          <Badge className="bg-green-200 text-green-700">Verified</Badge>
        ) : (
          <Badge className="bg-red-200 text-red-700">Unverified</Badge>
        )}
      </div>
    );
  };

  const tableHeader = [
    { label: "Full Name", accessorKey: "fullName" },
    { label: "Email", accessorKey: "email" },
    {
      label: "Status",
      accessorKey: "status",
      component: (data) => <Status rowData={data} />,
    },
  ];

  const actions = (param) => {
    console.log(param, "hello");
    return (
      <div className="flex flex-row gap-2 mt-2">
        <button
          className="bg-primaryColor-300 p-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-md"
          disabled={isVerifying}
          onClick={() => {
            verifyUser(param?._id);
          }}
        >
          Verify
        </button>
        <button
          className="bg-primaryColor-300 p-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-md"
          disabled={isDeleting}
          onClick={() => {
            deleteUser(param?._id);
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <TableComponent
      isLoading={isLoading}
      tableBody={teacherData}
      tableHeader={tableHeader}
      actions={actions}
    />
  );
}
