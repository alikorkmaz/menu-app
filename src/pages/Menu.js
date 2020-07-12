import React from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../actions";

class Menu extends React.Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.menu)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
  };
};

export default connect(
  mapStateToProps,
  { fetchMenu }
)(Menu);
