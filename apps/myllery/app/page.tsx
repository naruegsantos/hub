import Image from "next/image";
import DynamicTitle from "./components/dynamicTitle";

export default function Page() {
  const galleryItems = [
    {
      id: 0,
      title: "Título",
      desc: "Da Rosa, Mariana, 28/06/2025 - Arte digital, Adobe Ilustrator",
      img: "/test.jpeg",
    },
    {
      id: 1,
      title: "Título",
      desc: "Da Rosa, Mariana, 28/06/2025 - Arte digital, Adobe Ilustrator",
      img: "/test.jpeg",
    },
    {
      id: 2,
      title: "Título",
      desc: "Da Rosa, Mariana, 28/06/2025 - Arte digital, Adobe Ilustrator",
      img: "/vertical.jpg",
    },
    {
      id: 3,
      title: "Título",
      desc: "Da Rosa, Mariana, 28/06/2025 - Arte digital, Adobe Ilustrator",
      img: "/test.jpeg",
    },
    {
      id: 4,
      title: "Título",
      desc: "Da Rosa, Mariana, 28/06/2025 - Arte digital, Adobe Ilustrator",
      img: "/test.jpeg",
    },
    {
      id: 5,
      title: "Título",
      desc: "Da Rosa, Mariana, 28/06/2025 - Arte digital, Adobe Ilustrator",
      img: "/test.jpeg",
    },
  ]
  return (
    <>
      <header className="flex items-center justify-center h-[33vh]">
        <DynamicTitle
          dynamicText="My"
          staticText="llery"
          speed={1000}
          fontOptions={[
            "Rubik Vinyl",
            "Permanent Marker",
            "Rock Salt",
            "Finger Paint",
            "Freckle Face",
            "Covered By Your Grace",
            "Raleway Dots",
            "Black Ops One",
            "Knewave",
            "Cabin Sketch"
          ]}
        />
      </header>
      <main className="w-screen px-10 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 direction-ltr">
        {galleryItems.map((i, index) => (
          <div key={index} className="break-inside-avoid hover:scale-105 transition mb-4 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={i.img}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto rounded-t-2xl"
            />
            <div className="p-4">
              <strong>{i.title}</strong>
              <p>{i.desc}</p>
            </div>
          </div>
        ))}
      </main>

    </>
  );
}
