import React, { Component } from 'react';
import props from './props';
import style from './style';
import { Modal, Fade, ClickAwayListener, Paper, TextField, Select, MenuItem, InputLabel, Switch } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';


// const fieldStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

class NewDonationModal extends Component {

 //'A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-']

  renderModalContent = () => (
    <Paper style={style.modal} >
      <div>
        <h2 id="simple-modal-title">ADD NEW DONATION</h2>
      </div>
      <TextField
          required
          id="outlined-required"
          label="Reason"
          margin="normal"
          variant="outlined"
        />
        
        <InputLabel id="demo-simple-select-outlined-label">
          Blood Type
        </InputLabel>

        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='A+'>A+</MenuItem>
          <MenuItem value='B+'>B+</MenuItem>
          <MenuItem value='O+'>O+</MenuItem>
          <MenuItem value='AB+'>AB+</MenuItem>
          <MenuItem value='B-'>B-</MenuItem>

        </Select>

        <InputLabel id="demo-simple-select-outlined-label">
          Accept
        </InputLabel>
        <Switch value="checkedA" inputProps={{ 'aria-label': 'secondary checkbox' }} />
      
    </Paper>
  )

  render() {
    const {
      isOpen,
      onClose,
    } = this.props;

    return (
      <Modal
        open={isOpen}
        contentLabel="Example Modal"
        closeAfterTransition
        enableBackdropClick>
        <ClickAwayListener onClickAway={onClose}>
          <Fade in={isOpen} >
            {this.renderModalContent()}
          </Fade>
        </ClickAwayListener>
      </Modal>
    );
  }
}

NewDonationModal.propTypes = {
  ...props,
};

export default NewDonationModal;