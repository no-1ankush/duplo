import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import MenuAppBar from './components/MenuAppBar';
import Button from '@material-ui/core/Button';
import Editor from './components/Editor';
import AvailableComponent from './components/AvailableComponent';
import AvailableApi from './components/AvailableApi';
import './Duplo.css';

class Duplo extends Component {

  render() {
    return (
      <div>
        <MenuAppBar />
        <br/>
        <Grid rowHeight="5">
          <Row className="Container">
            <Column classNAme="Left" width="4/24">
              <AvailableComponent/>
            </Column>
            <Column className="Middle" width="16/24">
              <Editor/>
            </Column>
            <Column className="Right" width="4/24">
              <AvailableApi/>
            </Column>
          </Row>
        </Grid>
        <div className="publishButton">
          <Button size="large" variant="contained" color="primary">
            Publish Page
          </Button>
        </div>
      </div>
    );
  }
}
export default Duplo;
