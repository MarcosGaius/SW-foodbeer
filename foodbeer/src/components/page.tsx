import { restaurants } from "@/data/data";
import cn from "@/utils/cn";
import Image from "next/image";

interface PageProps {
  slug: string;
  color?: string;
}

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

export const Page = ({ slug, color }: PageProps) => {
  const restaurant = restaurants[slug as keyof typeof restaurants];

  if (!restaurant) {
    return <>404 Not Found</>;
  }

  return (
    <>
      <header className={cn("p-4 flex justify-center items-center bg-amber-400", color)}>
        <span className="text-3xl font-bold">
          <Image src={restaurant.logo} alt="Logo" width={50} height={50} />
        </span>
      </header>
      <main className="max-w-[1440px] mx-auto">
        <section className="px-4 my-20">
          <p className="text-lg text-center w-3/4 mx-auto">
            Confira abaixo as melhores opções de harmonização de comida e bebida para ter uma experiência gastronômica inesquecível!
          </p>
        </section>
        <section className="px-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{restaurant.menu.map(renderCard)}</ul>
        </section>
      </main>
      <footer className={cn("p-4 mt-20", color)}>
        <p className="text-center text-white">© 2023 FoodBeer. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
