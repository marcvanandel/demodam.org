import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff/index.en.js'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

import casesImage from '../images/undraw_file_analysis_8k9b.svg'
import selectionImage from '../images/undraw_personal_settings_kihd.svg'
import authorizationImage from '../images/undraw_two_factor_authentication_namy.svg'
import dashboardImage from '../images/undraw_dashboard_nklg.svg'
import integrationImage from '../images/undraw_hologram_fjwp.svg'

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Demodam is a fictitious municipal website that shows which reusable open source products and services are available for municipalities." />
    <Background backgroundColor="#cbce1c">
      <Container>
        <Navigation as="nav" location={location} />
        <Section>
          <Payoff />
        </Section>
      </Container>
    </Background>
    <Background backgroundColor="#000000">
      <Container>
        <Logos />
      </Container>
    </Background>
    <Container>
      <Section id="about-demodam">
        <Flex>
          <Box>
            <p>Demodam is a fictitious municipal website that shows which reusable open source products and services are available for municipalities. On Demodam.nl you will soon be able to see which Common Ground components (building blocks) behind those services are ready and how they work together. Municipalities can then decide to use such a service, for example an application for online birth registration, for their residents. It is also possible to build on top of what is already available by both suppliers and municipalities.
            </p>
            <p>Demodam is made and maintained by the Common Ground community, which is made up of people and organizations from both the governmental and private sectors. The Foundation for Public Code ensures that all parties are equal. Everybody is welcome to contribute.
            </p>
          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jTK-sbee2qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={casesImage} alt="Illustratie van persoon en document" />
          </Box>
          <Box width={3/5}>
            <h2>On Demodam.nl we show what is available</h2>
            <p>On Demodam.nl you can see how digital service work for civilians and civil servants. It makes the abilities of Common Ground tangible.
            </p>          
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Demodam is  a environment for collaboration</h2>
            <p>It is easier for governments and their suppliers to find each other. It helps us to tune all of our workflows and it makes it easier for different components to work together. You will not be hindered by legacy systems and developmental agendas of different municipalities, making it easier to create proof-of-concepts. For this, we collaborate with NL Design System, so civilians will get a consistent user experience, even if a service is made up of different components made by different suppliers.
            </p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={selectionImage} alt="Illustratie van documenten met checklist" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={authorizationImage} alt="Illustratie van desktop computer en mobiele applictie met een slot" />
          </Box>
          <Box width={3/5}>
            <h2>Demoman helps to improve Common Ground</h2>
            <p>Together we set the standards for the components, regarding for example security user friendliness and (coding) standards. We learn from each other what the best practices are. The ultimate goal is to show all Demodam components in an app store like environment, comparable to that on your mobile phone, where you can install components and applications with a single click. 
            </p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>With Demodam you can innovate</h2>
            <p>Soon a solid base will exist, which will serve as a foundation for future work. As an example: say you want to develop a service spanning different governmental departments, for example a customer journey where a civilian wants to both register their child’s birth (with the municipality) and apply for child allowances (with the tax authorities) in one smooth process. Currently this is very difficult to execute, both technically and organizationally, but with Demodam soon a case system, personal registration system and NLX will be ready to make sure you can get underway fast.
            </p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={dashboardImage} alt="Illustratie van persoon met tablet waarop grafieken getoond worden" />
          </Box>
        </Flex>
      </Section>


    </Container>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center" fontSize="2rem">Roadmap</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Timeline>

        <Timeline.Container align="right">
            <Timeline.Content>
                <Span fontSize="0.9rem">July 2021</Span>
                <Heading as="h3" fontSize="1.5rem">Innovation subsidy granted</Heading>
                <p>The Ministry of the Interior and Kingdom Relations has granted Demodam a subsidy of €150,000.</p>
            </Timeline.Content>
        </Timeline.Container>

        <Timeline.Container align="left">
            <Timeline.Content>
                <Span fontSize="0.9rem">5 Juli till 9 Juli 2021</Span>
                <Heading as="h3" fontSize="1.5rem">Demodam hackathon</Heading>
                <p>Working together on an commonground showcase</p>
                <p><a href="https://www.meetup.com/nl-NL/Code-For-NL/events/278262253/">Information and registration</a></p>
            </Timeline.Content>
        </Timeline.Container>

        <Timeline.Container align="right">
            <Timeline.Content>
                <Span fontSize="0.9rem">24 Juni 2021 13:00</Span>
                <Heading as="h3" fontSize="1.5rem">Demodam hackathon</Heading>
                <p>Onboarding and planning</p>
                <p><a href="https://www.meetup.com/nl-NL/Code-For-NL/events/278475015/">Information and registration</a></p>
            </Timeline.Content>
        </Timeline.Container>

        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">June 2021</Span>
            <Heading as="h3" fontSize="1.5rem">Kick-off Demodam</Heading>
            <p>Launch of Demodam</p>
          </Timeline.Content>
        </Timeline.Container>
      </Timeline>
    </Container>
    <Footer location={location} />
  </Layout>
)

export default IndexPage
