import images from "@/constants";
import Image from "next/image";

const Background = () => {
  return (
    <Image
      src={images.bg}
      fill
      alt="Futuristic background image"
      className="background"
      priority={true}
    />
  );
};

export default Background;
