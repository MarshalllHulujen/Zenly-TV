"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "./hooks/userUser";
import { fetcher } from "./utils/fetcher";
import { User } from "@prisma/client";
import useSWR from "swr";

export default function Home() {
  const { user } = useUser();
  const { data: usersData, isLoading: usersLoading, error: usersError } = useSWR("/api/users", fetcher);
  console.log("usersData:", usersData);

  if (!user) return (
    // <div>
    //     {
    //         <LoginPage/>
    //     }
    // </div>
    <a href="/api/auth/login">
      Log in
    </a>
  ) 

  if (usersLoading) return (
    <div>
      Loading....
    </div>
  )

  if (usersError) {
    console.log("error :", usersError)
  }

  if (user) {
    return (
      <div className="flex w-full h-screen flex-col py-12 px-9">
        <div className="flex gap-4 items-center">
          {user.imageUrl ? (
              <Image src={user.imageUrl} alt={user.name} width={36} height={36} className="rounded-full" />
          ) : (
              <span>No profile image available for {user.name}</span>
          )}
          <p className="font-bold">{user.name}</p>
        </div>
        <div className="border-t border-b py-4 my-4 border-white/30">
          {usersData?.map((user: User) => (
            <Link href={`/new?to=${user.id}`} className="flex gap-6 items-center" key={user.id}>
              <Image src={user.imageUrl} alt={user.name} width={48} height={48} className="rounded-full" />
              <div>
                <p>{user.name}</p>
                <p>Start conversation...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}