'use client';
import Admin2Middleware from "@/middleware/Admin2Middleware";

export default function UserLayout({ children }) {
  return (
    <>
      <Admin2Middleware>
        {children}
      </Admin2Middleware>
    </>
  )
}
