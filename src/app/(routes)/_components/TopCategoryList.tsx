import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function TopCategoryList() {
  try {
    const fetchCategory = await prisma.category.findMany();

    return (
  
        <div className="flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
          {fetchCategory.map((category) => (
            <Link href={`/products-category/${category.name}`} key={category.id} className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg  hover:bg-green-200 hover:scale-110 transition-all ease-in-out w-[150px] min-w-[100px]">
              <Image src={category.icon} alt={category.name} width={50} height={50}  />
              <h2 className="mt-2 text-green-800 text-wrap">{category.name}</h2>
            </Link>
          ))}
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
