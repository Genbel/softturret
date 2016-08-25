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
    }
};
class Dropboard extends Component {
    render() {
        const { text, attached, type, connectDropTarget } = this.props;
        var className = attached?  'col-lg-3 filled clearfix': 'col-lg-5 empty clearfix';
        return connectDropTarget(
              <div className={className}>
                  {text}
              </div>
        );
    }
}

export default DropTarget('GS', widgetTarget, collect)(Dropboard);