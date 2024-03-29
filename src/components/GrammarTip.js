import React, { Component } from 'react'
import {
  Col,
  Collapse,
} from 'reactstrap';

class GrammarTip extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        if (!this.props.tip) {
            return null;
        }

        return (
            <Col sm="12" className="mt-2">
                <button onClick={this.toggle} style={{ marginBottom: '1rem' }} href="#">&gt; Toggle grammar tip</button>
                <Collapse isOpen={this.state.collapse}>
                    {this.props.tip}
                </Collapse>
            </Col>
      )
    }
}

export default GrammarTip
