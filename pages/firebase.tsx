import React from 'react'
import Layout from '../components/Layout'

const StorageUpload = (props: {}) => {
  return (
    <div>
      <button>アップロード</button>
    </div>
  )
}

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Firebase connect</h1>
    <StorageUpload />
  </Layout>
)

export default AboutPage
