import Image from "next/image";
import { useState } from "react";

export const Card = (props: { imgUrl: string, id: {}, title: string }) => {
  const { imgUrl, title, id } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleErrorImage = () => {
    setImgSrc(
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };
  return (
    <div className="w-64 m-6 shrink-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-400 ...">
      <Image
        src={imgSrc || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=8'}
        width={"600"}
        height={"400"}
        alt=""
        onError={handleErrorImage}
      />
    <div className="bottom-1 opacity-75 bg-black pl-4 text-white font-semibold  ">
                    <span className=" bottom-4">{title}</span>
                  </div>
    </div>
  );
};