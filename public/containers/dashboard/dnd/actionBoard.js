import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import { getRoomWidgets } from 'reducers/dashboard/roomReducer';
import { getDisconnectedWidgets } from 'reducers/dashboard/widgetReducer';
import style from 'assets/stylesheets/dashboard/dnd.scss';
import _ from 'lodash';

import Dragelement from './dragBoard';
import Dropelement from './dropBoard';

class Actionboard extends Component {

    componentDidMount(){
        this.props.fetchWidgets();
    }
    componentDidMount(){
        this.props.fetchWidgets();
    }

    static contextTypes = {
        router: React.PropTypes.object
    };

    render() {
        const { disconnectedWidgets, attachedWidgets} = this.props;
        return (
            <div className="main-dnd">
                <span>Name of the room</span>
                <div className="col-lg-12 clearfix">
                    <div className="col-lg-9 clearfix">
                        <div className="drop-board clearfix">
                            { _.map(attachedWidgets, (widget, index) => {
                                return <Dropelement type={widget.type}
                                                    key={index}
                                                    text={widget.text}
                                                    attached={widget.attached}/>
                            })}
                        </div>
                    </div>
                    <div className="col-lg-3 clearfix">
                        <div className="drag-board">
                            { _.map(disconnectedWidgets, (widget, index) => {
                                return <Dragelement type={widget.type}
                                             key={index}
                                             text={widget.text} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWidgets}, dispatch);
}
const mapStateToProps = (state) => {
    return {
        attachedWidgets: getRoomWidgets(state.dashboard),
        disconnectedWidgets: getDisconnectedWidgets(state.dashboard.widgets)
    }
};

Actionboard = DragDropContext(HTML5Backend)(Actionboard);
export default connect(mapStateToProps, mapDispatchToProps)(Actionboard);