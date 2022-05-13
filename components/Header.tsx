function Header() {
  return (
    <div>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt=""
          className="cursor-pointer rounded"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
