import React, { useEffect, useState } from 'react';
import './Explore.scss';
import SearchSVG from '../../assets/svg/SearchSVG';
import { IImg } from './types';

const Explore = () => {
  const [rendered, setRendered] = useState(false);
  const [htmlString, setHtmlString] = useState<string[]>([]);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${currentPage}`;

  const onScrollList = (e: any) => {
    const scrollBottom = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;

    if (scrollBottom) {
      setFetching(true);
    }
  };

  const imgRender = ({ id, url }: IImg) => <img src={url} alt="" key={id} />;
  const anotherRender = () => {
    const element = document.querySelectorAll('.media-wrapper > img');
    const copy = [...element].slice();

    let wrapper: HTMLDivElement;
    let fourElementsWrapper: HTMLDivElement;
    let fourElementsInnerWrapperFirst: HTMLDivElement;
    let fourElementsInnerWrapperSecond: HTMLDivElement;

    let counterCopy = 0;
    for (let i = 0; i < 4; i++) {
      wrapper = document.createElement('div');
      fourElementsWrapper = document.createElement('div');
      fourElementsInnerWrapperFirst = document.createElement('div');
      fourElementsInnerWrapperSecond = document.createElement('div');

      if (!(counterCopy % 2)) {
        wrapper.classList.add('right-fullHeightBlock');
      } else {
        wrapper.classList.add('left-fullHeightBlock');
      }

      fourElementsWrapper.classList.add('fourElements-wrapper');
      fourElementsInnerWrapperFirst.classList.add('fourElements-innerWrapper');
      fourElementsInnerWrapperSecond.classList.add('fourElements-innerWrapper');

      copy.splice(counterCopy, 5).forEach((item, id) => {
        if (id == 4) {
          wrapper.append(item);
          fourElementsWrapper.append(fourElementsInnerWrapperFirst);
          fourElementsWrapper.append(fourElementsInnerWrapperSecond);
          wrapper.append(fourElementsWrapper);
        } else {
          if (id < 2) {
            fourElementsInnerWrapperFirst.append(item);
          } else {
            fourElementsInnerWrapperSecond.append(item);
          }
        }
      });
      copy.splice(counterCopy, 0, wrapper);
      counterCopy++;
    }
    const newHtmlStrings = copy.map((item) => item.outerHTML);
    setHtmlString((prevHtmlString) => [...prevHtmlString, ...newHtmlStrings]);

    document.querySelector('.media-wrapper')!.innerHTML = htmlString.join('');
  };

  useEffect(() => {
    if (fetching) {
      fetch(url)
        .then(async (response) => {
          const tempData = (await response.json()) as never[];
          setData([...data, ...tempData]);
          await setCurrentPage((prev) => prev + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    if (data.length > 0 && !rendered) {
      setRendered(true);
    }
  }, [data]);

  useEffect(() => {
    if (rendered) {
      anotherRender();
      console.log('render');
      setRendered(false);
    }
  }, [rendered, data]);

  useEffect(() => {
    if (htmlString.length > 0) {
      document.querySelector('.media-wrapper')!.innerHTML = htmlString.join('');
      console.log('html');
    }
  }, [htmlString]);

  return (
    <main className="explore-main-section" onScroll={(e) => onScrollList(e)}>
      <div className="search-input">
        <div className="input-svg">
          <SearchSVG isActive={false} />
          <input type="text" className="nickname-search" id="nickname-search" placeholder="Search" />
        </div>

        <div className="xmark-input"></div>
      </div>
      <div className="media-wrapper">{data.map(imgRender)}</div>
    </main>
  );
};

export default Explore;
