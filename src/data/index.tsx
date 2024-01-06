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

export const barChart = [
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

export const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
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

export const navigation = [
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
    title: "Project Flinstone",
    description:
      "Somethig about the projecmt somehgih abou the projhe som erphawj projegt",
    client: "Flinstone",
    startDate: "Jan 21",
    targetDate: "Oct 20",
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
    hoursThisWeek: 32,
    status: "active",
    tasksList: [
      {
        id: 1,
        name: "First Tasks",
        details:
          "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
        startDate: "Jan 21",
        targetDate: "Oct 20",
        priority: "high",
        status: "In progress",
        attachments: [],
        asignee: [
          {
            id: 12,
            name: "Emma Dorsey",
            imageUrl:
              "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
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
        name: "Reports",
        description:
          "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
        startDate: "Jan 21",
        targetDate: "Oct 20",
        priority: "high",
        status: "active",
        asignee: [{}],
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
    ],
  },
  {
    id: 2,
    title: "Project for Luminous Group",
    description:
      "Somethig about the projecmt somehgih abou the projhe som erphawj projegt",
    client: "Luminous Group",
    startDate: "Jan 21",
    targetDate: "Oct 20",
    members: [],
    hoursThisWeek: 32,
    priority: ["low", "medium", "high"],
    tasksList: [
      {
        id: 3,
        name: "Tasks",
        description:
          "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
        startDate: "Jan 21",
        targetDate: "Oct 20",
        href: "#",
        priority: "high",
        status: "active",
        asignee: [{}],
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
        id: 4,
        name: "Second tasks",
        description:
          "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
        startDate: "Jan 21",
        targetDate: "Oct 20",
        priority: "high",
        status: "active",
        asignee: [{}],
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
    ],
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
    tasksList: [
      {
        id: 5,
        name: "Tasks",
        description:
          "Create storyboards that depict the script and narration. Craft a dynamic portfolio and reel.",
        startDate: "Jan 21",
        targetDate: "Oct 20",
        priority: "high",
        status: "active",
        asignee: [
          {
            id: 1,
            name: "Emma Dorsey",
            imageUrl:
              "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
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
    ],
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
  },
  {
    id: 2,
    title: "Reports UI",
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
    title: "Reports defects",
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
