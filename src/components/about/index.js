import React from "react"
import { AboutSection, BzAboutGrid, AboutFooter } from "./style"
import { colors } from "../../style/constants"
import { BzTitle, BzCopy } from "../typography"
import { BzButton } from "../bzButton"
import { SectionCenteredContent } from "../pageComponents/style"

export const About = ({ data }) => {
  return (
    <AboutSection full id="about" bgcolor={colors.cyan} color={colors.white}>
      <SectionCenteredContent>
        <BzTitle color={colors.white}>About</BzTitle>
        <BzAboutGrid>
          <div className="imageWrapper">
            <img src="images/about/about.png" />
          </div>
          <div>
            <div className="copyWrapper">
              <BzCopy bold>
                Sono una freelance graphic designer e da oltre 10 anni lavoro
                nel mondo della comunicazione digitale.
              </BzCopy>
              <BzCopy italic>
                Mi sono occupata principalmente di comunicazione per piccole
                medie imprese in particolare di brand design e packaging, i miei
                servizi spaziano dalla progettazione di immagine coordinata alla
                prototipazione di interfacce per prodotti digitali.
              </BzCopy>
              <BzCopy italic>
                Offro soluzioni creative su misura analizzando le esigenze dei
                miei clienti, attraverso un percorso condiviso passo passo.
              </BzCopy>
              <BzCopy italic>
                La comunicazione visiva è la mia passione, adoro tenermi
                aggiornata per quanto riguarda le ultime tencologie in campo
                grafico, quando non sto lavorando mi piace disegnare, entrare in
                librerie, leggere libri e guardare serie tv.
              </BzCopy>
            </div>
          </div>
        </BzAboutGrid>
        <AboutFooter>
          <BzButton text="hello@bettazorza.it" first={colors.cyan} />
        </AboutFooter>
      </SectionCenteredContent>
    </AboutSection>
  )
}
