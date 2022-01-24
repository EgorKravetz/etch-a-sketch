const section = document.createElement('section');
document.body.append(section);

const slider = document.createElement('input')
slider.setAttribute('type', 'range');
document.body.append(slider);

slider.addEventListener('change', function() {
  while( section.hasChildNodes() ) {
      section.removeChild(section.firstChild);
    }

  let value = this.value;
  let i = value * value;
  
  while (i > 0) {
    const divs = document.createElement('div');
    divs.className = 'divs';
    divs.style.cssText = `width: calc(100% / ${value});
                          height: calc(100% / ${value});`;
                          
    divs.addEventListener('mousemove', () => {
    divs.setAttribute('class', 'over')
      
       }
     );

  section.append(divs);
  i--;

      }
    }
  );

