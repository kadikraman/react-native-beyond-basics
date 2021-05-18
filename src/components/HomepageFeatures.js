import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Review',
    Svg: require('../../static/img/teamwork.svg').default,
    description: (
      <>
        A review of the basic building blocks
      </>
    ),
  },
  {
    title: 'TypeScript',
    Svg: require('../../static/img/success.svg').default,
    description: (
      <>
        Using TypeScript to add types to JavaScript
      </>
    ),
  },
  {
    title: 'Splash screens, App Icons, custom fonts',
    Svg: require('../../static/img/prize.svg').default,
    description: (
      <>
        Make your app stand out with your own custom splash screens, app icons and custom fonts
      </>
    ),
  },
  {
    title: 'Images',
    Svg: require('../../static/img/winner.svg').default,
    description: (
      <>
        Persist data across sessions using AsyncStorage
      </>
    ),
  },
  {
    title: 'Vector Icons',
    Svg: require('../../static/img/clover.svg').default,
    description: (
      <>
        Spice up your app with vector icons
      </>
    ),
  },
  {
    title: 'Gestures and Animation',
    Svg: require('../../static/img/idea.svg').default,
    description: (
      <>
        Learn to use gestures and animation
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
