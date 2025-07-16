"use client";
import { Nav } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
