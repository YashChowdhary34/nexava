import { CallStatusEnum } from "@prisma/client";
import { Bot, House, Settings, UserPen, Webcam } from "lucide-react";

export const sidebarData = [
  {
    id: 1,
    title: "Home",
    icon: House,
    link: "/home",
  },
  {
    id: 2,
    title: "Webinars",
    icon: Webcam,
    link: "/webinars",
  },
  {
    id: 3,
    title: "Leads",
    icon: UserPen,
    link: "/leads",
  },
  {
    id: 4,
    title: "AI Agents",
    icon: Bot,
    link: "/ai-agents",
  },
  {
    id: 5,
    title: "Settings",
    icon: Settings,
    link: "/settings",
  },
];

export const onBoardingSteps = [
  { id: 1, title: "Create a webinar", complete: false, link: "" },
  { id: 2, title: "Get leads", complete: false, link: "" },
  { id: 3, title: "Conversion status", complete: false, link: "" },
];

export const potentialCustomer = [
  {
    id: "1",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    clerkId: "1",
    profileImage: "/vercel.svg",
    isActive: true,
    lastLoginAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    tags: ["New", "Hot Lead"],
    callStatus: CallStatusEnum.COMPLETED,
  },
  {
    id: "2",
    name: "Sophia Patel",
    email: "sophia.patel@example.com",
    clerkId: "2",
    profileImage: "/avatar2.png",
    isActive: false,
    lastLoginAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    tags: ["Returning", "Interested"],
    callStatus: CallStatusEnum.PENDING,
  },
  {
    id: "3",
    name: "Marcus Lee",
    email: "marcus.lee@business.net",
    clerkId: "3",
    profileImage: "/avatar3.png",
    isActive: true,
    lastLoginAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    tags: ["VIP", "Long-term Client"],
    callStatus: CallStatusEnum.InProgress,
  },
  {
    id: "4",
    name: "Emily Chen",
    email: "emily.chen@startup.io",
    clerkId: "4",
    profileImage: "/avatar4.png",
    isActive: true,
    lastLoginAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    tags: ["Potential Upsell", "Warm Lead"],
    callStatus: CallStatusEnum.COMPLETED,
  },
  {
    id: "5",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@ecommerce.com",
    clerkId: "5",
    profileImage: "/avatar5.png",
    isActive: false,
    lastLoginAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30), // 30 days ago
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    tags: ["Cold Lead", "Follow-up Needed"],
    callStatus: CallStatusEnum.PENDING,
  },
];
