import { onAuthenticateUser } from "@/actions/auth";
import Header from "@/components/reusable/layout/Header";
import Sidebar from "@/components/reusable/layout/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const userExists = await onAuthenticateUser();

  if (!userExists.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide container mx-auto">
        <Header user={userExists.user} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
