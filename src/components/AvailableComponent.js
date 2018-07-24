import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import GridLayout from 'react-grid-layout';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

class AvailableComponent extends Component {
  render() {
    var layout = [
          {i: 'search', x: 0, y: 0, w: 4, h: 1.5},
          {i: 'save', x: 0, y: 1, w: 4, h: 1.5},
          {i: 'delete', x: 0, y: 4, w: 4, h: 1.5},
          {i: 'upload', x: 0, y: 6, w: 4, h: 1.5},
          {i: 'voice', x: 0, y: 9, w: 1, h: 1, minW: 1, maxW: 1, minH: 1, maxH: 1},
          {i: 'navIcon', x: 1, y: 9, w: 1, h: 1, minW: 1, maxW: 1, minH: 1, maxH: 1},
          {i: 'addIcon', x: 2, y: 9, w: 1, h: 1, minW: 1, maxW: 1, minH: 1, maxH: 1},
          {i: 'deleteIcon', x: 3, y: 9, w: 1, h: 1, minW: 1, maxW: 1, minH: 1, maxH: 1},
          {i: 'header', x: 0, y: 12, w: 4, h: 2},
          {i: 'table1', x: 0, y: 14, w: 4, h: 2.2},
          {i: 'table2', x: 0, y: 16, w: 4, h: 2.2},
        ];

    return (
      <div>
        <Typography variant="title" color="secondary">
          &nbsp;&nbsp;
          <strong>
            <u>UI Components</u>
          </strong>
        </Typography>
        <GridLayout className="layout" layout={layout} cols={24} rowHeight={30} width={1200}>
          <Button key="search" variant="contained" color="primary">
            Search
          </Button>
          <Button key="save" variant="contained" size="small">
            <SaveIcon />
            Save
          </Button>
          <Button key="delete" variant="contained" color="secondary">
            <DeleteIcon />
            Delete
          </Button>
          <Button key="upload" variant="contained" color="default">
            <CloudUploadIcon />
            Upload
          </Button>
          <Button key="voice" variant="fab" color="default">
            <KeyboardVoiceIcon />
          </Button>
          <Button key="navIcon" variant="fab" aria-label="Delete">
            <NavigationIcon />
          </Button>
          <Button key="addIcon" variant="fab" color="primary" aria-label="Add">
            <AddIcon />
          </Button>
          <Button key="deleteIcon" variant="fab" aria-label="Delete">
            <DeleteIcon />
          </Button>
          <AppBar key="header" position="static" color="primary">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                My App
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper key="table1">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Header 1</TableCell>
                  <TableCell>Header 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>CEll 1</TableCell>
                  <TableCell>CEll 2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Paper key="table2">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Header 1</TableCell>
                  <TableCell>Header 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>CEll 1</TableCell>
                  <TableCell>CEll 2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </GridLayout>
      </div>
    );
  }
}
export default AvailableComponent;
