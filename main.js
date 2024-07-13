import './style.css';

import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);


app
  /*.load('https://prod.spline.design/gUK4reXOxNMlAwtP/scene.splinecode')*/
  .load('https://prod.spline.design/wgQbEbhhS1goBGhA/scene.splinecode')
  .then(() => {
    const table = app.findObjectByName("Table");

    gsap.set(table.scale, {
      x: 0.6, y: 0.6, z: 0.6
    })
    gsap.set(table.position, {
      x: 100, y: 200, z: -300
    })
    gsap.set(table.rotation, {
      x: 0, y: -Math.PI*0.2, z: 0
    })
    let scaletable = gsap.to(table.scale, {
      x: 0.6, y: 0.6, z: 0.6, duration: 1
    })
    let positiontable = gsap.to(table.position, {
      x: 100, y: 200, z: -300, duration: 1
    })
    let rotatetable = gsap.to(table.rotation, {
      x: 0, y: Math.PI*2 + table.rotation.y, z: 0, duration: 25, repeat: -1, ease: "none" 
    })

    let scaleProgress = 0;
    let positionProgress = 0;
    let rotationProgress = 0;
    let interval;
  
    gsap
      //part1
      .timeline({
        scrollTrigger: {
          trigger: '#part1',
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: true,
          onEnter: () => {
            rotationProgress = rotatetable.progress();
            scaleProgress = scaletable.progress();
            positionProgress = positiontable.progress();

            rotatetable.pause();
            gsap.to(table.rotation, {
              x: 0,
              y: -Math.PI*0.01,
              z: 0,
              duration: 1
            })
            gsap.to(table.scale, {
              x: 1, y: 1, z: 1,
            })
            gsap.to(tablet.position, {
              x: 300, y: 0, z: 1000,
            }, 0)
          },
          onLeaveBack: () => {
            const newrotateProgress = table.rotation.y / (Math.PI*2);
            rotatetable.progress(newrotateProgress).resume();
            clearInterval(interval);
            gsap.to(table.scale, {
              x: 0.6, y: 0.6, z: 0.6,
            })
            gsap.to(tablet.position, {
              x:100, y: 200, z: -300,
            })
          }
        }
      })

      //part2
      gsap
      .timeline({
        scrollTrigger: {
          trigger: '#part2',
          start: 'top 60%',
          end: 'bottom bottom',
          scrub: true,
          onEnter: () => {
            rotationProgress = rotatetable.progress();
            scaleProgress = scaletable.progress();
            positionProgress = positiontable.progress();

            rotatetable.pause();
            gsap.to(table.rotation, {
              x: 0,
              y: -Math.PI*1.5,
              z: 0,
              duration: 2
            })
            gsap.to(table.scale, {
              x: 1.2, y: 1.2, z: 1.2,
            })
            gsap.to(tablet.position, {
              x: 0, y: 0, z: 0,
            })
          },
          onLeaveBack: () => {
            const newrotateProgress = table.rotation.y / (Math.PI*2);
            rotatetable.progress(newrotateProgress).resume();
            clearInterval(interval);
            gsap.to(table.scale, {
              x: 1, y: 1, z: 1,
            })
            gsap.to(tablet.position, {
              x:300, y: 0, z: 1000,
            })
            gsap.to(table.rotation, {
              x: 0,
              y: -Math.PI*0.01,
              z: 0,
              duration: 1
            })
          }
        }
      })

      //part3
      gsap
      .timeline({
        scrollTrigger: {
          trigger: '#part3',
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: true,
          onEnter: () => {
            rotationProgress = rotatetable.progress();
            scaleProgress = scaletable.progress();
            positionProgress = positiontable.progress();

            rotatetable.pause();
            gsap.to(table.rotation, {
              x: -Math.PI*0.5,
              y: -Math.PI*0.3,
              z: -Math.PI*0.6,
              duration: 2
            })
            gsap.to(table.scale, {
              x: 1.2, y: 1.2, z: 1.2,
            })
            gsap.to(tablet.position, {
              x: 15, y: 250, z: -20,
            })
          },
          onLeaveBack: () => {
            /*const newrotateProgress = table.rotation.y / (Math.PI*2);
            rotatetable.progress(newrotateProgress).resume();*/
            clearInterval(interval);
            gsap.to(table.scale, {
              x: 1, y: 1, z: 1,
            })
            gsap.to(tablet.position, {
              x:300, y: 0, z: 1000,
            })
            gsap.to(table.rotation, {
              x: 0,
              y: -Math.PI*1.5,
              z: 0,
            })
          }
        }
      })
  })

  
/*Bar animation*/

  function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth) {
    gsap.to(".bar", {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          gsap.to(".bar", {
            width: onEnterWidth,
            duration: 0.2,
            ease: "none"
          });
        },
        onLeaveBack: () => {
          gsap.to(".bar", {
            width: onLeaveBackWidth,
            duration: 0.2,
            ease: "none"
          });
        }
      }
    });
  }
  animateBar("#nav", "0%", "1%");
  animateBar("#hero", "0%", "1%");
  animateBar("#part1", "35%", "0%");
  animateBar("#part2", "65%", "35%");
  animateBar("#part3", "100%", "65%");