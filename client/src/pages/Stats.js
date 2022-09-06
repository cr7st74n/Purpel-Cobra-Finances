import {React} from 'react'
import {gql, useQuery} from '@apollo/client'

const GET_EXPENSES = gql`
query Query {
  getExpenses {
    name
    expenseType
    price
  }
}
`;

export default function Stats(){
  const [error, loading, data] = useQuery(GET_EXPENSES)
    console.log(data.getExpenses);
  
    return (
      <div>
          <h2>Expenses Breakdown</h2>
          <div className='Auto'>
            {error && <p className="error">{error.message}</p>}
            {loading && <p>Loading...</p>}
            {data && (
            <ul>
            {data.getExpenses.map(exp => (
              <li key={exp._id}>{exp.name} - {exp.price}</li>
            ))}
            </ul>
            )}
          </div>
      </div>
    )
  }
  