import { data } from "@/data/data";
import Image from "next/image";

const renderCard = ({ name, img, description }: { name: string; img: string; description: string }) => {
  return (
    <li className="w-full flex flex-col gap-2 border border-2 rounded-lg overflow-hidden">
      <div className="mx-auto w-full h-[200px] relative overflow-hidden">
        <Image src={img} alt={name} className="rounded-sm object-cover w-full" fill />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="uppercase font-bold">{name}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default function Home() {
  return (
    <>
      <header className="p-4 flex justify-center items-center bg-amber-400">
        <span className="text-3xl font-bold">FoodBeer</span>
      </header>
      <main className="max-w-[1440px] mx-auto">
        <section className="px-4 my-20">
          <p className="text-lg text-center w-3/4 mx-auto">
            Confira abaixo as melhores opções de harmonização de comida e bebida para ter uma experiência gastronômica inesquecível!
          </p>
        </section>
        <section className="px-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{data.map(renderCard)}</ul>
        </section>
      </main>
      <footer className="p-4 bg-amber-400 mt-20">
        <p className="text-center">© 2023 FoodBeer. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
