import './App.css'
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card'

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Toilet paper',
      amount: 1.5,
      date: new Date(2021, 10, 14)
    },
    {
      id: 'el2',
      title: 'Bread',
      amount: 10,
      date: new Date(2021, 11, 14)
    },
    {
      id: 'el3',
      title: 'Books',
      amount: 3.4,
      date: new Date(2021, 12, 14)
    },
    {
      id: 'el4',
      title: 'Parfume',
      amount: 450,
      date: new Date(2021, 12, 28)
    },
  ];

  return (
    <Card >
      <h2>Let's get started</h2>
      <Expenses expenses={expenses} />
    </Card>
  );
}

export default App;
