import fontTheme from '../styles/fonts'
import baseStyles from '../styles/base'
import Progress from '../components/nprogress'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Progress />

      <style jsx global>
        {fontTheme}
      </style>
      <style jsx global>
        {baseStyles}
      </style>
    </>
  )
}
