import {
  BellIcon,
  ClockIcon,
  FolderIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ListBulletIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export const lineChartData = [
  {
    name: "Jul 6",
    uv: 8,
    pv: 10,
    amt: 10,
  },
  {
    name: "Jul 8",
    uv: 15,
    pv: 7,
    amt: 20,
  },
  {
    name: "Jul 10",
    uv: 5,
    pv: 12,
    amt: 30,
  },
  {
    name: "Jul 12",
    uv: 15,
    pv: 28,
    amt: 40,
  },
  {
    name: "Jul 14",
    uv: 20,
    pv: 45,
    amt: 50,
  },
  {
    name: "Jul 16",
    uv: 15,
    pv: 15,
    amt: 60,
  },
];

export const barChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const users = [
  {
    firstName: "Johnny",
    lastName: "Estrada",
    title: "Admin",
    role: "Admin",
    email: "user@email.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isLoggedIn: false,
  },
];

export const pageData = [
  {
    pageTitle: "Dashboard",
    isLoggedIn: false,
  },
];

export const navigation = [
  { name: "Dashboard", href: "/", icon: Squares2X2Icon, current: true },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderIcon,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellIcon,
    count: "12",
    current: false,
    mobile: true,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Cog6ToothIcon,
    current: false,
    mobile: true,
  },
];

export const stats = [
  { name: "Hours this week", stat: "32", icon: ClockIcon },
  { name: "Project completed", stat: "78%", icon: FolderIcon },
  { name: "Tasks due", stat: "32%", icon: ClipboardDocumentCheckIcon },
  { name: "Assigned to me", stat: "42", icon: ListBulletIcon },
];

export const projects = [
  {
    id: 1,
    title: "Project for Luminous Group",
    description:
      "Somethig about the projecmt somehgih abou the projhe som erphawj projegt",
    client: "Luminous Group",
    startDate: "Jan 21",
    targetDate: "Oct 20",
    members: [],
    hoursThisWeek: 32,
    priority: ["low", "medium", "high"],
    tasks: 12,
    overdue: 4,
    status: ["active", "closed", "on hold"],
    isActive: true,
  },
  {
    id: 2,
    title: "Burger King Project",
    description:
      "Somethig about the projecmt somehgih abou the projhe som erphawj projegt",
    client: "Burger King Corp.",
    startDate: "Jul 17",
    targetDate: "Sep 24",
    members: [],
    hoursThisWeek: 32,
    priority: ["low", "medium", "high"],
    tasks: 12,
    overdue: 4,
    status: ["active", "closed", "on hold"],
    isActive: false,
  },
  {
    id: 3,
    title: "Whole Foods Project",
    description:
      "Somethig about the projecmt somehgih abou the projhe som erphawj projegt",
    client: "Whole Foods, Inc.",
    startDate: "Aug 11",
    targetDate: "Dec 15",
    members: [],
    hoursThisWeek: 32,
    priority: ["low", "medium", "high"],
    tasks: 12,
    overdue: 4,
    status: ["active", "closed", "on hold"],
    isActive: false,
  },
  {
    id: 4,
    name: "Tom",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: null,
  },
];

export const tasks = [
  {
    id: 1,
    title: "Reports animation",
    description:
      "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
    href: "#",
    priority: "high",
    status: "active",
    dateTime: "2023-01-23T22:34Z",
    team: [
      {
        id: 12,
        name: "Emma Dorsey",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Reports animation",
    description:
      "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
    href: "#",
    priority: "high",
    status: "active",
    dateTime: "2023-01-23T22:34Z",
    team: [
      {
        id: 12,
        name: "Emma Dorsey",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "Reports animation",
    description:
      "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
    href: "#",
    priority: "high",
    status: "active",
    dateTime: "2023-01-23T22:34Z",
    team: [
      {
        id: 12,
        name: "Emma Dorsey",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
];
