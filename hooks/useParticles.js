import { useEffect } from 'react';

export default () => {
  return useEffect(() => {
    window.particlesJS.load('particles-js', '/static/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);
};
