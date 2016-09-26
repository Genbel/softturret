import React, { Component } from 'react';
import Classnames from 'classnames';
import uuid from 'uuid';
import map from 'lodash/map';

class WidgetTemplateItem extends Component {

    constructor(props) {
        super(props);
    }

    templateChoosen() {
        const { widgetTemplateChoosen } = this.props;
        widgetTemplateChoosen();
    }

    isSelected() {
        return this.props.templateId === this.context.selectedTemplate;
    }

    render() {
        const selectedTemplate = this.isSelected();
        const className = Classnames(this.props.className, { selected: selectedTemplate });
        return (
            <div
                className={ className }
                onClick={ () => this.templateChoosen() }
            ></div>
        );
    }
}

WidgetTemplateItem.contextTypes = {
    selectedTemplate: React.PropTypes.number
};

export default WidgetTemplateItem;