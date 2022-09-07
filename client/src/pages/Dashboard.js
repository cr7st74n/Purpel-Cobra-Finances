import React, { useState } from 'react'
import Modal from 'react-modal'
import { gql, useMutation, useQuery } from '@apollo/client'

const ADD_EXPENSE = gql`
mutation addExpense($name: String!, $expenseType: ID!, $price: Int!) {
  addExpense(name: $name, expenseType: $expenseType, price: $price) {
    _id
    email
    expenses {
      name
      price
    }
  }
}
`;

const GET_EXPENSETYPES = gql`
query getExpenseTypes{
  getExpenseTypes {
    _id
    expenseType
  }
  }
`;

const GET_USER = gql`
query Query($id: ID!) {
  getUser(_id: $id) {
    expenses {
      name
      expenseType
      price
    }
  }
}
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
export default function Dashboard(props) {
  const [formInput, setFormInput] = useState({
    name: '',
    expenseType: '',
    price: ''
  })
  const [addExpense] = useMutation(ADD_EXPENSE, {
    variables: {
      ...formInput,
      price: parseInt(formInput.price)
    }
  })
  const {loading, data, error} = useQuery(GET_EXPENSETYPES)
  const {loading: loading2, data: data2, error: error2} = useQuery(GET_USER)

  const handleAddExpense = async (event) => {
    event.preventDefault()
    const userData = await addExpense()
  }

  const handleInput = (event) => {
    console.log('select', event.target.name, event.target.value);
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    })
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h2>Welcome {props.user && props.user.email}</h2>
      <p>Budget</p>
      {data2 && props.user.id ? (
            <ul>
            {data2.getUser.map(exp => (
              <li key={exp._id}>{exp.name} - {exp.expenseType} - {exp.price}</li>
            ))}
            </ul>
      ) : <></>}
      <div>
        <button onClick={openModal}>Add New Expense</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Insert Expense Details</h2>
          <button onClick={closeModal}>close</button>
          <form>
            <input className='name' onChange={handleInput} name='name' value={formInput.name} type="text" placeholder="Name of Expense"/>
            <input className='price' onChange={handleInput} name='price' value={formInput.price} type="number" placeholder="Price of Expense"/>
            <div className="select" >
            <select onChange={handleInput} name='expenseType'>
                <option defaultChecked>Select Expense Type</option>
                {data && data.getExpenseTypes.map(expenseType => {
                  return <option key={expenseType._id} value={expenseType._id}>{expenseType.expenseType}</option>
                })}
                
            </select>
            <div className="select_arrow">
            </div>
        </div>
            <button onClick={handleAddExpense}>Submit</button>
          </form>
        </Modal>
      </div>
    </div>
  )
}
