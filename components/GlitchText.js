import styles from './GlitchText.module.css'

export default function GlitchText({ text, className = '' }) {
  return (
    <div className={`${styles.glitch} ${className}`}>
      {text}
      <span>{text}</span>
      <span>{text}</span>
    </div>
  )
}