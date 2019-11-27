import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from "react-redux";

class LoadingOverLay extends PureComponent {

  render() {
    return (
        <Spinner
          visible={this.props.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          animation="fade"
        />
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#dcdfe0'
  },
});

const mapStateToProps = state => {
    return { spinner : state.Spinner }  ;
}

export default connect(mapStateToProps)(LoadingOverLay);