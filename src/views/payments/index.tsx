import React from "react";
import { Column, TableWithBrowserPagination } from "react-rainbow-components";
import { useQuery, gql } from "@apollo/client";

interface TableProps {
  elements: object[];
}

export function Table(props: TableProps) {
  return (
    <div className='rainbow-m-bottom_xx-large'>
      <TableWithBrowserPagination
        pageSize={5}
        data={props.elements}
        keyField='id'
      >
        <Column header='Name' field='name' />
        <Column header='Company' field='company' />
        <Column header='Email' field='email' />
        <Column header='Date of Birth' field='dob' />
        <Column header='City' field='city' />
      </TableWithBrowserPagination>
    </div>
  );
}

// interface Payment {
//   date: string;
//   frequency: string;
//   amount: number;
//   currency: {
//     name: string;
//     type: string;
//   };
//   description: string;
// }

interface Currency {
  email: string;
  // acronym: string;
}

export default function Payments() {
  const { data, loading } = useQuery<{ users: Currency[] }>(gql`
    {
      users {
        email
      }
    }
  `);

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.users.map((e) => (
            <li>{e.email}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}
