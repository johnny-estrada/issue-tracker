import { UserCircleIcon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  ClockIcon,
  FolderIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ListBulletIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const lineChart = [
  {
    date: "Jul 6",
    created: 8,
    completed: 10,
  },
  {
    date: "Jul 8",
    created: 15,
    completed: 7,
  },
  {
    date: "Jul 10",
    created: 5,
    completed: 12,
  },
  {
    date: "Jul 12",
    created: 15,
    completed: 28,
  },
  {
    date: "Jul 14",
    created: 20,
    completed: 45,
  },
  {
    date: "Jul 16",
    created: 15,
    completed: 15,
  },
];

export const navigation = [
  { name: "Dashboard", href: "/", icon: Squares2X2Icon, current: true },
  {
    name: "Tasks",
    href: "/tasks",
    icon: ClipboardDocumentListIcon,
    current: true,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderIcon,
    current: true,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellIcon,
    count: "12",
    current: true,
    mobile: true,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Cog6ToothIcon,
    current: true,
    mobile: true,
  },
  // {
  //   name: "Customer support",
  //   href: "/test",
  //   icon: QuestionMarkCircleIcon,
  //   current: true,
  //   mobile: true,
  // },
];
export const mobileNavigation = [
  { name: "Dashboard", href: "/", icon: Squares2X2Icon, current: true },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderIcon,
    current: true,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: ClipboardDocumentListIcon,
    current: true,
  },
  {
    name: "Profile",
    href: "/settings",
    icon: UserCircleIcon,
    current: true,
  },
];

export const stats = [
  { name: "Hours this week", stat: "32", icon: ClockIcon },
  { name: "Project completed", stat: "78", icon: FolderIcon },
  { name: "Tasks due", stat: "32", icon: ClipboardDocumentCheckIcon },
  { name: "Assigned to me", stat: "42", icon: ListBulletIcon },
];
