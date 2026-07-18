import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden />
      <p className={styles.label}>Loading project</p>
    </div>
  );
}
