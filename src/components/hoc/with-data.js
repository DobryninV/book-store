import { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View)  => {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      isError: false
    }

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.getData !== this.props.getData) {
        this.updateData();
      }
    }

    updateData() {
      this.setState({ isLoading: true })
      this.props.getData()
        .then(data => {
          this.setState({
            data,
            isLoading: false
          });
        })
        .catch(error => {
          console.log("Hm< i have some Error:", error);
          this.setState({
            isLoading: false,
            isError: true
          })
        })
    };
    render() {
      const { data, isLoading, isError } = this.state;

      if (isLoading) {
        return <Spinner />
      }

      if (isError) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data} />
    }
  }
}

export default withData;

