import React from 'react'
import Modal from 'react-modal'
import ListImg from './ListImg'
import ModalPhoto from './ModalPhoto'
import PropTypes from 'prop-types'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
}

export default class Photos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      activeUrl: '',
    }
  }

  openModal = url => {
    this.setState({ modalIsOpen: true, activeUrl: url })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, activeUrl: '' })
  }

  render() {
    const { photos } = this.props
    const { modalIsOpen, activeUrl } = this.state
    return (
      <React.Fragment>
        <ListImg photos={photos} openModal={this.openModal} />
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          style={modalStyles}
          onRequestClose={this.closeModal}
        >
          <ModalPhoto url={activeUrl} />
        </Modal>
      </React.Fragment>
    )
  }
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
}
