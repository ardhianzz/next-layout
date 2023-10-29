'use client';
import UserMiddleware from "@/middleware/UserMiddleware";

export default function UserLayout({ children }) {
  return (
    <>
      <UserMiddleware>
        {children}
      </UserMiddleware>
    </>
  )
}
