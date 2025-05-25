import styles from "./style.module.css";

const MenuTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>{subTitle}</p>
      <div className={styles.title}>
        <Circles />
        {title}
        <Circles />
      </div>
    </div>
  );
};

export default MenuTitle;

function Circles() {
  return (
    <div className={styles.circles}>
      <div
        className={styles.circle}
        style={{ backgroundColor: "var(--color-main)" }}
      />
      <div
        className={styles.circle}
        style={{ backgroundColor: "var(--color-card)" }}
      />
      <div
        className={styles.circle}
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </div>
  );
}
