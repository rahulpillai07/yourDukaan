import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

function Slider() {
  const imageList = [
    {
      name: "Image1",
      url: "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710679727/vegetable_grocery_facebook_cover_design_template_354609_59_transformed_1_b981bd8a32.png",
    },
    {
      name: "Image1",
      url: "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710680061/flat_design_supermarket_sale_facebook_cover_23_2149362989_bc1b508301.jpg",
    },
  ];

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {imageList.map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image.url} alt={image.name} height={400} width={1000}  className="w-full h-[150px]  md:h-[500px] object-cover rounded-2xl" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;
