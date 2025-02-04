import Image from "next/image";
import nextImg from "@/assets/docs.png";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Gallery Page</h1>
      <img
        src="https://nextjs.org/api/docs-og"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1>Next Gallery Page</h1>
      <Image
        src="https://nextjs.org/api/docs-og"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1>Local image</h1>
      <Image
        src={nextImg}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
