import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const widgetSource = {
    beginDrag(props) {
        return {
            id: props.id,
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
            <div className="col-lg-12 widget-border" style={{opacity}}>{text} ({type})</div>
        );
    }
}

export default DragSource(props => props.type, widgetSource, collect)(Dragboard);