import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/DouglasPds.png" alt="Douglas Paulo"></img>
      <div>
        <strong>
          Douglas Paulo
        </strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>
          Level</p>
      </div>
    </div>
  );
}