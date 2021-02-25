import { useContext } from 'react';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/DouglasPds.png" alt="Douglas Paulo"></img>
      <div>
        <strong>
          Douglas Paulo
        </strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>
          Level {level}
        </p>
      </div>
    </div>
  );
}