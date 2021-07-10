import {withBookStoreService} from "../hoc";
import BookList from "../book-list/book-list";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <div>
        <BookList />
      </div>
    </div>
  )
}

export default withBookStoreService()(HomePage);