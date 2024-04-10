import Header from "@/app/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col justify-between max-w-full default: px-24;  md: px-0; w-full; sm: px-0; w-full;">
      <Header />
      <section className="flex flex-col px-8 py-24 h-screen bg-gray-100">
        <h1 className="flex justify-center max-w-full w-full">Home</h1>
      </section>
      <section className="flex flex-col px-8 py-24 h-screen bg-gray-100">
        <h1 className="flex justify-center max-w-full w-full">Section 2</h1>
      </section>
      <section className="flex flex-col px-8 py-24 h-screen bg-gray-100">
        <h1 className="flex justify-center max-w-full w-full">Section 3</h1>
      </section>
    </main>
  );
}
