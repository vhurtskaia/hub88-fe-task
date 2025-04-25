import { LazyQueryExecFunction, NetworkStatus, useLazyQuery } from '@apollo/client';
import { Table } from '@heathmont/moon-table-v8-tw/lib/es';
import type { ColumnDef } from '@heathmont/moon-table-v8-tw/lib/es/private/types';
import { useMemo, useCallback, JSX, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { COUNTRIES_LIST } from '@/apollo/countries';
import { CountriesList, CountriesCode, Country } from '@/apollo/types';
import { CountryQuery } from '@/features/countries/countriesSelectors';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { wrapper, box } from './style.module.css';

type DefaultHelper = {
  code: string;
  name: string;
}

export default function TableCountries(): JSX.Element {
  const queryFromStore = useSelector(CountryQuery);

  const [getCountries, { loading, error, data, networkStatus }] = useLazyQuery<
    CountriesList,
    CountriesCode
  >(COUNTRIES_LIST, {
    variables: {
      code: queryFromStore,
    },
    pollInterval: 1000 * 60 * 30,
    notifyOnNetworkStatusChange: true,
  });

  const getCountriesWrapper = (func: LazyQueryExecFunction<CountriesList, CountriesCode>) => func();

  useEffect(() => {
    getCountriesWrapper(getCountries);
  }, []);

  const TableMessage = (): JSX.Element => {
    if (networkStatus === NetworkStatus.refetch) return <p className={box}>Fetching..</p>;

    if (loading) return <p className={box}>Loading...</p>;

    if (error) return <p className={box}>Error: {error.message}</p>;

    if (!data?.countries.length) return <p className={box}>Empty list</p>;

    return <></>;
  };

  const columns = useMemo<ColumnDef<{}, DefaultHelper>[]>(
    () => [
      {
        id: 'code',
        header: () => <SearchInput />,
        accessorKey: 'code',
        cell: (props) => props.getValue(),
      },
      {
        id: 'name',
        header: () => 'Name',
        accessorKey: 'name',
        cell: (props) => props.getValue(),
      },
    ],
    [],
  );

  const makeData = useCallback((countryList: Country[]) => {
    return countryList.map((country) => ({
      code: <span className={'text-1xl'}>{country.code}</span>,
      name: <span className={'text-1xl'}>{country.name}</span>,
    }));
  }, []);

  const dataList = useMemo(() => {
    return data?.countries ? makeData(data.countries) : [];
  }, [makeData, data]);

  return (
    <div className={`${wrapper} w-full max-w-screen-lg border border-beerus rounded-lg overflow-hidden`}>
      <Table
        columns={columns}
        data={dataList}
        height={600}
        layout="stretched-auto"
        isResizable
        withCellBorder
      />

      <TableMessage />
    </div>
  );
}