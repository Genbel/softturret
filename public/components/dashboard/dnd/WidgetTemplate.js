import React, { Component } from 'react';
import WidgetTemplateItem from './widgetTemplateItem';
import FontAwesome from 'react-fontawesome';
import map from 'lodash/map';
import uuid from 'uuid';

class WidgetTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actualPage: 0,
            templateArray: [1,2,3,4],
            template: 12,
            selectedTemplate: 0
        };
    }

    getChildContext(){
        return { selectedTemplate: this.state.selectedTemplate }
    }

    changeTemplatePage(action) {
        const actualPage = action === 'prev'? this.state.actualPage - 1: this.state.actualPage + 1;
        const templateArray = this.createTemplateArray(actualPage);
        this.setState({ actualPage, templateArray });
    }

    createTemplateArray(actualPage) {
        var templateArray = [];
        for( var i = 1; i < 5; i++ ) {
            templateArray.push(4 * actualPage + i);
        }
        return templateArray;
    }

    setSelectedWidget(selectedTemplate) {
        if(selectedTemplate !== this.state.selectedTemplate){
            this.setState({ selectedTemplate });
            this.props.setSelectedWidget(selectedTemplate);
        }
    }

    renderTemplateItems(templates) {
        return map(templates, (value) => {
            const src = `template type_${value}`;
            return (
                <WidgetTemplateItem
                    key={ value }
                    className={ src }
                    templateId={ value }
                    widgetTemplateChoosen ={ () => this.setSelectedWidget(value) }>
                </WidgetTemplateItem>
            );
        });
    }

    render() {
        return (
            <div className="widget-template-container">
                { this.renderPreviousButton() }
                <div className="widget-templates">
                    { this.renderTemplateItems(this.state.templateArray) }
                </div>
                { this.renderNextButton() }
            </div>
        );
    }
    renderPreviousButton() {
        if(this.state.actualPage !== 0) {
            return (
                <div className="widget-template-page" onClick={ () => this.changeTemplatePage('prev') }>
                    <FontAwesome name="arrow-circle-left" size="2x" onClick={ () => this.changeTemplatePage('prev') }/>
                </div>
            );
        }
    }
    renderNextButton() {
        if(this.state.actualPage !== 2) {
            return (
                <div className="widget-template-page">
                    <FontAwesome name="arrow-circle-right" size="2x" onClick={ () => this.changeTemplatePage('next') }/>
                </div>
            );
        }
    }
}

WidgetTemplate.PropTypes = {
    setSelectedWidget: React.PropTypes.func.isRequired
};

WidgetTemplate.childContextTypes = {
    selectedTemplate: React.PropTypes.number
};

export default WidgetTemplate;

