import { TOGGLE_BREADCRUMB } from './breadcrumbActions';

const breadcrumb = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_BREADCRUMB:
      return Object.assign({}, state, {
        open: !state.open
      });

    default:
      return state;
  }
};

export default breadcrumb;
