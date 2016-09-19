import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class RoomName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            pageRoom: props.roomName
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ pageRoom: nextProps.roomName });
    }

    changeEditState() {
        this.setState({ editing: !this.state.editing });
    }

    onInputChange(event) {
        this.setState({ pageRoom: event.target.value });
    }

    changeRoomName(event) {
        event.preventDefault();
        console.log(this.state.pageRoom);
        this.setState({ editing: false });
    }

    showRoomElement() {
        if(!this.state.editing){
            return this.state.pageRoom;
        } else {
            console.log(this.state.pageRoom);
            return (
                <form onSubmit={ this.changeRoomName.bind(this) } className="input-group">
                    <input
                        placeholder="What kind of name would you like for that page?"
                        className="form-control"
                        onChange={ this.onInputChange.bind(this) }
                        value= { this.state.pageRoom }/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary">
                            <FontAwesome name="check-circle-o" />
                        </button>
                    </span>
                </form>
            );
        }
    }

    render() {
        return (
            <div className="room-name">
                <div className="col-md-7">
                    { this.showRoomElement() }
                </div>
                <div className="col-md-2">
                    { !this.state.editing && <FontAwesome name="pencil" onClick={ () => this.changeEditState() }/> }
                </div>
            </div>
        );
    }
}

export default RoomName;