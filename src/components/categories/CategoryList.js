import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <h5>Seçili Kategori {this.props.currenCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currenCategory: state.changeCategoryReducer
  }
}

export default connect(mapStateToProps)(CategoryList)