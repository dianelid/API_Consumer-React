import styled from 'styled-components';
import {
  Container,
  TableCell,
  Button,
  TableRow,
  TableHead,
  List,
} from '@material-ui/core';

export const StyledContainer = styled(Container)`
  padding: 1.25rem;
  .button-grid {
    text-align: left;
  }
  .pr {
    float: inline-end;
    > * {
      margin-left: 1rem;
    }
  }
  .title {
    font-size: 1.25rem;
  }

  .text {
    font-size: 0.875rem;
  }
`;

export const StyledContent = styled(Container)`
  background: #FFFFFF;
  border: 0.0625rem solid #DADADA;
  border-radius: .625rem;
  padding: 0 !important;
  min-height: 70vmin;
  display: flex;
  overflow: hidden;

  .divider {
    height: 100%;
    border-right: 0.0625rem solid #DADADA;
  }
`;

export const StyledList = styled(List)`
  padding: 0 !important;

  .MuiListItem-root.Mui-selected {
    border-right: 0.3125rem solid #036B9A;
    background: #E4F7FF;
    &:hover {
      background: #F3FBFF;
    }
  }

  .MuiListItem-root {
    padding: 0;
    .MuiTouchRipple-child {
      background: #3DAFE3;
    }
  }

  .MuiListItem-root:hover {
    background: #F3FBFF;
  }

  .MuiListItemText-root > span {
    font-size: .9rem;
  }
`;

export const StyledActionButton = styled(Button)`
  && {
    text-transform: none;
    font-weight: 500;
    font-size: .75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    box-shadow: none;
    float: right;
    margin: .8rem 0 0 .8rem;
  }
`;

export const StyledTableHead = styled(TableHead)`
  border-bottom: 0.0625rem solid #DADADA;
  min-height: 2.5rem;
  max-height: 2.5rem;
  th {
    white-space: nowrap;
  }
  .MuiTableCell-root {
    font-weight: 600;
    line-height: .825rem;
    color: #949494;
    font-size: .625rem;
    padding: 0.875rem;
  }
`;

export const StyledTableCell = styled(TableCell)`
  && {
    padding: 0.375rem 1.5rem 0.375rem 1rem;
    color: rgba(0, 0, 0, 0.75);
    font-size: .75rem;

    svg {
      vertical-align: middle;
    }
  }
`;

export const StyledTableRow = styled(TableRow)`
  && {
    cursor: pointer;
    &:hover {
      background-color: #F3FBFF;
    }
  }
`;
