import styles from "./style.module.css";

const MenuTitle = ({
  title,
  subTitle,
  border = true,
}: {
  title: string;
  subTitle: string;
  border?: boolean;
}) => {
  return (
    <div
      className={styles.container}
      style={{
        borderBottom: border ? "1px solid var(--color-border)" : "none",
      }}
    >
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
