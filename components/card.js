import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import cls from "classnames";
const Card = ({ name, imgUrl, link }) => {
  return (
    <Link className={styles.cardLink} href={link}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={imgUrl}
            width={280}
            height={180}
            alt="shopImage"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
