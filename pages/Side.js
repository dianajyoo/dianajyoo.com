import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Side.module.css'

function Side({ setContent }) {
  const [artist, setArtist] = useState(null)
  const [song, setSong] = useState(null)

  const buttonOneRef = useRef(null)
  const buttonTwoRef = useRef(null)

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API)
      .then((res) => res.json())
      .then((data) => {
        const body = data?.recenttracks?.track[0]

        setArtist(body?.artist["#text"].toLowerCase())
        setSong(body?.name.toLowerCase())
      })
  })

  const handleClick = (value) => () => {
    setContent(value)

    if (value) {
      buttonOneRef.current.classList.remove('active')
      buttonTwoRef.current.classList.add('active')
      return
    }

    buttonOneRef.current.classList.add('active')
    buttonTwoRef.current.classList.remove('active')
  }

  return (
    <aside className={styles.side}>
      <button
        ref={buttonOneRef}
        onClick={handleClick(0)}
      >
        whoami
      </button>
      <button
        ref={buttonTwoRef}
        className='active'
        onClick={handleClick(1)}
      >
        projects
      </button>
      <div>
        <div className={styles.bars}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        last played <span className={`${styles.playing} ${styles.song}`}>{song}</span> by <span className={styles.playing}>{artist}</span>
      </div>
    </aside>
  )
}

export default Side
