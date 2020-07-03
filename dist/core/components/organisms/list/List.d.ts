/// <reference types="react" />
import { ExternalHeaderProps } from '../grid/Header';
import { Data, Schema, GridProps, fetchDataFn } from '../grid';
import { TableProps } from '../table';
interface SyncProps {
    data: Data;
    schema: Schema;
    loading?: boolean;
    error?: boolean;
}
interface AsyncProps {
    fetchData: fetchDataFn;
}
interface SharedListProps {
    type?: GridProps['type'];
    size?: GridProps['size'];
    withHeader?: boolean;
    headerOptions?: ExternalHeaderProps;
    withCheckbox?: GridProps['withCheckbox'];
    withPagination?: GridProps['withPagination'];
    paginationType?: GridProps['paginationType'];
    pageSize?: GridProps['pageSize'];
    loaderSchema?: GridProps['loaderSchema'];
    multipleSorting?: boolean;
    sortingList?: GridProps['sortingList'];
    filterList?: GridProps['filterList'];
    errorTemplate?: GridProps['errorTemplate'];
    onRowClick?: GridProps['onRowClick'];
    onSelect?: TableProps['onSelect'];
    onPageChange?: GridProps['onPageChange'];
}
declare type SyncListProps = SyncProps & SharedListProps;
declare type AsyncListProps = AsyncProps & SharedListProps;
export declare type ListProps = (AsyncListProps & SyncListProps);
export declare const List: (props: ListProps) => JSX.Element;
export default List;
