import React from 'react';

import { FiltersWrapper, Orderings, CurrencyFilters, CurrencyButton } from '../styles/ComponentStyles';

export default function CurrencyFilter({sorting,show}) {

  function changeSorting(e){
    const { value } = e.target;
    sorting(value)
  }
  function handleClick(e){
    const { name } = e.target;
    show(name)
  }
  return (
    <>
      <FiltersWrapper>
        <Orderings>
          <select onChange={changeSorting}>
            <option value='-date'>Sort by Date descending (default)</option>
            <option value='date'>Sort by Date ascending</option>
            <option value='-amount_in_huf'>Sort by Amount descending</option>
            <option value='amount_in_huf'>Sort by Amount ascending</option>
          </select>
        </Orderings>
        <CurrencyFilters>
          <li>
            <CurrencyButton
             onClick={handleClick}
              name='ALL'
            >
              ALL
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
             onClick={handleClick}
              name='HUF'
            >
              HUF
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
             onClick={handleClick}
              name='USD'
            >
              USD
            </CurrencyButton>
          </li>
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
}
