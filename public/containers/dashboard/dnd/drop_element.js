import React, { Component } from 'react';

import _ from 'lodash';

import style from '../../../../assets/stylesheets/dashboard/dnd.scss';

export default class Dropelement extends Component {

    renderWidgets(widgets) {
        return _.map(widgets, (val, index) => {
            var className = val === 8?  'col-lg-3 filled clearfix': 'col-lg-5 empty clearfix';
            return (
                <div key={index} className={className}>
                    {index}
                </div>
            );
        });
    }

    render() {
        return (
          <div className="drop-element clearfix">
              { this.renderWidgets([8,16,8,16,8,8]) }
          </div>
        );
    }
}