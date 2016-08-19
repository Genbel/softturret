import React, { Component } from 'react';

import _ from 'lodash';

export default class Dragelement extends Component {

    renderNonRoomWidgets(){
        const widgets = [
            { text: "Amin", type: "GS"},
            { text: "Lina", type: "GS"},
            { text: "Aita", type: "GS"},
            { text: "Ama", type: "GS"}
        ];
        return _.map(widgets, (value, index) => {
            return <div className="col-lg-12 widget-border" key={index}>{value.text} and type {value.type}</div>
        });
    }
    render() {
        return (
            <div className="drag-element">
                {this.renderNonRoomWidgets()}
            </div>
        );
    }
}