import Page from '../components/page'
import Link from 'next/link'

export default function Test () {
  return (
    <Page>
      <h1>Test</h1>
      <Link href='/'>
        <a>Go to home</a>
      </Link>
    </Page>
  )
}
