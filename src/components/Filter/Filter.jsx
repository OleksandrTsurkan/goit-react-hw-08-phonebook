import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, selectContactsFilter } from 'redux/filters/slice';
import { FilterInput, FilterLabel } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectContactsFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <div>
      <FilterLabel>
        Find contacts by name:
        <FilterInput
          name="filter"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </FilterLabel>
    </div>
  );
};
