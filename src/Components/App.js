import React, { Component } from 'react';
import "./App.module.css";

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import LoaderGallery from './Loader/Loader';

import { getPictures } from '../helpers/helpers';


class App extends Component {
  state = {
    cards: [],
    query: "",
    page: 1,
    modalShow: false,
    largeImageURL: "",
    error: false,
    loader: true,
  }

  updateCards = (cards) => {
    this.setState({
      cards,
      page: 2
    })
  }

  showMore = () => {
    const { query, page } = this.state
    getPictures(query, page)
      .then(data => {
        this.setState(prev => ({
          cards: [...prev.cards, ...data.hits],
          page: prev.page + 1
        }))
      })
  }
  activePictures = ({ target }) => {
    const picture = target.dataset.source
    this.setState({
      largeImageURL: picture
    })
    this.toggleModal()
  }
  toggleModal = () => {
    this.setState(state => ({
      modalShow: !state.modalShow,
    }))
  }
  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  }
  setSearch = ({ target }) => {
    this.setState({
      query: target.value
    })
  }
  componentDidMount() {
    getPictures(this.state.query).then(data => {
      const result = data.hits
      this.setState({
        cards: [...result],
        loader: false,
        page: 2
      })
    })
  }
  componentDidUpdate() {
    this.scrollTo()
  }
  render() {
    const { cards, loader, modalShow, largeImageURL, query } = this.state
    return (
      <>
        <Searchbar
          search={query}
          updateCards={this.updateCards}
          setSearch={this.setSearch}
        />
        <ImageGallery cards={cards} toggleModal={this.toggleModal} activePictures={this.activePictures} />
        {loader
          ? <LoaderGallery />
          : <> {cards.length && <Button showMore={this.showMore} />}
          </>

        }
        {modalShow && <Modal toggleModal={this.toggleModal} largeImageURL={largeImageURL} />}

      </>
    );
  };
}
export default App;
