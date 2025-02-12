// @ts-check
 const header = {
  backgroundColor: "#f5f5f5"
}

export const Header = () => {
  return  <header style={header}>Dogアプリ</header>
}

// const style = {
//   backgroundColor: "#c6e5d9",
//   width: "400px",
//   height: "30px",
//   padding: "8px",
//   margin: "8px",
//   borderRadius: "8px"
// }
// // CSSのコンポーネント内部での完結方法
// //reactはキャメルケースにする（CSSに関しても）

// export const InputTodo = (props) => {
//   const { todoText, onChange, onClick, disabled} = props;
//   return (
//       <div style ={style}>
//           <input disabled={disabled} placeholder='TODOを入力' value={todoText} onChange={onChange}/>
//           <button disabled={disabled} onClick={onClick}>追加</button>
//       </div>
//   );
//   }

// export default Header

