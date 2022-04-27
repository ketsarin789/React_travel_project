import React, {Component } from 'react';
import {Button ,Label,Modal, ModalBody} from 'reactstrap';
import { Link } from "react-router-dom";
import { LocalForm,Control } from "react-redux-form";




class TravelInfo extends Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(values){
        this.toggleModal()
        console.log(`You have: ${JSON.stringify(+values.adult)} ${JSON.stringify(values.child)} and:
        ${values.room}`);
        alert(`You have: ${JSON.stringify(+values.adult)} ${JSON.stringify(
          values.child
        )} and:
        ${values.room}`);
        this.preventDefault();
    }
    render(){
    return (
      <div className="container">
        {/* <div className='mt-1'>
            <span class="nav-text text-primary">
            <a
                class="justify-content-between"
                role="button"
                data-toggle="modal"
                data-target="#room"
            >
                1 room, 2 travel
            </a>
            </span>
            </div> */}
        <React.Fragment>
          <Button className="m-1 text-warning" onClick={this.toggleModal}>
            1 room, 2 travel
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                <div form-group>
                  <Label>Adult</Label>
                  <Control.select
                    name="adult"
                    model=".adult"
                    id="adult"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Control.select>
                  <Label className="m-1">Child ages 0-17</Label>
                  <Control.select
                    name="child"
                    id="child"
                    model=".child"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Label>Room</Label>
                  <Control.select
                    name="room"
                    id="room"
                    model=".room"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </div>
              </LocalForm>
              <Button type="submit" value="submit" className="m-1">Submit</Button>
            </ModalBody>
          </Modal>
        </React.Fragment>
        <div className="row g-3">
          <div className="col-sm-4">
            <input
              type="type"
              placeholder="Leaving"
              className="form-control border-dark m-2"
              aria-label="Leaving"
            />
          </div>
          <div className="col-sm-4">
            <input
              type="type"
              placeholder="going to"
              className="form-control border-dark m-2"
              aria-label="going "
            />
          </div>
          <div class="col-sm-2">
            <input
              type="date"
              class="form-control border-dark m-2"
              name="trip-start"
              id="start"
              value="2022-3-22"
              min="2022-01-01"
              max="2022-12-31"
            />
          </div>
          <div class="col-sm-2">
            <input
              type="date"
              class="form-control border-dark m-2"
              name="trip-start"
              id="start"
              value="2022-3-22"
              min="2022-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <Button className="m-1" size="lg" type="submit" color="primary">
          Search
        </Button>
        <hr></hr>
      </div>
      
    );
    }
}


export default TravelInfo;