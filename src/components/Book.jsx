import { Link } from "react-router-dom";

export default function book({item}) {
  const booksContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  };
  const bookInfoStyle = {
    display: 'flex',
    flexDirection: ' column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <div style={booksContainerStyle}>
        <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width='200px' alt={item.title} />
        <div>{item.title}</div>
        </Link>
    </div>
  )
}
