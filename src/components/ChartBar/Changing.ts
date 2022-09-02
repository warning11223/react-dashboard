import React from "react";

type PropsType = {
    values: number[];
    interval?: any;
    children?: any;
}

type StateType = {
    valuesIndex: number;
}

class ChangingProgressProvider extends React.Component<PropsType, StateType> {
    static defaultProps = {
        interval: 1000
    };

    state = {
        valuesIndex: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
            });
        }, this.props.interval);
    }

    render() {
        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

export default ChangingProgressProvider;
