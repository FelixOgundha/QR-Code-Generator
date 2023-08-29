import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import receiptArt from "../assets/receipt-art.png"

import moment from 'moment';
const Index = () => {
  const [reference, setReference] = React.useState(null)
  const [customer, setCustomer] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [amount, setAmount] = React.useState(null)
  const [date, setDate] = React.useState(null)
  const [newOrder, setNewOrder] = React.useState(false)
  const [showReceipt, setShowReceipt] = React.useState(false)
  const [receiptData, setReceiptData] = React.useState(null)

  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  const handleNewOrder = () => {
    setShowReceipt(false)
    refenceCodeGenerator()
    setName("")
    setAmount("")
    setCustomer("")
    setNewOrder(true)
    setReceiptData("")

    var date = moment(Date.now()).format('lll')
    setDate(date)
  }

  const CreateReceipt = () => {
    const data = `Full Name: ${name},Amount: ${amount},Reference Code: ${reference},Date: ${date},`


    setReceiptData(data)
    setShowReceipt(true)
    setNewOrder(false)
  }

  const listStyle = {
    textAlign: 'left',

  }

  function refenceCodeGenerator() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    let length = 10;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset.charAt(randomIndex);
    }

    setReference(code)
  }

  useEffect(() => {
    var date = moment(Date.now()).format('lll')
    setDate(date)
    refenceCodeGenerator()
    setNewOrder(true)
  }, [])


  return (
    <div className='  d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundColor: "whitesmoke" }}>
      <Paper sx={{ width: "80%" }} className='p-5'>
        <div className="row">
          <div className="col-lg-6 col-sm-12 ">
            <TextField
              id="filled-basic"
              label="Reference Code"
              variant="filled"
              fullWidth
              value={reference}
              InputProps={{
                readOnly: true,
              }} />

            <FormControl
              fullWidth
              variant="filled"
              className='my-3'
            >
              <InputLabel id="demo-simple-select-label">Customer</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customer}
                label="Customer"
                onChange={handleChange}
              >
                <MenuItem value="walk in">Walk In</MenuItem>
                <MenuItem value="corporate">corporate</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="filled"
              fullWidth
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <TextField
              id="filled-basic"
              label="Amount"
              variant="filled"
              fullWidth
              className='my-3'
              onChange={(e) => setAmount(e.target.value)}
              value={amount} />

            <TextField
              id="filled-basic"
              label="Date"
              variant="filled"
              fullWidth
              value={date}
            />

            {
              newOrder ?
                <Button
                  variant="contained"
                  className='w-100 my-3'
                  onClick={CreateReceipt}
                >
                  Order
                </Button>
                :
                <Button
                  variant="contained"
                  className='w-100 my-3 bg-success'
                  onClick={handleNewOrder}
                >
                  Create New Order
                </Button>
            }
          </div>
          <div className="col-lg-6 col-sm-12 ">
            {
              showReceipt ?
                <>
                  <div className="bg-info p-1 w-100" />
                  <div className="text-center">
                    <Typography variant="h5" gutterBottom className='py-2'>
                      My Receipt
                    </Typography>
                    <table class="table">
                      <thead>

                      </thead>
                      <tbody style={listStyle}>
                        <tr>
                          <td><strong>FullName</strong></td>
                          <td>{name}</td>
                        </tr>
                        <tr>
                          <td><strong>Refence Code</strong></td>
                          <td>{reference}</td>
                        </tr>
                        <tr>
                          <td><strong>Customer Type</strong></td>
                          <td>{customer}</td>
                        </tr>
                        <tr>
                          <td><strong>Amount</strong></td>
                          <td>{amount}</td>
                        </tr>
                        <tr>
                          <td><strong>Date</strong></td>
                          <td>{date}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src={
                      `https://api.qrserver.com/v1/create-qr-code/?data=${receiptData}&amp;size=100x100`
                    }
                      alt=""
                      title=""
                      className='img-fluid '
                      style={{ width: "100px" }}
                    />
                  </div>
                </>
                :
                <div className="d-flex align-items-center  h-100 flex-column" style={{
                  backgroundColor: "#F0F8FF"
                }}>
                  <Typography variant='h5' className='py-3'>
                    POS Receipt Generator
                  </Typography>
                  <img src={receiptArt} alt="" srcset="" className='img-fluid' style={{ width: "250px", height: "300px" }} />
                </div>
            }
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Index