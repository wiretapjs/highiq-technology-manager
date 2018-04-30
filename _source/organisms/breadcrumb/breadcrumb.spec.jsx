import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from './Breadcrumb.jsx';

describe('<Breadcrumb />', function() {

    describe('presentational component', function() {

        let component;

        const getComponent = function(props = {}) {
            return <Breadcrumb { ...props } />;
        };

        describe('when initialized with optional parameters', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'className': 'banana'
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('o-breadcrumb banana')).toBe(true);
            });
        });
    });
});
