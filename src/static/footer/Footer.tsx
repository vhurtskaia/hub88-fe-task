import { JSX } from 'react';
import { footer, box } from "./style.module.css"

export default function Footer(): JSX.Element {
  return (
    <footer className={footer}>
      <div className={`${box} container`}>
        <p className={'w-full text-center'}>Made with ❤️ by vhurtskaia</p>
      </div>
    </footer>
  )
}