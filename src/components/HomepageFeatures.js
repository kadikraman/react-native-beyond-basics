import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Pressable',
    Svg: require('../../static/img/teamwork.svg').default,
    description: (
      <>
        Using the the Pressable component in place of Touchable
      </>
    ),
  },
  {
    title: 'Animations',
    Svg: require('../../static/img/success.svg').default,
    description: (
      <>
        Explore full page animations with LayoutAnimation and more targeted animations with Reanimated 2
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
    title: 'Data persistance',
    Svg: require('../../static/img/winner.svg').default,
    description: (
      <>
        Learn how to persist data across sessions
      </>
    ),
  },
  {
    title: 'Push notifications',
    Svg: require('../../static/img/clover.svg').default,
    description: (
      <>
        Learn how to configure local and remote push notifications
      </>
    ),
  },
  {
    title: 'CI/CD and store deployments',
    Svg: require('../../static/img/idea.svg').default,
    description: (
      <>
        Read about how to prepare your app for store deployments
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
