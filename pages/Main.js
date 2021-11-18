import styles from '../styles/Main.module.css';

function Main({ content }) {
  const renderContent = () => {
    if (!content) {
      return (
        <p>
          Hi there! <span role="img" aria-label="Peace emoji">✌🏻</span> I&apos;m Diana / 유지영, a
          software engineer based in NYC, currently living in NJ.
          When I&apos;m not exploring the <a target="_blank" rel="noopener noreferrer"
            href="https://www.github.com/dianajyoo">interweb</a>, I like to read, travel, drink Americano, and pet
          cats.
          <br /><br />
          Send an <strong><a target="_blank" rel="noopener noreferrer"
              href="mailto:diana.yooj@gmail.com">email</a></strong> to chat!
        </p>
      )
    }

    return (
      <ul>
        <li>
          <h2>
            <a href='https://separate-field-foxtail.glitch.me/' target='_blank' rel='noreferrer'>
              moodsic
            </a>
          </h2>
          <p>take a mood quiz & get a playlist suggestion 🎧</p>
        </li>
        <li>
          <h2>
            <a href='https://dianajyoo.github.io/tetris/' target='_blank' rel='noreferrer'>
              tetris
            </a>
          </h2>
          <p>classic 80&apos;s tetris game 🧱</p>
        </li>
        <li>
          <h2>
            <a
              href='https://cosmic-shrouded-strawflower.glitch.me/'
              target='_blank'
              rel='noreferrer'
            >
              inner sol
            </a>
          </h2>
          <p>draw sol lewitt inspired art 🎨</p>
        </li>
      </ul>
    )
  }

  return <div className={styles.main}>{renderContent()}</div>
}

export default Main
