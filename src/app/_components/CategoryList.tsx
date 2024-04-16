import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryList() {
  try {
    const fetchCategory = await prisma.category.findMany();

    return (
      <div className="mt-5">
        <h2 className="text-green-500 font-bold text-2xl">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-2 ">
          {fetchCategory.map((category) => (
            <Link href={`/products-category/${category.name}`} key={category.id} className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg  hover:bg-green-300 hover:scale-125 transition-all ease-in-out">
              <Image src={category.icon} alt={category.name} width={50} height={50}  />
              <h2 className="mt-2 text-green-800">{category.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <div className="mt-5">
        <h2 className="text-red-500 font-bold text-2xl">Error fetching categories</h2>
      </div>
    );
  }
}
