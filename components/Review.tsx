export function ReviewPage() {
  const reviews: Review[] = [
    {
      name: "John Doe",
      role: "CEO, Example Corp",
      content:
        "Enriquee Studio transformed our brand with their innovative designs. Highly recommended!",
    },
  ];

  return (
    <>
      <div className="px-4 bg-slate-50">
        <div className="flex flex-col text-center justify-center mt-10">
          <div className="px-2 mb-4 py-1 bg-colorPrimary/70 rounded-full backdrop-blur-2xl w-fit mx-auto">
            <p className="text-lime-500  text-sm font-bold mx-auto">
                Testimoni
            </p>
          </div>
          <h1 className="font-extrabold text-5xl">Kata klien Kami</h1>
        </div>
      </div>
    </>
  );
}
