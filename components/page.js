import PageContainer from './page-container'
import Header from './header'

export default function Page ({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header />
      {children}
    </PageContainer>
  )
}
