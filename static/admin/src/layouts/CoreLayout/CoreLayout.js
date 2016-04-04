import React, {PropTypes} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import '../../styles/core.scss'

// import {deepOrange500} from 'material-ui/lib/styles/colors'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'

import {AppBar, Tabs, Tab} from 'material-ui'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20
  }
}

const muiTheme = getMuiTheme({
  // keeping defaults, although everything can be overridden here
  // palette: {
  //   accent1Color: deepOrange500
  // }
})

function CoreLayout ({children}) {
  var myTabs = (
    <Tabs>
      <Tab label='Logout' route='/logout'/>
    </Tabs>
  )

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar title='Hoverfly' iconElementRight={myTabs}/>
        <div style={styles.container}>
          <Grid>
            <Row>
              <Col md={12}>
                {children}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
