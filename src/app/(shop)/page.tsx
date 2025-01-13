import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl">Hola Next</h1>
      <h1 className={`${titleFont.className} text-4xl font-bold antialiased`}>Hola Montserrat</h1>
    </div>
  );
}
