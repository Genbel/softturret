import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropTarget } from 'react-dnd';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import _ from 'lodash';

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
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
/** It describes how the drag source reacts to the drag and drop events.
 * @returns {Object}
 */
const widgetTarget = {
    drop(props, monitor) {
        const droppedWidget = monitor.getItem();
        const widgetInfo = { widgetId: droppedWidget.widgetId, attached: false, position: props.position };
        props.widgetActionInTheRoom(widgetInfo);
    },
    canDrop(props, monitor) {
        return (props.type === monitor.getItem().type && !props.attached);
    }
};

class Dropboard extends Component {

    deleteWidget() {
        const { position, widgetId, widgetActionInTheRoom } = this.props;
        const widgetInfo = { widgetId: widgetId, attached: true, position: position };
        console.log(widgetInfo);
        widgetActionInTheRoom(widgetInfo);
    }

    render() {
        const { text, attached, connectDropTarget, canDrop, isOver, editMode, type } = this.props;
        const GS = type === 'GS';
        const className = classNames(
            'clearfix', 'drop',
            {'col-lg-3': GS, 'col-lg-6': !GS },
            { filled: attached, empty: !attached },
            { 'shake-it': editMode },
            { allowed: canDrop && isOver },
            { forbidden: !canDrop && isOver }
        );
        return connectDropTarget(
            <div className={className}>
                { attached && editMode &&  <FontAwesome className="erase-widget" name="times-circle-o" size="2x" onClick={ () => this.deleteWidget() }/> }
                {text}
            </div>
        );
    }
}

Dropboard.PropTypes = {
    text: React.PropTypes.string.isRequired,
    attached: React.PropTypes.bool.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    canDrop: React.PropTypes.func.isRequired,
    editMode: React.PropTypes.bool.isRequired,
    isOver: React.PropTypes.func.isRequired,
    widgetActionInTheRoom: React.PropTypes.func.isRequired
};
// Wrap your component with DropTarget to make it react to the compatible items being dragged, hovered, or dropped on it.
// DropTarget is a higher-order component.
export default DropTarget(['GS', 'GM'], widgetTarget, collect)(Dropboard);
// CONNECT WITH THE REDUX STORE
// Add the DropTarget to our component. Before it was a container, now it is a component
//Dropboard = DropTarget(props => props.type, widgetTarget, collect)(Dropboard);
// Connect with the redux store our component
//export default connect(null, mapDispatchToProps)(Dropboard);