import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Paper from '@material-ui/core/Paper'
import SearchAppBarContainer from './container/SearchAppBarContainer'
import './App.css';
import LocationListContainer from './container/LocationListContainer';
import ForecastExtendedContainer from './container/ForecastExtendedContainer'


/* ----------------------------------------
 */



const cities = [
  'Ciudad Guayana,ve',
  'Bogotá,col',
  'Buenos Aires,ar',
  'Ciudad de México,mx',
  'Madrid,es',
  'Murcia,es'
];


class App extends Component {


  render() {

    return (

      <Grid>
        <Row>
          <Col xs={12}>
            <SearchAppBarContainer />
          </Col>

        </Row>
        <Row>
          <Col xs={12} lg={6} >
            <div className="locationListCont">
              <Paper elevation={4}>
                <LocationListContainer cities={cities}
                  onSelectedLocation={this.handleSelectedLocation}></LocationListContainer>

              </Paper>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="extendedCont">
              <Paper elevation={4}>
                <div className="detail">
                  <ForecastExtendedContainer />
                </div>

              </Paper>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default App;

