import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { changeRoomName } from 'actions/dashboard/roomsActions';
import { sendingRequest } from 'reducers/dashboard/roomReducer';

class RoomName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            pageRoom: props.roomName
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.isSending?
            this.setState({ pageRoom: this.state.pageRoom }) :
            this.setState({ pageRoom: nextProps.roomName });
        this.props.isSending && !nextProps.isSending && this.setState({ editing: false});
        this.props.roomId !== nextProps.roomId && this.setState({ editing: false });
    }

    changeEditState() {
        this.setState({ editing: !this.state.editing });
    }

    onInputChange(event) {
        this.setState({ pageRoom: event.target.value });
    }

    changeRoomName(event) {
        const { changeRoomName, roomId } = this.props;
        event.preventDefault();
        changeRoomName({ roomId, roomName: this.state.pageRoom });
    }

    renderActionButton() {
        if( !this.props.isSending ) {
            return (
                <button type="submit" className="btn btn-primary">
                    <FontAwesome name="check-circle-o" />
                </button>
            );
        } else {
            return (
                <button className="btn btn-danger spinner">Hello</button>
            );
        }
    }

    showRoomElement() {
        if(!this.state.editing){
            return `Page Room: ${this.state.pageRoom}`;
        } else {
            return (
                <form onSubmit={ this.changeRoomName.bind(this) } >
                    <input
                        placeholder="What kind of name would you like for that page?"
                        className="form-control"
                        onChange={ this.onInputChange.bind(this) }
                        value= { this.state.pageRoom }/>
                        { this.renderActionButton() }
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

RoomName.PropTypes = {
    roomName: React.PropTypes.string.isRequired,
    isSending: React.PropTypes.bool.isRequired,
    changeRoomName: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeRoomName }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        isSending: sendingRequest(state.dashboard.rooms)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomName);