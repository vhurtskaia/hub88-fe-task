import { header, text } from './style.module.css'

export default function Header() {
  return (
    <header className={header}>
        <img src="https://cdn.sanity.io/images/ds6qxd1h/production/c82a9373aed30607025319fc76a484df9e6872e1-330x140.svg" alt="Hub88" />
        <span className={text}>Frontend Task</span>
    </header>
  )
}