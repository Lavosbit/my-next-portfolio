import Header from "@/app/components/Header";

export default function About() {
  return (
    <main className="flex flex-col justify-between max-w-full default: px-24;  md: px-0; w-full; sm: px-0; w-full;">
      <Header />
      <section className="flex flex-col px-8 py-24 h-screen bg-gray-100">
        <h1 className="flex justify-center max-w-full w-full">About</h1>
      </section>
    </main>
  );
}
