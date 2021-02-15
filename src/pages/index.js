import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles.module.css';
import {useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Container} from "@material-ui/core";

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const theme = useTheme();
    const matchesSmDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
    <Layout
      title={`${siteConfig.title}`}
      description="The framework for creation of investing algorithms"
    >
          <br/>
          <br/>
          <Container maxWidth={"lg"}>
              <div style={{maxWidth:800}}>
                  <Typography variant={matchesSmDown? "h5" : "h4"}>
                      Creating investing algorithms starts with a stable foundation
                  </Typography>
                  <br/>
                  <Typography>
                      A complete framework for taking control over your investing algorithms
                      with reliable core components, extensions, utilities and orchestration features.
                  </Typography>
              </div>
          </Container>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
    </Layout>
  );
}

export default Home;
