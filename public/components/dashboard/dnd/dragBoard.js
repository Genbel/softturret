import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

/**
 * We use to connect the React DnD event handlers to some node in the component
 * We use to pass some knowledge about the dragging state to our component
 * With that we inject that special props into the component
 * @param connect: DnD documentation the description
 * @param monitor: DnD documentation the description
 * @returns {{connectDragSource: , isDragging: }}
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

/** It describes how the drag source reacts to the drag and drop events.
 * @returns {Object}
 */
const widgetSource = {
    beginDrag(props) {
        // We need the type property to know if we can drop the widget
        return {
            widgetId: props.id,
            type: props.type
        }
    },
    canDrag(props){
        return true;
    }
};

class Dragboard extends Component {

    render() {
        const { type, text, connectDragSource, isDragging } = this.props;
        const opacity = isDragging? 0.4 : 1;
        return connectDragSource(
            <div className="col-lg-12 widget-border drag" style={{opacity}}>{text} ({type})</div>
        );
    }
}

Dragboard.PropTypes = {
    type: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.func.isRequired
};
// We wrap our component with DragSource to make it draggable.
// DragSource is a higher-order component accepting three required parameter
export default DragSource(props => props.type, widgetSource, collect)(Dragboard);