import React from "react";

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>
// }

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) { 
            history.push('/');
        }
    }

    render() {
        return <span>hello</span>;
    }
}

export default Detail;