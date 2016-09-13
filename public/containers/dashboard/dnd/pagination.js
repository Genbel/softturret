import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeRoom } from 'actions/dashboard/roomsActions';
import { getActualRoom, getTotalRooms } from 'reducers/dashboard/roomReducer';
import FontAwesome from 'react-fontawesome';

class RoomPagination extends Component {

    changeActualRoom(action){
        const { changeRoom, actualRoom } = this.props;
        const futurePage = action === 'NEXT'? actualRoom + 1: actualRoom -1;
        changeRoom(futurePage);
    }

    displayButton(actualRoom, totalRoom, type){
        return actualRoom === totalRoom || actualRoom === -1?
            null :
            <button  className="btn btn-primary" id={type} onClick={ () => this.changeActualRoom(type) }>
                {type === 'NEXT' ?
                    <FontAwesome name="arrow-circle-o-right"/> :
                    <FontAwesome name="arrow-circle-o-left"/>
                }
            </button>;
    }

    render() {
        const { totalRooms, actualRoom } = this.props;
        const prevButton = this.displayButton(actualRoom, 0, 'PREV');
        const nextButton = this.displayButton(actualRoom, totalRooms, 'NEXT');

        return (
          <div className="room-pagination col-lg-3">
              <div className="col-lg-3">
                  { prevButton }
              </div>
              <div className="col-lg-3" id="pagination-text">
                  <p>{ actualRoom + 1 }/{ totalRooms + 1 }</p>
              </div>
              <div className="col-lg-3">
                  { nextButton }
              </div>
          </div>
        );
    }
}

RoomPagination.PropTypes = {
    actualRoom: React.PropTypes.number.isRequired,
    totalRooms: React.PropTypes.number.isRequired,
    changeRoom: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeRoom }, dispatch);
const mapStateToProps = (state) => {
    return {
        actualRoom: getActualRoom(state.dashboard.rooms),
        totalRooms: getTotalRooms(state.dashboard.rooms)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPagination);