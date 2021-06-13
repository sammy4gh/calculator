import React from 'react';
import classNames from 'classnames'

const Key = ({keypad}) => {

    const sections = ['first', 'second', 'third', 'fourth', 'fifth']


        return (




           <div
           className={classNames(keypad.class[0], keypad.class[1])}
           id={keypad.id}

           >
               {keypad.key}
           </div>




        );



}

export default Key;