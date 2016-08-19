import React, { Component } from 'react';

import _ from 'lodash';

export default class Dropboard extends Component {

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
          <div className="drop-board clearfix">
              { this.renderWidgets([8,16,8,16,8,8]) }
          </div>
        );
    }
}