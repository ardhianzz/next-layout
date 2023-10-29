'use client';
import Admin1Middleware from "@/middleware/Admin1Middleware";

export default function UserLayout({ children }) {
  return (
    <>
      <Admin1Middleware>
        {children}
      </Admin1Middleware>
    </>
  )
}
