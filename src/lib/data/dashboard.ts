import {
  STUDENT_HOME_ROUTE,
  STUDENT_PROFILE_ROUTE,
  STUDENT_SETTINGS_ROUTE,
} from "@/routes/route";
import { HomeIcon, Settings, UserIcon } from "lucide-react";

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
    label: "Profile",
    pathName: STUDENT_PROFILE_ROUTE,
  },
  {
    id: 3,
    icon: Settings,
    label: "Settings",
    pathName: STUDENT_SETTINGS_ROUTE,
  },
];
