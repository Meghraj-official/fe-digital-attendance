"use client"
import Button from "@/components/common/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TeacherNavigations = () => {

  const pathName = usePathname();
  const isGenerateQrRoute = pathName.includes("/generate-qr")
  return (
 <>
{
  !isGenerateQrRoute &&  <Link href="/dashboard/teacher/generate-qr">
  <Button  className="text-white px-4 py-2" buttonText="Generate QR"  />
   </Link>
}
    </>

  );
};

export default TeacherNavigations;
