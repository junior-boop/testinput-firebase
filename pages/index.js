import Head from 'next/head';
import { IcRoundImage } from '../composents/icons';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleInputChange = ({ target }) => {
    setNameValue(target.files[0].name);

    if (!target.files || !target.files[0]) return;

    const FilesReader = new FileReader();
    FilesReader.readAsDataURL(target.files[0]);

    FilesReader.addEventListener('load', (e) => {
      setBase64(e.target.result);
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Text fireBase</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.input}>
            <Inputbase titre="Votre nom et Prenom" />
            <Inputbase titre="Votre Ville" />
          </div>
          <div className={styles.images}>
            <InputImage onChange={handleInputChange} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}

function Inputbase({ titre }) {
  return (
    <div className={styles.inputBase}>
      <div>
        <label htmlFor="">{titre}</label>
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
}

function InputImage({ value, onChange, image, desc = 'Description' }) {
  return (
    <div className={styles.inputImage} style={{ backgroundImage: image }}>
      <input type="file" value={value} onChange={onChange} />
      <div className={styles.bas}>
        <div className={styles.desc}>{desc}</div>
        <button>
          <IcRoundImage style={{ color: 'black' }} />
        </button>
      </div>
    </div>
  );
}
