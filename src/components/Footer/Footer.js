import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const date = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <p>Copyright &copy; {date} <a href='https://github.com/clements50'>clements50</a>
      </p>
      <FontAwesomeIcon icon={faGithub} className={styles.icon} />
    </div>
  )
}

export default Footer;
