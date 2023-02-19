import React from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"

function Home() {
  const {data: session} = useSession()

  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
          <Link href="/api/auth/signin">Sign in</Link>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <Link href="/api/auth/signout">Sign out</Link>
        </>
      )}
    </div>
  )
}

export default Home;