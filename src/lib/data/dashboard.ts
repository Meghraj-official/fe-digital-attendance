import {
  ADMIN_ASSIGN_SUBJECT_ROUTE,
  ADMIN_COURSE_ROUTE,
  ADMIN_HOME_ROUTE,
  ADMIN_PENDINGUSERS_ROUTE,
  ADMIN_SUBJECT_ROUTE,
  STUDENT_HOME_ROUTE,
  STUDENT_PROFILE_ROUTE,
  STUDENT_SETTINGS_ROUTE,
  TEACHER_ATTENDANCE_LIST_ROUTE,
  TEACHER_HOME_ROUTE,
  TEACHER_MANUAL_ATTENDANCE_ROUTE,
} from "@/routes/route";
import {
  HomeIcon,
  Settings,
  UserIcon,
  BookOpenText,
  BookMarked,
} from "lucide-react";

export const studentNavigation = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    pathName: STUDENT_HOME_ROUTE,
  },
  {
    id: 2,
    icon: UserIcon,
    label: "Attendance List",
    pathName: STUDENT_PROFILE_ROUTE,
  },
];
export const teacherNavigation = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    pathName: TEACHER_HOME_ROUTE,
  },
  {
    id: 2,
    icon: UserIcon,
    label: "Attendance List",
    pathName: TEACHER_ATTENDANCE_LIST_ROUTE,
  },
  {
    id: 3,
    icon: UserIcon,
    label: "Manual Attendance",
    pathName: TEACHER_MANUAL_ATTENDANCE_ROUTE,
  },
];

export const adminNavigation = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    pathName: ADMIN_HOME_ROUTE,
  },
  {
    id: 2,
    icon: UserIcon,
    label: "Pending Users",
    pathName: ADMIN_PENDINGUSERS_ROUTE,
  },
  {
    id: 3,
    icon: BookMarked,
    label: "Course",
    pathName: ADMIN_COURSE_ROUTE,
  },
  {
    id: 4,
    icon: BookOpenText,
    label: "Subject",
    pathName: ADMIN_SUBJECT_ROUTE,
  },
  {
    id: 5,
    icon: HomeIcon,
    label: "Assign Subjects",
    pathName: ADMIN_ASSIGN_SUBJECT_ROUTE,
  },
];
