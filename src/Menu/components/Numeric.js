import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Numeric() {

    const [count, setCount] = useState(1);
    const changeCount = (e) => {
        setCount(e.target.value)
    }
    return (
        <Box justifyContent='center' style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <RemoveIcon onClick={() => setCount(count - 1 < 1 ? 1 : count - 1)} style={{ background: '#E5E6E5', borderRadius: '50%', width: '30px', height: '30px' }
            } />
            <input placeholder={count}
                id='itemCount'
                value={count}
                onChange={changeCount}
                style={{
                    WebkitBorderRadius: '99em',
                    height: '30px', width: '80px',
                    margin: '0px 5px 0px 5px',
                    fontSize: '20px',
                    textAlign: 'center',
                    WebkitAppearance: 'none',
                    outline: 'none',
                }}
            />
            <AddIcon onClick={() => setCount(count + 1)} style={{ background: '#E5E6E5', borderRadius: '50%', width: '30px', height: '30px' }} />
        </Box >
    )
}

export default Numeric
