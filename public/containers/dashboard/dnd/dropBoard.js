import React, { Component } from 'react';
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
        //props.onDrop(monitor.getItem());
        console.log(monitor.getItem());
    },
    canDrop(props, monitor) {
        if(props.type == monitor.getItem().type && !props.attached){
            console.log('canDrop');
            return true;
        } else {
            console.log('cannot drop');
            return false;
        }
    }
};
class Dropboard extends Component {
    render() {
        const { text, attached, connectDropTarget, canDrop, isOver } = this.props;
        let className = attached?  'col-lg-3 filled clearfix': 'col-lg-3 empty clearfix';
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