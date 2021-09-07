import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import {Input, Wrapper, Form} from "../Login/Login.js";
import styled from "styled-components";
import {DialogShadow, DialogContent, ConfirmButton}  from "../FoodDialog/FoodDialog.js";

const AddressField = styled(Input)`
    margin: 2px;
    padding:2px;
    width: 550px;
    height: 100px;
    text-align: left;
`;

const OrderButton = styled(ConfirmButton)`
    margin: 35px;
    padding: 20px;
    font: 20px Arial;
`;


export default function Address(props) {
  if (!props.isAddress) return null;
  return <AddressForm {...props}/>;
}


 function AddressForm({setIsAddress, orders, setOrders}) {
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    console.log(phone);
    orders.address = address;
    orders.phone = phone;
  };

   function close()
   {
        setIsAddress();
   }

   function makeOrder()
   {
        console.log(orders);
        //submitOrder(orders);
        //setOrders([]);
   }

  return (
    <>
    <DialogShadow onClick={close}/>
    <Wrapper>
    <Form>
    <DialogContent>
     <h2>Phone Number</h2>
     <Input value={phone} onInput={e => setPhone(e.target.value)} placeholder="Enter your phone number"/>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <h2>Address</h2>

            <AddressField {...getInputProps({ placeholder: "Enter your address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
     <h2>Cash On Delivery payment!!!</h2>
     <OrderButton name="makeOrder" onClick={()=> makeOrder()}>Make your order</OrderButton>
     </DialogContent>
    </Form>
    </Wrapper>
    </>
  );
}

function submitOrder(username,orders){
    fetch("http://localhost:5000/api/post/order", {
         method: "POST",
         body: JSON.stringify([orders, {user:username}]),
         headers: {"Content-Type": "application/json"}})
      .then(
        (result) => {

        },
        (error) => {
            console.log(error);
        }
      )
}