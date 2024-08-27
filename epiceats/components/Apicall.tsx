'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Apicall = () => {
    const [data, setdata] = useState([]);
    const [error, seterror] = useState('');
    useEffect(() => {
        // fetch('https://8000-midenson-epiceats-5e1zywn1xjr.ws-eu115.gitpod.io/user/', {
        //     credentials: 'include', // or 'same-origin'
        //     headers: {
        //       'Accept': 'application/json', 
        //     }
        //   })
        //   .then(res => console.log(res))
        //   .then(res => setdata([res]))
        //   .catch(error => {
        //     console.log(error.message)
        //   })
      fetch('https://8000-midenson-epiceats-5e1zywn1xjr.ws-eu115.gitpod.io/user', {
        credentials: 'include', // or 'same-origin'
        headers: {
          'Accept': 'application/json', 
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON data from the response
        })
        .then(data => {
          console.log(data); // Handle the data here
          setdata(data)
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });

    }, [])
    return (
      <div>
      </div>
    )
}

export default Apicall