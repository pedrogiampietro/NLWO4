import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/pedrogiampietro.png"
        alt="Pedro Giampietro"
      />
      <div>
        <strong>Pedro Giampietro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
