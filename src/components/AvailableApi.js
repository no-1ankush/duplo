import './AvailableApi.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
});

class AvailableApi extends Component {

  state = {
      internalApiModalOpenState: false,
      externalApiModalOpenState: false,
      externalApiOperation: "GET",
      availableApis: [
        {
          name: 'GET PATIENTS'
        },
        {
          name: 'GET PHYSICIANS'
        },
        {
          name: 'ADD PATIENT'
        },
        {
          name: 'ADD PHYSICIAN'
        },
        {
          name: 'UPDATE PATIENT'
        },
        {
          name: 'UPDATE PHYSICIAN'
        },
        {
          name: 'DELETE PATIENT'
        },
        {
          name: 'DELETE PHYSICIAN'
        },
      ],
      internalOpenApi: {
        name: 'GET PATIENTS',
        description: 'Retrives all patients information',
        path: 'http://localhost:8999/patients',
        operationType: 'GET'
      },
  }

  handleInternalApiModalClose = () => {
      this.setState({ internalApiModalOpenState: false });
  };

  handleInternalApiModalOpen = api => {
      this.setState({ internalApiModalOpenState: true });
  };

  handleExternalApiModalOpen = () => {
      this.setState({ externalApiModalOpenState: true });
  };

  handleExternalApiModalClose = () => {
      this.setState({ externalApiModalOpenState: false });
  };

  handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
  };

  /*componentDidMount() {
      fetch('http://localhost:8999/resources')
            .then(response => response.json())
            .then(response => {
              this.setstate({
                availableApis: response
              });
            })
            .catch(error => {
              console.log(error)
            })
  }*/

  render() {
    const { classes } = this.props;

    return (
      <div>
          <Typography variant="title" color="secondary">
            &nbsp;&nbsp;<strong><u>Available Apis</u></strong>
          </Typography>
          <br/>
          {this.state.availableApis.map(api => (
            <Button onClick={this.handleInternalApiModalOpen.bind(this)} variant="contained" color="default" className="apiButton">
              <strong>{api.name}</strong>
            </Button>
          ))}
          <Button onClick={this.handleExternalApiModalOpen} variant="contained" color="default" className="apiButton">
            <strong>External API</strong>
          </Button>
          <Modal
            aria-labelledby="internal-modal-title"
            aria-describedby="internal-modal-description"
            open={this.state.internalApiModalOpenState}
            onClose={this.handleInternalApiModalClose}
          >
            <div className={classes.paper}>
              <Typography variant="title" id="modal-title">
                {this.state.internalOpenApi.name}
              </Typography>
              <br/>
              <Typography variant="subheading" id="simple-modal-description">
                <strong>Description:</strong> {this.state.internalOpenApi.description}
                <br/>
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                <strong>Path:</strong> {this.state.internalOpenApi.path}
                <br/>
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                <strong>Method Type:</strong> {this.state.internalOpenApi.operationType}
                <br/>
              </Typography>
            </div>
          </Modal>
          <Modal
            aria-labelledby="external-modal-title"
            aria-describedby="external-modal-description"
            open={this.state.externalApiModalOpenState}
            onClose={this.handleExternalApiModalClose}
          >
            <div className={classes.paper}>
              <Typography variant="title" id="modal-title">
                External API Details
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  id="operation"
                  select
                  label="Operation"
                  value={this.state.externalApiOperation}
                  onChange={this.handleChange('operation')}
                  helperText="Please select operation type"
                  margin="normal"
                >
                  <option key="GET" value="GET">
                   GET
                  </option>
                  <option key="POST" value="POST">
                   POST
                  </option>
                  <option key="PUT" value="PUT">
                   PUT
                  </option>
                  <option key="DELETE" value="DELETE">
                   DELETE
                  </option>
                </TextField>
                <br/>
                <TextField
                  fullWidth
                  required
                  id="end-point"
                  label="End-Point"
                  helperText="Example: http://localhost:8999/"
                  margin="normal"
                />
                <br/>
                <TextField
                  fullWidth
                  required
                  id="resource"
                  label="Resource Path"
                  helperText="Example: /physicians"
                  margin="normal"
                />
                <br/>
                <TextField
                  fullWidth
                  id="path"
                  label="Path Parameters"
                  helperText="Example: /123456789"
                  margin="normal"
                />
                <br/>
                <TextField
                  fullWidth
                  id="query"
                  label="Query Parameters"
                  helperText="Example: state=Texas"
                  margin="normal"
                />
                <br/>
                <TextField
                  fullWidth
                  id="body"
                  label="JSON Body"
                  margin="normal"
                />
              </form>
            </div>
          </Modal>
      </div>
    );
  }
}

AvailableApi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvailableApi);
