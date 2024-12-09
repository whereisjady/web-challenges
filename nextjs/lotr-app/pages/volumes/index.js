import Link from "next/link";
import { introduction } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <div>
        <h1>Lord Of The Rings Volumes</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          <li>
            <Link href="/volumes/the-fellowship-of-the-ring">
              The Fellowship Of The Ring
            </Link>
          </li>
          <li>
            <Link href="/volumes/the-two-towers">The Two Towers</Link>
          </li>
          <li>
            <Link href="/volumes/the-return-of-the-king">
              The Return Of The King
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
