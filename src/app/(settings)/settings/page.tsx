"use client";

import React from "react";

import SidebarMenu from "../components/SidebarMenu/page";
import SideMenuContent from "../components/SideMenuContent/page";

import { SettingsProvider } from "./provider";

const SettingsPage = () => {
  return (
    <div className="flex font-sans h-screen">
      <SettingsProvider>
        <SidebarMenu />
        <SideMenuContent />
      </SettingsProvider>
    </div>
  );
};

export default SettingsPage;
