import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

class SingleMovieDetails extends Component {
  state = {
    singleMovieData: [],
    castDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getSingleMovieDetails()
  }

  getSingleMovieDetails = async () => {
    const key = '2abedcb807ab04027da1284d52c87a8b'

    const {match} = this.props
    const movieId = match.params.movie_id
    
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-U`

   
    const response = await fetch(url)
    const data = await response.json()
 
    if (response.ok === true) {
      const imgUrl = 'https://image.tmdb.org/t/p/w500'
      const updatedData = {
        id: data.id,
        posterPath: imgUrl + data.poster_path,
        title: data.title,
        rating: data.vote_average,
        duration: data.runtime,
        genre: data.genres,
        releaseDate: data.release_date,
        overview: data.overview
      }
      console.log(updatedData)

      this.setState({singleMovieData: updatedData, isLoading: false})
    }
  }

  renerLoader = () => {
    return (
      <div className="loader-container">
        <Loader type="TailSpin" height={50} width={50} />
      </div>
    )
  }

  renderSingleMovieContent = () => {
    const {singleMovieData} = this.state
   
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="single-movie-container">
          <div className="single-movie-responsive-container">
            {isLoading ? this.renerLoader() : this.renderSingleMovieContent()}
          </div>
        </div>
      </>
    )
  }
}

export default SingleMovieDetails
