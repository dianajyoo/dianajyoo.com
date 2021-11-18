import { useState } from 'react'
import Header from './Header'
import Side from './Side'
import Main from './Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [content, setContent] = useState(1)

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Side setContent={setContent} />
        <Main content={content} />
      </div>
    </div>
  )
}
