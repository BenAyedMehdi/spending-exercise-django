import React, { useState , useEffect} from 'react';
import Form from './components/Form';
import FiltersAndOrderings from './components/FiltersAndOrderings';
import SpendingList from './components/SpendingList';
import Layout from './components/Layout';

export default function App() {
  const [spendings, setSpendings] = useState([]);
  const [spendingsToShow, setSpendingsToShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sorting, setSorting] = useState("-date");

  useEffect(() => {
     fetchSpendings();
  }, []);

   const fetchSpendings= async () =>{
    setLoading(true);
    fetch(`http://localhost:8000/api/spendings`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const body = await res.json();
        return {
          status: res.status,
          body,
        };
      })
      .then((response) => {
        if (response.status === 200) {
          setSpendings(response.body.sort((a,b) => {
            return b.spent_at.localeCompare(a.spent_at)
          }));
          setSpendingsToShow(response.body.sort((a,b) => {
            return b.spent_at.localeCompare(a.spent_at)
          }))
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function addSpending(spending){
    console.log(spending)
    fetch(`http://localhost:8000/api/spendings/`, {
      method: "POST",
      headers: { 'Accept': 'application/json',"Content-Type": "application/json" },
      body: JSON.stringify(spending)
    })
      .then(async (res) => {
        const body = await res.json();
        setSpendings([body, ...spendings])
        setSpendingsToShow([body, ...spendings])
        return {
          status: res.status,
          body,
        };
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function sortBy(choice){
    setSorting(choice)
    setSpendingsToShow (spendings.sort((a, b)=>{
      if(choice==='-date'){
        return b.spent_at.localeCompare(a.spent_at)
      }
      if(choice==='date'){
        return a.spent_at.localeCompare(b.spent_at)
      }
      if(choice==='-amount_in_huf'){
        return compareSpendings(b,a);
      }
      if(choice==='amount_in_huf'){
        return compareSpendings(a,b);
      }
      return 0
    }));
    setSpendingsToShow(spendings)
  }
  
  function compareSpendings(a,b){
    if(a.currency === b.currency){
      return a.amount - b.amount;
    }else{
      const aa = a.currency=='USD'? a.amount*400 : a.amount
      const bb = b.currency=='USD'? b.amount*400 : b.amount
      return aa-bb;
    }
  }

  function show(choice){
    setSpendingsToShow(spendings.filter((a)=>{
      if(choice==='ALL'){
        return a
      }
      if(choice=== a.currency){
        return a;
      }
    }));
  }

  return (
    <>
      <Layout>
        <Form addSpending={addSpending}/>
        <FiltersAndOrderings show={show} sorting={sortBy}/>
        <SpendingList
          loading={loading}
          error={error}
          spendings={spendingsToShow}
        />
      </Layout>
    </>
  );
}
