import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 

// Abaixo a forma com componente de classe
export default class Post extends React.Component{
  constructor(props){
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  handleNavigate = () => {
    this.props.history.push('/posts');
  };

  render(){
    // console.log(this.props.match.params);
    // console.log(this.queryParams.get('meuQueryParam'));
    
    return(
      <>
        <button onClick={this.handleNavigate}>Voltar para lista de Posts</button>
        <h1>Post Page</h1>
      </>
    );
  }
}


//Abaixo a forma com componente funcional
// export default function Post(){
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   // console.log(params);
//   // console.log(queryParams.get('meuQueryParam'));

//   return <h1>Post page</h1>;
// }