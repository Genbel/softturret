import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropTarget } from 'react-dnd';
import _ from 'lodash';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
const widgetTarget = {
    drop(props, monitor) {
        props.widgetAttachedToTheRoom(monitor.getItem());
    },
    canDrop(props, monitor) {
        return !!(props.type == monitor.getItem().type && !props.attached);
    }
};
class Dropboard extends Component {
    render() {
        const { text, attached, connectDropTarget, canDrop, isOver } = this.props;
        let className = attached?  'col-lg-3 filled clearfix drop': 'col-lg-3 empty clearfix drop';
        if(canDrop && isOver){
            className += ' allowed';
        } else if( !canDrop && isOver) {
            className += ' forbidden';
        }

        return connectDropTarget(
              <div className={className}>
                  {text}
              </div>
        );
    }
}
export default DropTarget(props => props.type, widgetTarget, collect)(Dropboard);
// Add the DropTarget to our component. Before it was a container, now it is a component
//Dropboard = DropTarget(props => props.type, widgetTarget, collect)(Dropboard);
// Connect with the redux store our component
//export default connect(null, mapDispatchToProps)(Dropboard);