import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import styles from "../showDetails/showdetails.module.css";
import Image from "next/image";
import starFull from "../../../public/assets/star-full.png";
import starEmpty from "../../../public/assets/star-empty.png";

const SHOW_QUERY = gql`
  query Show($id: Int!) {
    show(id: $id) {
      id
      name
      rating
      image
      summary
      network
      airDay
      status
      genres
      cast {
        name
        characterName
        characterImage
      }
    }
  }
`;

function ShowDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(SHOW_QUERY, {
    variables: { id: 4 },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const show = data.show;

  const stars = [];
  const starCount =
    show.rating && show.rating.average
      ? Math.round(show.rating.average / 2)
      : 0; // Check if show.rating is defined before accessing show.rating.average
  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars.push(
        <Image
          key={i}
          className={styles.star}
          src={starFull}
          alt="Full star"
          width={25}
          height={25}
        />
      );
    } else {
      stars.push(
        <Image
          key={i}
          className={styles.star}
          src={starEmpty}
          alt="Empty star"
          width={25}
          height={25}
        />
      );
    }
  }

  return (
    <div className={styles.main}>
      <section className={styles.showInfo}>
        <div className={styles.cover}>
          <Image
            className={styles.image}
            src={show.image}
            alt="Picture of the author"
            width={300}
            height={421.3}
          />
        </div>
        <div className={styles.column}>
          <div className={styles.stars}>
            {stars.length > 0 && (
              <div className={styles.starContainer}>{stars}</div>
            )}
            <p>Rating: {show.rating || "N/A"}</p>
          </div>
          <h1 className={styles.title}>{show.name}</h1>
          <div>
            <div
              className={styles.summary}
              dangerouslySetInnerHTML={{ __html: show.summary }}
            ></div>
          </div>
        </div>
      </section>
      <section className={styles.bottomHalf}>
        <div className={styles.showDetails}>
          <h2>Show Info</h2>
          <section className={styles.infoCards}>
            <div className={styles.card}>
              <p id={styles["dark"]}>Streamed on</p>
              <p>{show.network || "N/A"}</p>
            </div>
            <div className={styles.card}>
              <p id={styles["dark"]}>Schedule</p>
              <p>{show.airDay || "N/A"}</p>
            </div>
            <div className={styles.card}>
              <p id={styles["dark"]}>Status</p>
              <p>{show.status || "N/A"}</p>
            </div>
            <div className={styles.card}>
              <p id={styles["dark"]}>Genres</p>
              <p>{show.genres ? show.genres[0] : "N/A"}</p>
            </div>
          </section>
        </div>
        {show.cast.length > 0 && (
          <section className={styles.cast}>
            <h2>Starring</h2>

            {show.cast.map(
              (castMember: {
                name: string;
                characterName: string;
                characterImage: string;
              }) => (
                <div className={styles.castCard} key={castMember.name}>
                  <div className={styles.imageCropper}>
                    <Image
                      width={100}
                      height={100}
                      className={styles.castImage}
                      src={castMember.characterImage}
                      alt="castImage"
                    />
                  </div>
                  <div className={styles.castName}>
                    <p id={styles["dark"]}>{castMember.name}</p>
                    <p>{castMember.characterName}</p>
                  </div>
                </div>
              )
            )}
          </section>
        )}
      </section>

      <footer className={styles.footer}>
        <p>
          TV Bland - your one-stop destination for all your favorite TV shows!
          From drama to comedy, we&apos;ve got you covered. Don&apos;t miss out
          on our comprehensive TV schedule and never miss a show again. Stay up
          to date with the latest news and reviews of your favorite programs. TV
          Bland &copy; 2023
        </p>
      </footer>
    </div>
  );
}

export default ShowDetails;
