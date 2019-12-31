import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
    onBtnClick = e => {
        this.props.getPhotos(+e.target.innerText)
    };
    renderTemplate = () => {
        const { photos, isFetching, error } = this.props;

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return photos.map((entry) => (
                <div key={entry.id} className="photo">
                    <p>
                        <img src={entry.sizes[0].url} alt="" />
                    </p>
                    <p>{entry.likes.count} ❤</p>
                </div>
            ))
        }
    };

    renderButtons = () => {
        const { years } = this.props;
        return years.map((year) => {
            return (<button className="btn" key={year} onClick={this.onBtnClick}>{year}</button>)
        })
    };

    render() {
        const { year, photos } = this.props;
        console.log('<Page/> render');
        return (
            <div className="ib page">
                <p>{this.renderButtons()}</p>
                <h3>За {year} год у тебя {photos.length} фото.</h3>
                {this.renderTemplate()}
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    years: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
};