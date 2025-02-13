import { useState } from 'react'
import data from './data.json'
import './App.css'

function App() {
  const primaryColor = 'white'
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const bannerMovie = data[0];
  const movieList = data.slice(1);

  return (
    <div className='bg-[#192026] w-full font-poppins pt-[15px]'>
      {/* Header */}
      <header className='w-[1174px] h-[48px]  m-auto flex justify-between'>
        <h1 className='text-[36px] font-bold' style={{color: primaryColor}}>Anomine</h1>
        <nav className='w-[50%] mt-auto mb-auto'>
          <ul className='flex justify-around text-[18px] text-[#868686]'>
            <li><a href="!#">Home</a></li>
            <li><a href="!#">List anime</a></li>
          </ul>
        </nav>
        <input className='w-[375px] rounded-[999px] text-[18px] text-[#868686] bg-[#374151] pt-[8px] pb-[8px] pl-[18px]' type="text" placeholder='Search anime or movie' />
      </header>
      {/* Explore */}
      <main className='w-[1170px] mr-auto ml-auto'>
        <div className="explore">
          <h2 className='text-[32px] font-semibold mt-[29px]' style={{
            color: primaryColor
            }}>Explore</h2>
          <p className='text-[22px] text-[#868686] mt-[29px] mb-[29px]'>What are you gonna watch today ?</p>
          <section className='banner w-[100%] h-[400px] pl-[47px] rounded-[12px]' style={{
            color:primaryColor,
            backgroundImage: `linear-gradient(to right, rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0)), url(${bannerMovie.image})`
          }}>
            <h1 className='text-[36px] font-bold pt-[210px]' >{bannerMovie.movieName}</h1>
            <p className=' text-[16px] w-[571px] pt-[16px] line-clamp-3'>{bannerMovie.description} </p>
          </section>
        </div>
        {/* New release */}
        <div className="new-release">
          <h2 className='text-[36px] font-semibold mt-[29px] mb-[24px]' style={{color: primaryColor}}>New Release</h2>
          <div className="movie-list h-[310px] flex gap-[30px]">
            {movieList.map((movie) => (
            <div key={movie.id} className="movie-card w-[170px] h-[285px] bg-no-repeat flex flex-col justify-end items-center" style={{
               backgroundImage: `linear-gradient(to bottom, rgba(29, 29, 29, 0), rgba(15, 30, 41, 1)), url(${movie.image})`
            }} onClick={() => setSelectedMovie(movie)}>
              <p className='text-center text-[16px]' style={{color: primaryColor}}>Episode {movie.episode}</p>
              <h3 className='text-center text-[18px] font-semibold h-[55px] pt-[20px]' style={{color: primaryColor}}>{movie.movieName}</h3>
            </div>
        ))}
          </div>
        </div>

        {/* popup */}\
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setSelectedMovie(null)}>
          <div className="bg-white p-5 rounded-lg max-w-md text-center" onClick={(e) => e.stopPropagation()}>
            <div className='flex justify-center'>
              <div><img className='w-[120px]' src={selectedMovie.image} alt={selectedMovie.movieName}/></div>
              <div>
                <h2 className='text-[30px] font-bold ml-[20px] mt-[40px]'>{selectedMovie.movieName}</h2>
                <p><strong>Episode:</strong> {selectedMovie.episode}</p>
              </div>
            </div>
            
            <p className='text-justify indent-10 mt-3'>{selectedMovie.description}</p>
            <button className='w-[80px] bg-red-500 rounded-full p-[8px]' onClick={() => setSelectedMovie(null)}>Đóng</button>
            <a href="!#" className='w-[120px] bg-green-500 rounded-full p-[8px] ml-[10px] '>Xem phim</a>
          </div>
        </div>
      )}
      </main>
    </div>
  )
}

export default App
