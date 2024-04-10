import Header from "@/app/components/Header";

export default function Resume() {
  return (
    <main className="flex flex-col justify-between max-w-full default: px-24;  md: px-0; w-full; sm: px-0; w-full;">
      <Header />
      <section className="flex flex-col px-8 py-24 h-screen">
        <h1 className="flex justify-center max-w-full w-full">Resume</h1>
      </section>
    </main>
  );
}
