import React from "react";
import { useState } from "react";

function Registration() {
  // ***************************************************
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = (event) => {
    setData([...data, form]);
    // setForm(form);
    console.log(event.data);
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  // ***************************************************
  // let[register,setRegister]=useState({
  //     name:'',
  //     date:'',
  //     gender:''
  // });
  // let updateInput=(event)=>{
  //     setRegister({
  //         ...register,
  //         [event.target.name]:event.target.value,
  //     });
  // }
  // let submitRegister=(event)=>{
  //     event.preventDefault();
  //     console.log(register);
  // }
  return (
    <>
      {/* <pre>{JSON.stringify(register)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <p className="h4">Registeration form</p>
              </div>
              <div className="card-body bg-light">
                {/* <form method='post' onSubmit={submitRegister}> */}
           
                  <div className="form-group">
                    <input
                      name="name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="date"
                      value={form.date}
                      onChange={(event) =>
                        setForm({ ...form, date: event.target.value })
                      }
                      type="date"
                      className="form-control"
                      placeholder="dob"
                    />
                  </div>
                  <label htmlFor="gender">Gender</label>
                  <div className="form-check">
                    <input
                      //  onChange={updateInput}
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="gender">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      //  onChange={updateInput}
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="gender">
                      Female
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-success btn-sm"
                      value="Register"
                      onClick={addData}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="data">
        <div className="data_val">
          <h4>Id</h4>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>

        {data.map((element, index) => {
          return (
            // <Fields key={index} name={element.name} email={element.email} index={index} />
            <div key={index} className="data_val">
              <h4>{index}</h4>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <div className="form-group">
                <input
                  onClick={() => removeItem(index)}
                  type="button"
                  className="btn btn-danger btn-sm"
                  value="Remove"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Registration;
