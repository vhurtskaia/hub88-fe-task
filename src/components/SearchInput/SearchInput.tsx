import { Input } from '@heathmont/moon-core-tw';
import { DebouncedFunc } from 'cypress/types/lodash';
import debounce from 'lodash.debounce';
import { JSX, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '@/features/countries/countriesSlice';


export const SearchInput = (): JSX.Element => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const handleChangeDebounced = useCallback(
    debounce(async () : DebouncedFunc<(countryQuery: string) => Promise<void>> => {
      const value = ref.current?.value?.toUpperCase() ?? '';
      return dispatch(setQuery(value));
    }, 600),
    [dispatch],
  );

  return (
    <Input
      id="countryCode"
      type="text"
      className={'w-full'}
      onChange={handleChangeDebounced}
      placeholder="Search by country code"
      ref={ref}
      maxLength={2}
      autoFocus
    />
  );
};
