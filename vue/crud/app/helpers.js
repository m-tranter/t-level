'use strict';
import {v4} from 'uuid';
const myLogger = (req, _, next) =>{
    console.log(`incoming: ${req.path}`);
    next();
};


const makeItem = (item) => {
    return {...item, id:v4() }
}
export { myLogger, makeItem };
