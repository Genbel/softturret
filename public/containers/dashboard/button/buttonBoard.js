import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WidgetList from 'components/dashboard/button/widgetList';
import ButtonList from 'containers/dashboard/button/buttonList';
import FontAwesome from 'react-fontawesome';
import { fetchWidgets } from 'actions/dashboard/widgetActions';
import { getAllWidgets, getWidgetButtons } from 'reducers/dashboard/widgetReducer';
import style from '../../../../assets/stylesheets/dashboard/button.scss';
import spinner from '../../../../assets/img/gears.gif';

class ButtonBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widgetMode: true,
            widgetId: null
        }
    }
    componentDidMount(){
        // this has to check first if we exec before the fetchWidgets
        this.props.fetchWidgets();
    }

    showWidgetList() {
        this.setState({
            widgetMode: true,
            widgetId: null
        });
    }

    widgetSelected(widgetId) {
        this.setState({
            widgetId,
            widgetMode: false
        })
    }

    renderSpinner() {
        let important = {
            backgroundImage: `url("${spinner}")`,
            width: '160px',
            height: '160px',
            marginTop: '150px',
            marginLeft: '200px'
        };
        return <div className="row col-lg-12" style={ important }></div>;
    }

    renderWidgetList() {
        if(this.props.isFetching) {
            return this.renderSpinner();
        } else {
            if(this.state.widgetMode) {
                return <WidgetList
                    widgets={ this.props.widgets }
                    widgetSelected={ (widgetId) => this.widgetSelected(widgetId) }/>;
            } else {
                return <ButtonList
                    widgetId={ this.state.widgetId }
                    buttonList={ this.props.buttons }/>;
            }
        }
    }

    render() {
        return (
            <div className="button-board">
                <div className="row">
                    <div className="col-lg-12 headline">
                        <h5> Choose the widget and set the tag in the button </h5>
                    </div>
                    <div className="col-lg-1">
                        {
                            !this.state.widgetMode &&
                            <FontAwesome
                                name="chevron-circle-left"
                                size="2x"
                                onClick={ () => this.showWidgetList() }
                                className="back-button"/>
                        }
                    </div>
                    <div className="col-lg-10">
                        { this.renderWidgetList() }
                    </div>
                </div>
            </div>
        );
    }
}

ButtonBoard.PropTypes = {
    fetchWidgets: React.PropTypes.func.isRequired,
    widgets: React.PropTypes.func.isRequired,
    isFetching: React.PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWidgets }, dispatch);
}
function mapStateToProps(state) {
    return {
        isFetching: state.dashboard.widgets.isFetching,
        widgets: getAllWidgets(state.dashboard.widgets)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBoard);