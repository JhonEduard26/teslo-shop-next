import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center align-middle w-full md:flex-row">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl font-bold`}>
          404
        </h2>
        <p className="text-xl font-semibold">Whoops! Lo sentimos mucho</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link className="font-normal transition-all hover:underline" href="/">
            Inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          className="p-5 sm:p-0"
          src="/imgs/starman_750x750.png"
          alt="Starman"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
