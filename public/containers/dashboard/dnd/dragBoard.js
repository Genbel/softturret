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
            name: props.text,
            attached: props.type
        }
    },
    canDrag(props){
        return true;
    }
};

class Dragboard extends Component {

    render() {
        const { type, text, connectDragSource } = this.props;
        return connectDragSource(
            <div className="col-lg-12 widget-border">{text} ({type})</div>
        );
    }
}

export default DragSource('GS', widgetSource, collect)(Dragboard);