import React, { Children } from 'react'
import { Grommet, Main, Header, Heading, Nav, Button, Box, Image, Text } from 'grommet'



const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}

const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#F0FFFF",
        "dark": "#5F9EA0"
      }
    },
    "font": {
      "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}
const Screen = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto">
      <Header align="center" direction="row" flex={false} justify="center" gap="medium">
        <Heading level="1" textAlign="center">
          Portfolio - Desserich Loïc
        </Heading>
      </Header>

      <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
        <Button label="Qui suis-je" active color="dark-3" onClick={() => push("/")} />
        <Button label="Mes formations" color="dark-3" onClick={() => push("/screen-2")} />
        <Button label="Mes expérience" color="dark-3" onClick={() => push("/screen-3")} />
      </Nav>

      <Box align="center" justify="center">
        <Heading level="2">
          Présentation
        </Heading>
      </Box>

      <Box align="center" justify="center" flex="shrink">
        <Image src='./img/41.png'/>

        <Text size="large" textAlign="center">
          Je suis un jeune développeur logiciel, passionné d'information et des nouvelle téchnologies.
        </Text>

        <Text size="large" textAlign="center">
          Actuellement je suis en formation pour obtenir un mastère développeur informatique en alternance avec l'école Ynov et l'entreprise Smartisi
        </Text>
      </Box>
    </Main>
  )
}

const Screen2 = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto">
      <Header align="center" direction="row" flex={false} justify="center" gap="medium">
        <Heading level="1" textAlign="center">
          Portfolio - Desserich Loïc
        </Heading>
      </Header>
      <Nav align="center" flex={false} gap="medium" justify="center" direction="row" pad="small">
        <Button label="Qui suis-je" size="medium" secondary hoverIndicator={false} color="dark-3" onClick={() => push("/")} />
        <Button label="Mes formations" hoverIndicator={false} color="dark-3" active onClick={() => push("/screen-2")} />
        <Button label="Mes expérience" color="dark-3" onClick={() => push("/screen-3")} />
      </Nav>
      <Box align="center" justify="center" gap="xxsmall" flex="grow" margin="small">
        <Heading level="2">
          Mes formations
        </Heading>
      </Box>
      


      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} margin={{"right":"xlarge","left":"xlarge","bottom":"xsmall","top":"xsmall"}} border={{"color":"active-text","size":"small"}} flex="grow" gap="xxsmall">       
        <Box align="center" justify="center" pad="medium"> 
            <Text size="large" textAlign="center">
              Mastère - Développement logiciel mobile et IOT
            </Text>
        </Box>

        <Text size="large" textAlign="start">
          Ecole Ynov - Toulouse
        </Text>

        <Text size="large" textAlign="start">
          Années : 2020 - 2022
        </Text>
      </Box>

      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} margin={{"right":"xlarge","left":"xlarge","bottom":"xsmall","top":"xsmall"}} border={{"color":"active-text","size":"small"}} flex="grow" gap="xxsmall">
        <Box align="center" justify="center" pad="medium"> 
            <Text size="large" textAlign="center">
              Licence Profesionnelle - Analyste Programmeur de Systèmes Informatiques Ouverts	
            </Text>
        </Box>
        
        <Text size="large" textAlign="start">
          IUTBlagnac
        </Text>

        <Text size="large" textAlign="start">
          Années : 2019 - 2020
        </Text>

        <Text size="large" textAlign="start">
          Divers conference sur des technologies de programation proposé par des intervenants profesionel.
        </Text>

        <Text size="large" textAlign="start">
          Apprentissage de méthodes de développment avancé.
        </Text>

        <Text size="large" textAlign="start">
          Réalisation d'un projet de heatMap a partie de d'un base influxDb et des technologies LoRa.
        </Text>
      </Box>

      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","bottom":"xsmall","top":"xsmall"}} flex="grow" gap="xxsmall">
        <Box align="center" justify="center" pad="medium"> 
            <Text size="large" textAlign="center">
              BTS Services Informatiques aux Organisations - Option SLAM	
            </Text>
        </Box>

        <Text size="large" textAlign="start">
          Lycée Ozenne			
        </Text>

        <Text size="large" textAlign="start">
          Années : 2017 - 2019
        </Text>

        <Text size="large" textAlign="start">
          Approfondissement des methodes de développement, aprentissage de divers langage
        </Text>

        <Text size="large" textAlign="start">
          Réalisation de 2 satge 
        </Text>

        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          7 semaine - INSA Toulouse
        </Text>

        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          4 semaine - C-Tel
        </Text>
      </Box>

      <Box align="start" justify="start" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"top":"xsmall","bottom":"xsmall","left":"xlarge","right":"xlarge"}} flex="grow" gap="xxsmall" direction="column" pad="medium">
        <Box align="center" justify="center" pad="medium"> 
            <Text size="large" textAlign="center">
              Baccalauréat technologique STMG - option SIG	
            </Text>
        </Box>

        <Text size="large" textAlign="start">
          Lycée Gabriel faure	
        </Text>

        <Text size="large" textAlign="start">
          Années : 2012 - 2016
        </Text>

        <Text size="large">
          Découverte des premiere ligne de code.
        </Text>

        <Text size="large" textAlign="start">
          Langage :
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          Web (PHP / HTML / CSS)
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          Sql
        </Text>
      </Box>
    </Main>
  )
}

const Screen3 = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto">
      <Header align="center" direction="row" flex={false} justify="center" gap="medium">
        <Heading level="1" textAlign="center">
          Portfolio - Desserich Loïc
        </Heading>
      </Header>
      <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
        <Button label="Qui suis-je" active={false} hoverIndicator={false} color="dark-3" onClick={() => push("/")} />
        <Button label="Mes formations" color="dark-3" onClick={() => push("/screen-2")} />
        <Button label="Mes expérience" color="dark-3" active onClick={() => push("/screen-3")} />
      </Nav>
      <Box align="center" justify="center" flex="grow">
        <Heading level="2">
          Mes éxpériences
        </Heading>
      </Box>

      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","top":"xsmall","bottom":"xsmall"}} flex="grow" gap="xxsmall">
        <Box align="center" justify="center" pad="medium"> 
          <Text size="large" textAlign="center">
            Smartisi
          </Text>
        </Box>

        <Text size="large" textAlign="start">
          Alternance développeur	
        </Text>

        <Text size="large" textAlign="start">
          2 ans d'alterance en 2020 - 2022 (année scolaire)
        </Text>

        <Text size="large" textAlign="start">
          Missions:
        </Text>

        <Text size="large" margin={{"left":"medium"}}>
          Faire evolué un site web déja existant en intergrant un systeme de signature via l'api jeSigneExpret
        </Text>
      </Box>

      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","top":"xsmall","bottom":"xsmall"}} flex="grow" gap="xxsmall">
        <Box align="center" justify="center" pad="medium"> 
          <Text size="large" textAlign="center">
            Chausson matériaux
          </Text>
        </Box>

        <Text size="large" textAlign="start">
          Alternance développeur junior Ibm-I	
        </Text>

        <Text size="large" textAlign="start">
          1 ans d'alterance en 2019-2020 (année scolaire)
        </Text>

        <Text size="large" textAlign="start">
          Missions:
        </Text>

        <Text size="large" margin={{"left":"medium"}}>
          Développement au sien de l'environnement ibm-i (as400). Mise à jour et développement de programme en réponse à l’évolution des besoins utilisateurs.
        </Text>
      </Box>

      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","top":"xsmall","bottom":"xsmall"}} flex="grow" gap="xxsmall">
        <Box align="center" justify="center" pad="medium"> 
          <Text size="large" textAlign="center">
            INSA - Toulouse
          </Text>
        </Box>

        <Text size="large" textAlign="start">
          Satge Développeur WEB			
        </Text>

        <Text size="large" textAlign="start">
          7 semaine de janvier à février 2019
        </Text>

        <Text size="large" textAlign="start">
          Missions:
        </Text>

        <Text size="large" margin={{"left":"medium"}}>
          Développement de nouveaux modules d’une application web en PHP objet et JQuery. Mise à jour de la base de données MySQL. Mise en production sur les serveurs de l’INSA et correction des divers bug.
        </Text>
      </Box>

      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","top":"xsmall","bottom":"xsmall"}} flex="grow" gap="xxsmall">
        <Box align="center" justify="center" pad="medium"> 
          <Text size="large" textAlign="center">
            C-Tel
          </Text>
        </Box>

        <Text size="large" textAlign="start">
          Satge Développeur WEB			
        </Text>

        <Text size="large" textAlign="start">
          4 semaine en juin 2018
        </Text>

        <Text size="large" textAlign="start">
          Missions:
        </Text>

        <Text size="large" margin={{"left":"medium"}}>
        Modification et développement d’un site web via l’outil WordPress. Ajout de code JavaScript, HTML et CSS dans le code des pages pour lesquelles la modification n’était pas accessible depuis WordPress.
        </Text>
      </Box>
    </Main>
  )
}

export default () => (
  <Grommet full theme={theme}>
    <Router>
      <Routes>
        <Route path="/" Component={Screen} />
        <Route path="/screen-2" Component={Screen2} />
        <Route path="/screen-3" Component={Screen3} />
      </Routes>
    </Router>
  </Grommet>
)
