import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Парсинг',
    Svg: require('@site/static/img/parsing-cover.svg').default,
    description: (
      <>
       Колосально <strong>большой объём данных</strong> можно <strong>позаимствовать</strong> с сайтов и 
       публичных информационных систем, даже если у них <strong>нет описанного API</strong>.
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('@site/static/img/api-cover.svg').default,
    description: (
      <>
        Существует большое количество качественных источников данных с <strong>хорошо описанным API</strong>, 
        который позволяют получить <strong>данные связанные с высшим образованием</strong>.
      </>
    ),
  },
  {
    title: 'Инструменты',
    Svg: require('@site/static/img/tools-cover.svg').default,
    description: (
      <>
        «Управление на основе данных» не возможно без <strong>правильного набора инструментов</strong>, 
        находящихся в распоряжении Ваших <strong>соутрудников</strong>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
