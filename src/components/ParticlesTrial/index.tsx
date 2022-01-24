import './index.css';
import { Component, Fragment, h } from 'preact';
import { Link } from 'preact-router/match';
import Particles from 'preact-particles';
// https://github.com/matteobruni/tsparticles/tree/main/components/preact

class ParticlesTrial extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    window.localStorage.setItem('visitHistory', '');
    return (
      <Fragment>
        <header class="app-header">
          <p class="app-title fade-in-down">React Note</p>
          <h1 class="fade-in-down">A site to show React knowledge</h1>
          <p class="app-subtitle fade-in-left">
            I{' '}
            <a
              class="link"
              href="https://github.com/DamengRandom"
              target="_blank"
            >
              DamengRandom
            </a>{' '}
            have summarized some essential React knowledge points. Those points
            are explained with my personal understanding points and the code
            examples. This site is able to be utilized for knowledge recalling
            since I got fish (🐡) memory ..
          </p>
          <p class="app-subtitle fade-in-left">
            Please click the 'READ MORE' button to check it in details ~~ (👇)
          </p>
          <p class="read-more fade-in-left">
            <Link class="button button-border" href="/props-states">
              READ MORE
            </Link>
          </p>
        </header>
        <Particles
          id="bgAnimation"
          options={{
            background: {
              color: {
                value: '#add8e6',
              },
            },
            fpsLimit: 160,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 0.4,
                  size: 40,
                },
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 40,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#fff',
              },
              links: {
                color: '#fff',
                distance: 100,
                enable: true,
                opacity: 0.4,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: 'square',
              },
              size: {
                random: true,
                value: 4,
              },
            },
            detectRetina: true,
          }}
        />
      </Fragment>
    );
  }
}

export default ParticlesTrial;
