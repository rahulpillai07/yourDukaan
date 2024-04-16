// import React from "react";
// import prisma from "@/lib/prisma";
// import ProductItem from "@/app/_components/ProductItem";
// async function ProductCategory({params}) {
//   const fetchProductByCategory = await prisma.category.findMany({
//     where: {
//       name: params.categoryName
//     },
//     include: {
//       products: {} // Selecting all fields by omitting the `select` block
//     }
//   })
  
//   console.log(fetchProductByCategory);
//   return (
//     <div>
//       <h2>{params.categoryName}</h2>
//       <div className="product-grid">
//         {fetchProductByCategory.map((category) => (
//           <div key={category.id}>
//             <h3>{category.name}</h3>
//             <div className="product-list grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//               {category.products.map((product) => (
//                 <ProductItem key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  
  
// }

// export default ProductCategory;

import React from "react";
import TopCategoryList from "../../_components/TopCategoryList";
import ProductListFetchByCategory from "../../_components/ProductList";


function ProductByCategory({params}) {
  return(
    <div>

      <h2 className="p-4 bg-green-700 text-white font-bold text-3xl text-center">{params.categoryName}</h2>
      <TopCategoryList/>
      <div className="p-5"></div>
      <ProductListFetchByCategory categoryName={params.categoryName}/>
    </div>
    )
}

export default ProductByCategory;
