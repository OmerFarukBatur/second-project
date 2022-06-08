import {React, useState} from 'react'

function InputExample() {
const [form,setForm] = useState({
  name: 'Ali',
surName: 'Yıldız'
});
const onChangeInput = (e) =>{
   console.log(e);
   setForm({...form,[e.target.name]: e.target.value});
};

  return (
    <div>
      Name:
      <br></br>
      <input name='name' value={form.name} onChange={onChangeInput}></input>
      <br></br>
      Surname:
      <br></br>
      <input name='surname' value={form.surName} onChange={onChangeInput}></input>
      <br></br>
      <br></br>
      {form.name} {form.surName}
    </div>
  )
}

export default InputExample
