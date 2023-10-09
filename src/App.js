import Movie from './components/Movie'
import { dummy } from "./movieDummy";
// dummy의 정보를 Movie함수에 넣어 실행한다

function App() {
  return (
    <div>
      <div className="app-container">
        {
          dummy.results.map((item) => {
            // map함수를 사용해 dummy파일 속 정보 수만큼 Movie함수를 실행한다
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                // dummy파일 속 정보와 Movie함수의 변수를 연결한다
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
