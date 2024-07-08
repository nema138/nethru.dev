import Loader from "./anim_loader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-medium">Hello There!</h1>

      <h2 className="text-lg mt-12">
        I&apos;m Nethru, A full stack web developer who has 6 years of
        experience working in the industry.
      </h2>

      <h2 className="text-lg mt-10 max-w-2xl text-center">
        I started my development journey as a PHP Developer who occasionally
        dabbled in C# for windows form development at my first job.
      </h2>

      <h2 className="text-lg mt-10 max-w-xl text-center">
        Now, I&apos;m a Senior Full Stack JS Developer who also has extensive
        knowledge in AWS and linux, also dabbling in Python and Bash for
        scripting.
      </h2>

      <h2 className="text-lg mt-10 max-w-lg text-center">
        This site will be updated periodically. You can find the github repo for
        this website&nbsp;
        <a
          className="underline hover:animate-pulse"
          href="https://github.com/nema138/nethru.dev/"
        >
          here
        </a>
      </h2>

      <div className="mt-10"></div>

      <Loader />
    </main>
  );
}
