import React from 'react';
import { connect } from 'react-redux';
import { getTotalRooms } from 'reducers/dashboard/roomReducer';

const Colors = ({totalRooms}) => {
    console.log(totalRooms);
    return (
        <div>
            <h1>Total Pages: {totalRooms}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        totalRooms: getTotalRooms(state.dashboard.rooms)
    };
};

export default connect(mapStateToProps)(Colors);