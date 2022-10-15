import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {
    FilterWrapper,
    Label,
    Input
} from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, handleFilter }) => {    
    return (
    <FilterWrapper>
        <Label>
        <BsSearch /> Search
        <Input            
            value={value}
            name="filter"
            type="text"
            onChange={handleFilter}
            placeholder="Find contact by name"
        />
        </Label>
    </FilterWrapper>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
};

export default Filter;