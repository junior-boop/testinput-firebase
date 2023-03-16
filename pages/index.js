import { useState, useEffect } from 'react';
import Head from 'next/head';
import { IcRoundImage } from '../composents/icons';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [description, setDescription] = useState();
  const [base64, setBase64] = useState('');

  const handleInputChange = ({ target }) => {
    setDescription(target.files[0].name);

    if (!target.files || !target.files[0]) return;

    const FilesReader = new FileReader();
    FilesReader.readAsDataURL(target.files[0]);

    FilesReader.addEventListener('load', (e) => {
      setBase64(e.target.result);
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Text fireBase</title>
      </Head>

      <main className={styles.main}>
        <form
          onSubmit={HandleSubmit}
          encType="multipart/form-data"
          method="GET"
        >
          <div className={styles.header}>
            <div className={styles.input}>
              <Inputbase titre="Votre nom et Prenom" />
              <Inputbase titre="Votre Ville" />
            </div>
            <div className={styles.images}>
              <InputImage
                value={description}
                image={base64}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.valide}>
            <button>Enregistrer</button>
          </div>
        </form>
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

function InputImage({ image, onChange, value = 'Description' }) {
  const desc = value.substring(0, 15);
  console.log(image);
  return (
    <div
      className={styles.inputImage}
      style={{ backgroundImage: `url(${image})` }}
    >
      <input type="file" onChange={onChange} />
      <div className={styles.bas}>
        <div className={styles.desc}>{desc}...</div>
        <button>
          <IcRoundImage style={{ color: 'black' }} />
        </button>
      </div>
    </div>
  );
}
