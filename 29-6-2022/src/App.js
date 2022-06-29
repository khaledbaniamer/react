import Hooks from './components/reactHooks'
import {BrowserRouter , Route ,Routes , useParams} from 'react-router-dom'

function App() {
  return (
    <div>
      <Hooks />
    </div>
  );
}

// function BlogPost() {
//   let { id } = useParams();
//   console.log(useParams());
//   return <div style={{ fontSize: "50px" }}>
//            Now showing post {id}
//          </div>;
// }

// function Hello (){
//   return(
//     <div>
//       <h3>Hello</h3>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>

//   <Routes>
//         <Route path="/page/:id" element={<BlogPost />} />
//         <Route path="/" element={<Hello />} />
//   </Routes>
//     </BrowserRouter>
//   );
// }



export default App;
