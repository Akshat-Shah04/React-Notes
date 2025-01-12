import React, { useState } from 'react'

function Fun_from_single() {

    const [form,setfrom] = useState("");

    function getchnage(e){
        setfrom(e.target.value)
        console.log(form)
    }

    return (
        <div className='container'>
            <form>
                <div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        {/* <input type="text" onChange={(e)=>setfrom(e.target.value)}  value={form} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" /> */}
                        <input type="text" name='' onChange={getchnage}  value={form} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Fun_from_single