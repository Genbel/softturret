import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeRoom } from 'actions/dashboard/roomsActions';
import { getActualRoom, getTotalRooms } from 'reducers/dashboard/roomReducer';

class RoomPagination extends Component {

    changeActualRoom(action){
        const { changeRoom, actualRoom } = this.props;
        const futurePage = action === 'NEXT'? actualRoom + 1: actualRoom -1;
        changeRoom(futurePage);
    }

    displayButton(actualRoom, totalRoom, type){
        return actualRoom === totalRoom || actualRoom === -1? null : <button id={type} onClick={ () => this.changeActualRoom(type) }>{type}</button>;
    }

    render() {
        const { totalRooms, actualRoom } = this.props;
        const prevButton = this.displayButton(actualRoom, 0, 'PREV');
        const nextButton = this.displayButton(actualRoom, totalRooms, 'NEXT');

        return (
          <div className="room-pagination">
              <div className="col-lg-5">
                  { prevButton }
              </div>
              <div className="col-lg-2">
                  <p>{ actualRoom + 1 }/{ totalRooms + 1 }</p>
              </div>
              <div className="col-lg-5">
                  { nextButton }
              </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeRoom }, dispatch);
const mapStateToProps = (state) => {
    return {
        actualRoom: getActualRoom(state.dashboard.rooms),
        totalRooms: getTotalRooms(state.dashboard.rooms)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPagination);