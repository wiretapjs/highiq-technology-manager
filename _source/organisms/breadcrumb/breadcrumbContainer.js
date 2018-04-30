import { connect } from 'react-redux';
import Breadcrumb from './Breadcrumb.jsx';
import { toggleBreadcrumb } from './breadcrumbActions';

export const mapStateToProps = function(state) {
  return {
    open: state.breadcrumb.open
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    onBreadcrumbClick: () => {
      dispatch(toggleBreadcrumb());
    }
  };
};

const BreadcrumbContainer = connect(mapStateToProps, mapDispatchToProps)(
  Breadcrumb
);

export default BreadcrumbContainer;
