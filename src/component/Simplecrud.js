import React, { useState } from "react";

function Simplecrud() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    // setForm(form);
    console.log(data);
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <p className="h4">CRUD form</p>
              </div>
              <div className="card-body bg-light">
                {/* <form> */}
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
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-success btn-sm"
                    value="add"
                    onClick={addData}
                  />
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Simplecrud;
