import React, { useState } from 'react';
import {navigate} from '@reach/router';

import { Router } from '@reach/router';

import Core from './../Core';

const SearchBar = () => {
    //state needed? Probably.
    const [state, setState] = useState({
        catBox:"",
        idBox:"",

    });
    const changeHandler = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    const submitHandler = e => {
        navigate('/'+state.catBox+'/'+state.idBox);
    }
    return (
        <div>
            <Router>
                <Core path="/:cat/:id" />
            </Router>
        </div>
    );
}

export default SearchBar;