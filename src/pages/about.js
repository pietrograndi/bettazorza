import React from "react"
import { PageContainer } from "../components/pageComponents/style"
import { PageHeader } from "../components/pageHeader"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <PageContainer>
        <PageHeader />
      </PageContainer>
    </Layout>
  )
}
