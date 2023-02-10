import React, { useEffect, useState } from 'react';
import './Explore.scss';
import { IImg } from './types';

const Explore = () => {
  //const [idManager, setId] = useState(1);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${currentPage}`;
  const loadContent = async () => {
    if (currentPage < 100) {
      // let twentyElements = url + '?';
      // for (let i = loaded; i < loaded + 20; i++) {
      //   twentyElements = twentyElements + 'id=' + i + '&';
      // }
    }
  };

  const onScrollList = (e: any) => {
    const scrollBottom = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;

    if (scrollBottom) {
      loadContent();
    }
    console.log(data);
    //document.querySelector('.media-wrapper')?.append(data.map(imgRender));
  };
  const imgRender = ({ id, url }: IImg) => <img src={url} alt="" key={id} />;
  useEffect(() => {
    if (fetching) {
      fetch(url)
        .then(async (response) => {
          const tempData = response.json();
          setData(await tempData);
          await setCurrentPage((prev) => prev + 1);
        })
        .finally(() => setFetching(false));
    }
  }, []);
  return (
    <main className="explore-main-section" onScroll={(e) => onScrollList(e)}>
      <div className="media-wrapper">{data.map(imgRender)}</div>
    </main>
  );
};

export default Explore;
