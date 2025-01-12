import React from 'react'
import Class_props from './Class_props'
import Func_props from './Func_props'

function Props() {
    return (
        <div className='container'>
            {/* props :- properties  */}
            {/* props :- read only :- we can not chnage */}
            {/* props :- data trnstfer one compo to other compo */}
            <div className="row">
                <h1>Hello this class prop</h1>
                <Class_props title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
                <Class_props title="nature 1" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoQPrJvAncDxIlbv-IXDjOL9EEgkUU8qfVw&s" />
                <Class_props title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
                <Class_props title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
                <Class_props title="nature 1" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoQPrJvAncDxIlbv-IXDjOL9EEgkUU8qfVw&s" />
                <Class_props title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
            </div>
            <div className="row">
                <h1>Hello this func props</h1>
                <Func_props  title="nature 1" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoQPrJvAncDxIlbv-IXDjOL9EEgkUU8qfVw&s" />
                <Func_props  title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
                <Func_props  title="nature 1" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoQPrJvAncDxIlbv-IXDjOL9EEgkUU8qfVw&s" />
                <Func_props  title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
                <Func_props  title="nature 1" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoQPrJvAncDxIlbv-IXDjOL9EEgkUU8qfVw&s" />
                <Func_props  title="nature" desc="hello this image " img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" />
            </div>
        </div>
    )
}

export default Props