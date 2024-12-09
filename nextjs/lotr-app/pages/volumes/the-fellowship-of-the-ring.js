import Link from "next/link";
import { volumes } from "../../lib/data";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  if (!volume) {
    return (
      <>
        <div>
          <Link href="/volumes">← All Volumes</Link>
          <h1>Volume Not Found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Link href="/volumes">← All Volumes</Link>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
      </div>
    </>
  );
}

// TO DO'S:
// The description of the book (p)
// An unordered list of the books contained in the volume (ul and li)
// Each book should show its ordinal number and title
