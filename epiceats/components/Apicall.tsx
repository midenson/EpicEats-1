'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Apicall = () => {
    const [data, setdata] = useState('');
    const [error, seterror] = useState('');
    useEffect(() => {
        axios.get('https://8000-ayonaim-epiceats-9xu2quy3ks2.ws-eu115.gitpod.io/user')
        .then(res => {
            const data = res.data
            setdata(data.json)
            console.log(data)
        })
        .catch(error => {
            seterror(error.json)
            console.log(error)
        })
    }, [])

  return (
    <div>
        <div>
        {
            data && <div>
                {
                    data
                }
            </div>
        }
        </div>
        <div>
        {
            error && <div>{error}</div>
        }
        </div>
    </div>
  )
}

export default Apicall