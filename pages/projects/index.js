import React from 'react';
import hooks from '../../hooks';
import Projects from '../../consts/project.json';
import EachProject from '../../components/EachProject';

const { useScrollProgressbar } = hooks;

export default () => {
  useScrollProgressbar();

  return (
    <div className="animated fadeIn container" style={{ marginTop: 25 }}>
      {
        Projects && Projects.map(el => (
          <EachProject
            key={el.id}
            img={el.img}
            name={el.name}
            url={el.url}
            describe={el.describe}
          />
        ))
      }
    </div>
  )
}