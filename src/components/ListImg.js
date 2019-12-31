import React from 'react'
import PropTypes from 'prop-types'

const ListImg = ({ photos, openModal }) => {
  return photos.map(photo => (
    <div key={photo.id} className="photo">
      <p>
        <img
          src={photo.sizes[0].url}
          alt="thumbnail vk"
          onClick={() => openModal(photo.sizes[2].url)}
        />
      </p>
      <p>{photo.likes.count} ❤</p>
    </div>
  ))
}

export default ListImg

ListImg.propTypes = {
  photos: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
}
