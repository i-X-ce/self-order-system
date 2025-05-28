import styles from "./style.module.css";
import type { Properties } from "csstype";

const ImgCircle = ({
  src,
  className,
  style,
}: {
  src: string;
  className?: string;
  style?: Properties<string | number, string & {}>;
}) => {
  return (
    <div
      className={`${styles.imgCircle} ${className || ""}`}
      style={{ backgroundImage: `url(${src})`, ...style }}
    />
  );
};

export default ImgCircle;
