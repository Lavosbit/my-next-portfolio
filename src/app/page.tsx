import Header from "@/app/components/Header";

export default async function Home() {
  const { data } = await fetch("http://localhost:3000/api/posts", {
    method: "post",
  }).then((res) => res.json());

  return (
    <main className="flex flex-col justify-between max-w-full px-24 sm:px-0 w-full md:px-0 ">
      <Header />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <section className="flex flex-col px-8 py-24 h-screen">
        <h1 className="flex justify-center max-w-full w-full">Home</h1>
      </section>
      <section className="flex flex-col px-8 py-24 h-screen">
        <h1 className="flex justify-center max-w-full w-full">Section 2</h1>
      </section>
      <section className="flex flex-col px-8 py-24 h-screen">
        <h1 className="flex justify-center max-w-full w-full">Section 3</h1>
      </section>
    </main>
  );
}
