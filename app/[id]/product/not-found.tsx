import Link from 'next/link';
import { Button } from '../../../components/ui/button';
 
export default function NotFound() {
  return (
    <main className="flex h-full my-20 flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested product.</p>
      <Button className="my-3">
        <Link
          href="/"
        >
          Go Back
        </Link>
      </Button>
    </main>
  );
}