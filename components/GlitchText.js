import styles from './GlitchText.module.css'

export default function GlitchText({ text, className = '' }) {
  return (
    <div className={`${styles.glitch} ${className}`} data-text={text}>
      {text}
    </div>
  )
}