import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center p-8'>
      <Image src='/404new.png' width={500} height={300} alt='error 404' />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href='/'>Home page</Link>
      </p>
    </div>
  );
}
