import Link from "next/link";

export function Avatar() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.vercel.sh/rauchg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
      >
        <li>
          <Link href="/dashboard/reset-password">Reset password</Link>
        </li>
        <li>
          <Link href="/sign-out">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
