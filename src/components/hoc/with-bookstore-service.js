import { BookStoreServiceConsumer } from "../bookstore-service-context";


const withBookStoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (bookstoreService) => {
            return <Wrapper {...props} bookstoreService={bookstoreService} />
          }
        }
      </BookStoreServiceConsumer>
    )
  }
}

export default withBookStoreService;