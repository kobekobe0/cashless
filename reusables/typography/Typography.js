import styles from "./Typography.module.css";

export function PrimaryLabel({ children }) {
  return <p className={styles.primaryLabel}>{children}</p>;
}

export function SecondaryContent({ children }) {
  return <p className={styles.secondaryContent}>{children}</p>;
}

export function PrimaryTitle({ children }) {
  return <h1 className={styles.primaryTitle}>{children}</h1>;
}

export function SecondaryTitle({ children }) {
  return <h2 className={styles.secondaryTitle}>{children}</h2>;
}

export function ButtonText({ children }) {
  return <span className={styles.buttonText}>{children}</span>;
}

export function ActionLink({ children }) {
  return <a className={styles.actionLink}>{children}</a>;
}

export function ContentLink({ children }) {
  return <a className={styles.contentLink}>{children}</a>;
}
