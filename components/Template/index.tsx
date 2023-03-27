import styles from '@/styles/Home.module.css';
import {TemplateProps} from "@/types/template";
import Image from "next/image";

function Template(data:Omit<TemplateProps, 'onChange'>){
  const { title, description, buttonTitle, buttonLink, image }  = data;
    return (
        <div className={styles.templateView}>
            {/*Left Part*/}
            <span />
          {/* Middle Part */}
          <div className={styles.templateContainer}>
            <h1 className={styles.templateTitle}>{title || "Edit this title"}</h1>
            <span className={styles.templateDescription}>{description || "Edit this description"}</span>
            <a className={styles.templateButton} href={buttonLink || '#'}>{buttonTitle || "Edit button title"}</a>
          </div>
          <img  className={styles.templatePhoto} src={image || 'https://media.istockphoto.com/id/1191507674/photo/gorgeous-woman-posing-on-camera.jpg?b=1&s=170667a&w=0&k=20&c=39dWruV01aWRwrPMZ9HXrttn-0EVoaWFGrqABJmI9mo='} alt={"PP"} />
        </div>
    )
}

export default Template