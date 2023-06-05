import { useState } from "react";

function Form(){
    const [searchText, setSearchText]= useState();
    const [formData, setFormData]= useState();

    // to get single input value.
    const handleSearch = (event)=>{
        let value = event.target.value;
        setSearchText(value);
    }

    // to get multiple input values
    const handleChange = (event)=>{
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    //{firstname: value, email: value, password: value}

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
    }

    return(
        <div className="container">
            <h2 className="mb-5">Forms in React</h2>

            <input type="text" className="form-control mb-3" name="search" placeholder="search" onChange={handleSearch}/>
            <p>{searchText}</p>


            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="firstname" >First Name</label>
                    <input type="text" name="firstname" id="firstname" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email" >Email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={handleChange} />
                </div>

                <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Form;