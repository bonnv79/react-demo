import React from 'react';
import FilterLink from '../containers/FilterLink';
import { FiltersAction } from '../actions';

function Footer() {
    return (
        <div>
            <span>Show: </span>
            <FilterLink filter={FiltersAction.SHOW_ALL} >
                All
            </FilterLink>
            <FilterLink filter={FiltersAction.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={FiltersAction.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    )
}

export default Footer;