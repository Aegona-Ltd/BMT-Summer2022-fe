import styles from '../../styles/components/responsive/navBar.module.scss';
import { link } from './Arr_Home/arr_header';
import Link from 'next/link';
export default function NavBar() {
  return (
    <div className={styles.full_bg}>
            <ul className="navbar-nav me-auto">
              {link.map((a, b) => {
                return (
                  <li className="nav-item" key={b}>
                    <Link href={a.href}>
                      <a className={a.className}>{a.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
    </div>
  )
}
