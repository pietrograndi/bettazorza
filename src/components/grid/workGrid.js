import React from "react"
import { ProjectGrid, Item } from "./index"
import { PageTitle, CopyWrapper, PageCopy, BzTitleProject } from "../typography"
import { Image, TestGImage } from "../image/image"
import { Video } from "../video"
import { SectionCenteredContent } from "../pageComponents/style"
import { HeroHeader } from "../hero/style"
import Img from "gatsby-image"
import SEO from "../../components/seo"

export const WorkGrid = ({ data }) => {
  return (
    <ProjectGrid>
      {data.map(img => (
        <Item key={img.alt} full={img.fullWidth}>
          <Img fluid={img.node.childImageSharp.fluid} alt={img.alt} />
        </Item>
      ))}
    </ProjectGrid>
  )
}
