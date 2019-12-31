import React from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { getLastYears } from '../utils/date'

const LAST_10_YEARS = 10

class PageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.years = getLastYears(LAST_10_YEARS)
  }
  render() {
    const { page, getPhotos } = this.props
    return (
      <Page
        photos={page.photos}
        year={page.year}
        years={this.years}
        isFetching={page.isFetching}
        error={page.error}
        getPhotos={getPhotos}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
