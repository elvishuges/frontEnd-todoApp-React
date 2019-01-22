import React from 'react'

export default props =>{
      if(props.test){
          return props.children // retorna o bejeto que esta dentro dele..
      }
      return false;
    }