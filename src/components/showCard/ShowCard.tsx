import React from "react";
import styles from "../showCard/showCard.module.css";
import Image from 'next/image';
import starFull from "../../../public/assets/star-full.png";
import starEmpty from "../../../public/assets/star-empty.png";
import Link from "next/link";
import { motion } from "framer-motion"
import { useRouter } from "next/router";

export interface Show {
  id: number;
  name: string;
  image: string | null; // Add null as a possible value for image
  rating?: {
    average: number | null;
  };
}

type ShowCardProps = {
  show: Show;
  index: number;
};



function ShowCard(props: ShowCardProps) {
  const router = useRouter();

  const { show, index } = props;
  

  if (!show.image) {
    // If the show object does not contain an image, do not render the card
    return null;
  }

  // Define the image URLs and sizes for different viewport sizes
  const imageUrls = [
    { url: show.image, size: 500 },
    { url: show.image, size: 800 },
  ];
  const imageSrcSet = imageUrls.map((image) => `${image.url} ${image.size}w`).join(',');

  // Define the array of stars to render
  const stars = [];
  const starCount = show.rating && show.rating.average ? Math.round(show.rating.average / 2) : 0; // Check if show.rating is defined before accessing show.rating.average
  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars.push(<Image key={i} className={styles.star} src={starFull} alt="Full star" width={25} height={25} />);
    } else {
      stars.push(<Image key={i} className={styles.star} src={starEmpty} alt="Empty star" width={25} height={25} />);
    }
  }


  const handleCardClick = () => {
    router.push({
      pathname: "/shows/[id]",
      query: { id: show.id.toString() },
    });
  };

  return (
    <motion.div className={styles.cardSection} initial={{opacity:0, translateX:-50, translateY:-50}} animate={{opacity:1, translateX:0, translateY:0}} transition={{duration: 0.1, delay: index * 0.1 }} custom={index} >
      <Link onClick={handleCardClick}  href={`/ShowPage/${show.id}`}>
        
          <section className={styles.showCard}>
            <Image
              className={styles.image}
              src={show.image}
              alt={show.name}
              width={175}
              height={288}
            />
            <div>
            </div>
            {stars.length > 0 && (
              <div className={styles.starContainer}>
                {stars}
              </div>
            )}
            <span>{show.name}</span>
          </section>
        
      </Link>
    </motion.div>
  );
}

export default ShowCard;
